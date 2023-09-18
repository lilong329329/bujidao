import{_ as a,W as t,X as e,Z as n,$ as p,a0 as o,Y as c,D as i}from"./framework-4b7e9ff4.js";const l={},u=c(`<h1 id="reentrantlock之条件锁condition源码分析" tabindex="-1"><a class="header-anchor" href="#reentrantlock之条件锁condition源码分析" aria-hidden="true">#</a> ReentrantLock之条件锁Condition源码分析</h1><h2 id="_1-简介" tabindex="-1"><a class="header-anchor" href="#_1-简介" aria-hidden="true">#</a> 1. 简介</h2><p>条件锁，指在获得锁之后，还需要达成某些条件后，才能继续执行的锁。且必须配合Lock一起使用，也就是说必须获得锁之后才可以调用condition.await()方法</p><h2 id="_2-源码分析" tabindex="-1"><a class="header-anchor" href="#_2-源码分析" aria-hidden="true">#</a> 2. 源码分析</h2><p>ReentrantLock 的条件锁使用的 <code>AbstractQueuedSynchronizer</code> 中的<code>ConditionObject</code> 来实现的，所以其实标题说的ReentrantLock 源码分析，其实应该是AQS源码分析之条件锁<code>Condition</code>，但是这里为什么还是要说成ReentrantLock 源码分析呢？主要是AQS是一个抽象类，用户并不能直接使用，而ReentrantLock 提供了使用条件锁的入口，源码如下：：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code> <span class="token comment">// java.util.concurrent.locks.ReentrantLock.Sync#newCondition</span>
 <span class="token comment">// 新生一个条件</span>
        <span class="token keyword">final</span> <span class="token class-name">ConditionObject</span> <span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ConditionObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-condition-接口" tabindex="-1"><a class="header-anchor" href="#_3-condition-接口" aria-hidden="true">#</a> 3. Condition 接口</h2><p>Condition 是一个接口，定义了7个方法，分别是：</p><ol><li>void await() throws InterruptedException; 使当前线程等待，直到发出信号或中断</li><li>boolean await(long time, TimeUnit unit) throws InterruptedException; 使当前线程等待，直到它被唤醒或中断，或指定的等待时间被终止。等价于：awaitNanos(unit.toNanos(time)) &gt; 0</li><li>long awaitNanos(long nanosTimeout) throws InterruptedException; 使当前线程等待，直到发出信号或中断，或过去指定的等待时间</li><li>void awaitUninterruptibly(); 使当前线程等待，直到发出信号为止</li><li>boolean awaitUntil(Date deadline) throws InterruptedException; 使当前线程等待，直到发出信号或中断，或过去指定的截止时间</li><li>void signal(); 唤醒一个等待的线程</li><li>void signalAll(); 唤醒所有等待的线程</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// java.util.concurrent.locks.Condition
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>总结下来，就是await、signal、signalAll，所以下面我们也主要分析这三个方法。</p><h2 id="_4-aqs-conditionobject类" tabindex="-1"><a class="header-anchor" href="#_4-aqs-conditionobject类" aria-hidden="true">#</a> 4. AQS.ConditionObject类</h2><p>ConditionObject 是AQS是的一个内部类，实现了Condition 接口，并且实现它的全部方法，ConditionObject 也维护了一个队列，为了和AbstractQueuedSynchronizer内部类Node组成的队列区分开，这里的队列我们下面称为等待队列，Node组成的队列称为同步队列，等待队列源码如下</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// java.util.concurrent.locks.AbstractQueuedSynchronizer.ConditionObject</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ConditionObject</span> <span class="token keyword">implements</span> <span class="token class-name">Condition</span><span class="token punctuation">,</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>Serializable</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** First node of condition queue. */</span>
    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token class-name">Node</span> firstWaiter<span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** Last node of condition queue. */</span>
    <span class="token keyword">private</span> <span class="token keyword">transient</span> <span class="token class-name">Node</span> lastWaiter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1-condition-await-方法" tabindex="-1"><a class="header-anchor" href="#_4-1-condition-await-方法" aria-hidden="true">#</a> 4.1 Condition.await()方法</h3><p>使当前线程等待，直到发出信号或中断，如果当前线程被中断，抛出InterruptedException</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">interrupted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment">// 如果当前线程被中断，抛出InterruptedException</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">InterruptedException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 以当前线程为节点添加到等待队列，并返回当前节点</span>
    <span class="token class-name">Node</span> node <span class="token operator">=</span> <span class="token function">addConditionWaiter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 完全释放当前线程获得锁，并返回释放前state的值</span>
    <span class="token keyword">int</span> savedState <span class="token operator">=</span> <span class="token function">fullyRelease</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 中断标识</span>
    <span class="token keyword">int</span> interruptMode <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 检查当前节点的是否在同步队列，注意前面的感叹号，是节点不在同步队列中，才将当前线程park</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isOnSyncQueue</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 调用Unsafa类底层阻塞线程，等待唤醒自己的条件信号</span>
        <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 当被唤醒以后，接着从下面开始执行</span>
        <span class="token comment">// checkInterruptWhileWaiting 检查线程是否被中断</span>
        <span class="token comment">// 发出信号之前被中断，返回-1，发出信号之后被中断，返回1，没有被中断，返回0</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>interruptMode <span class="token operator">=</span> <span class="token function">checkInterruptWhileWaiting</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 再次从同步队列获得锁，获取不到锁会再次阻塞线程</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">acquireQueued</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> savedState<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> interruptMode <span class="token operator">!=</span> <span class="token constant">THROW_IE</span><span class="token punctuation">)</span>
        interruptMode <span class="token operator">=</span> <span class="token constant">REINTERRUPT</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>nextWaiter <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token comment">// clean up if cancelled</span>
        <span class="token comment">// 判断条件等待队列中有没有线程被取消，如果有，则将它们清除</span>
        <span class="token function">unlinkCancelledWaiters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>interruptMode <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token comment">// 发生了中断，抛出异常或者重新中断当前线程</span>
        <span class="token function">reportInterruptAfterWait</span><span class="token punctuation">(</span>interruptMode<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>await()方法过程总结：</p><ol><li>检查线程中断情况，如果当前线程被中断，抛出InterruptedException</li><li>以当前线程为节点添加到等待队列，并返回当前节点</li><li>完全释放当前线程获得锁，并返回释放前 <code>state</code> 的值</li><li>检查当前节点的是否在同步队列 <ul><li>不在同步队列，调用Unsafa类底层 park 阻塞线程，等待唤醒信号</li></ul></li><li>当被唤醒以后，再次从同步队列获得锁，获取不到锁会再次阻塞线程</li><li>判断条件等待队列中有没有线程被取消，如果有，则将它们清除</li><li>如果发生了中断，抛出异常或者重新中断当前线程</li></ol><h3 id="_4-2-condition-signal-方法" tabindex="-1"><a class="header-anchor" href="#_4-2-condition-signal-方法" aria-hidden="true">#</a> 4.2 Condition.signal()方法</h3><p>“唤醒”一个等待时间最长的线程，也就是等待队列的第一个线程——firstWaiter；</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断是否是当前线程持有锁，不是则抛出异常</span>
    <span class="token comment">// 说明了调用这个方法之前也必须要持有锁</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isHeldExclusively</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalMonitorStateException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 等待队列队头，理论上就是第一次调用await()时加入的节点线程</span>
    <span class="token class-name">Node</span> first <span class="token operator">=</span> firstWaiter<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>first <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        <span class="token comment">// 发信号</span>
        <span class="token function">doSignal</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">doSignal</span><span class="token punctuation">(</span><span class="token class-name">Node</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token comment">// firstWaiter = first.nextWaiter   重新赋值等待队列头结点</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> <span class="token punctuation">(</span>firstWaiter <span class="token operator">=</span> first<span class="token punctuation">.</span>nextWaiter<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            <span class="token comment">// 等待队列 为空</span>
            lastWaiter <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 断掉节点关系</span>
        first<span class="token punctuation">.</span>nextWaiter <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
       <span class="token comment">// transferForSignal 将节点从等待队列转移到同步队列</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">transferForSignal</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>first <span class="token operator">=</span> firstWaiter<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//  node节点是等待队列上的节点</span>
<span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">transferForSignal</span><span class="token punctuation">(</span><span class="token class-name">Node</span> node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 改变节点的等待状态为0</span>
    <span class="token comment">// 0表示：当前节点在sync队列中，等待着获取锁。-2表示当前节点在等待condition，也就是在condition队列中</span>
    <span class="token comment">// 返回false,外层的循环继续执行</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">.</span><span class="token constant">CONDITION</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    <span class="token comment">// 将节点加入到同步队列中，返回node节点的前驱结点，也就是老的尾节点</span>
    <span class="token class-name">Node</span> p <span class="token operator">=</span> <span class="token function">enq</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> ws <span class="token operator">=</span> p<span class="token punctuation">.</span>waitStatus<span class="token punctuation">;</span>
    <span class="token comment">// 大于0的状态只有1，也就是取消</span>
    <span class="token comment">// 如果老的尾节点被取消 或者 更新老的尾节点为SIGNAL失败，可以直接轮到当前节点，直接唤醒当前节点的线程</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>ws <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token operator">!</span><span class="token function">compareAndSetWaitStatus</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> ws<span class="token punctuation">,</span> <span class="token class-name">Node</span><span class="token punctuation">.</span><span class="token constant">SIGNAL</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>thread<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 如果老的尾节点没有被取消 或者 更新老的尾节点为SIGNAL成功，则返回true</span>
    <span class="token comment">// 返回true的话，外层的do循环会直接退出</span>
    <span class="token comment">// 所以这个方法最核心的逻辑知识把等待队列的节点转移到同步队列中去</span>
    <span class="token comment">// 转移到同步队列后，signal()方法调用完成后紧接着应该是unlock()方法，移动同步队列的新节点等待被唤醒</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>signal()方法过程总结：</p><ol><li>判断是否是当前线程持有锁在调用signal方法，不是则抛出异常（调用signal()方法之前必须调用lock()方法）</li><li>拿到等待队列队头节点 firstWaiter，理论上就是第一次调用await()时加入的节点，节点存在则继续调用dosignal()。</li><li>先使用 CAS 方式修改节点的waitStatus的值为0，表示此节点在同步队列中</li><li>将节点加入到同步队列中（<code>enq(node)</code>），返回node节点的前驱结点，也就是老的尾节点</li><li>同步队列中，如果老的尾节点被取消 或者 更新老的尾节点为SIGNAL失败 说明可以直接轮到当前节点，直接唤醒等待队列第一个节点的线程</li><li>如果老的尾节点没有被取消 或者 更新老的尾节点为SIGNAL成功，则返回true，返回true的话，外层的do循环会直接退出，结束signal()方法。</li></ol><p>最后如果直接返回true，第5步没有执行，那signal()方法就没有地方调用了unpark方法了，那线程是在什么时候被唤醒的呢？ signal()方法核心任务只是把等待队列中的节点转移到同步队列中，signal()方法执行完成后，理论上会执行后面的unlock()方法，tryRelease()解锁成功会调用unparkSuccessor(node)方法，执行LockSupport.unpark(thread)，同步队列中的(等待)节点线程被唤醒，继续执行await()方法之后的代码。</p><h3 id="_4-3-condition-signalall-方法" tabindex="-1"><a class="header-anchor" href="#_4-3-condition-signalall-方法" aria-hidden="true">#</a> 4.3 Condition.signalAll()方法</h3><p>signalAll 和 signal 方法很相似，signal方法在doSignal的时候只是把等到队列的第一个节点转移到同步队列，而signalAll是遍历等待队列，把队列中所有节点都转移到同步队列中去</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">doSignalAll</span><span class="token punctuation">(</span><span class="token class-name">Node</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    lastWaiter <span class="token operator">=</span> firstWaiter <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token comment">// 遍历所有的等待队列</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token class-name">Node</span> next <span class="token operator">=</span> first<span class="token punctuation">.</span>nextWaiter<span class="token punctuation">;</span>
        first<span class="token punctuation">.</span>nextWaiter <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token comment">// 等待队列转移到同步队列，signal方法也是同样转移的</span>
        <span class="token function">transferForSignal</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span>
        first <span class="token operator">=</span> next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>first <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-经典用例-阻塞队列-arrayblockingqueue" tabindex="-1"><a class="header-anchor" href="#_5-经典用例-阻塞队列-arrayblockingqueue" aria-hidden="true">#</a> 5. <strong>经典用例 阻塞队列 ArrayBlockingQueue：</strong></h2><p>比如最典型的阻塞队列 ArrayBlockingQueue，当队列中没有元素的时候，他无法take出一个元素，需要等待其他线程入队一个元素后唤醒它，才能继续弹出元素。</p><p>它有三个重要的属性，一个锁和两个条件，源码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Condition</span> notEmpty<span class="token punctuation">;</span>
<span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">Condition</span> notFull<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在构造方法中初始化：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">ArrayBlockingQueue</span><span class="token punctuation">(</span><span class="token keyword">int</span> capacity<span class="token punctuation">,</span> <span class="token keyword">boolean</span> fair<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>capacity <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">[</span>capacity<span class="token punctuation">]</span><span class="token punctuation">;</span>
    lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span>fair<span class="token punctuation">)</span><span class="token punctuation">;</span>
    notEmpty <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    notFull <span class="token operator">=</span>  lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>take() 方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">E</span> <span class="token function">take</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
    lock<span class="token punctuation">.</span><span class="token function">lockInterruptibly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
            notEmpty<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>enqueue(E)方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token class-name">E</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// assert lock.getHoldCount() == 1;</span>
    <span class="token comment">// assert items[putIndex] == null;</span>
    <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">;</span>
    items<span class="token punctuation">[</span>putIndex<span class="token punctuation">]</span> <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>putIndex <span class="token operator">==</span> items<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        putIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    count<span class="token operator">++</span><span class="token punctuation">;</span>
    notEmpty<span class="token punctuation">.</span><span class="token function">signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面take方法可以看出，当队列为空时，线程要等待入队发生，而不是直接出队返回；</p><p>当入队方法enqueue调用时，队列不为空，notEmpty.signal() 唤醒等待的线程。</p><p>put(E)方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">E</span> e<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
    <span class="token function">checkNotNull</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">ReentrantLock</span> lock <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>lock<span class="token punctuation">;</span>
    lock<span class="token punctuation">.</span><span class="token function">lockInterruptibly</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> items<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
            notFull<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">enqueue</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入元素的时候，如果队列已经满了，线程要等待，等待队列不是满的状态时才可以执行后面的入队操作；</p><p>出队或remove等操作之后，会触发唤醒等待的线程：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">E</span> <span class="token function">dequeue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// assert lock.getHoldCount() == 1;</span>
    <span class="token comment">// assert items[takeIndex] != null;</span>
    <span class="token keyword">final</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> items <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@SuppressWarnings</span><span class="token punctuation">(</span><span class="token string">&quot;unchecked&quot;</span><span class="token punctuation">)</span>
    <span class="token class-name">E</span> x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">E</span><span class="token punctuation">)</span> items<span class="token punctuation">[</span>takeIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>
    items<span class="token punctuation">[</span>takeIndex<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>takeIndex <span class="token operator">==</span> items<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
        takeIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    count<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>itrs <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        itrs<span class="token punctuation">.</span><span class="token function">elementDequeued</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    	notFull<span class="token punctuation">.</span><span class="token function">signal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，signal 和 await 要成对调用，不然只调用 await 动作，线程则会一直等待，除非线程被中断。</p><h2 id="_6-condition-总结" tabindex="-1"><a class="header-anchor" href="#_6-condition-总结" aria-hidden="true">#</a> 6. Condition 总结</h2><ol><li>Reentranlock 的条件锁是基于AQS框架中的ConditionObject来实现的，自己一句代码都没有写，都是用的它爸爸的代码。</li><li>从源码也可以看出，使用条件锁的当前线程必须持有锁，代码上表示也就是使用Condition.await()时必须要lock.lock()</li><li>await() 方法首先会完全释放当前线程获得的锁，然后再把当前线程的节点加入到等待队列中，然后调用Unsafa类底层 park 阻塞线程，等待被唤醒</li><li>signal() 方法核心是就是把等待队列中的一个节点转移到同步队列中，不一定会马上唤醒线程</li><li>signalAll() 方法核心是就是把等待队列中的所有节点转移到同步队列中，不一定会马上唤醒线程</li></ol><h2 id="_7-条件锁使用的简单流程总结" tabindex="-1"><a class="header-anchor" href="#_7-条件锁使用的简单流程总结" aria-hidden="true">#</a> 7. 条件锁使用的简单流程总结</h2><ol><li>A线程 获得锁 lock</li><li>A线程 await <ol><li>A线程释放锁</li><li>A线程加入到等待队列</li><li>A线程阻塞 park</li></ol></li><li>B线程 获得锁 lock</li><li>B线程 signal <ol><li>B线程 把等待队列中的A线程转移到同步队列</li></ol></li><li>B线程 释放锁 unlock</li><li>A线程被唤醒 unpark</li><li>A线程 继续执行await方法后面的代码</li><li>A线程释放锁 unlock</li></ol><h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>`,51),k={href:"https://jinglingwang.cn/archives/reentrantlock-condition",target:"_blank",rel:"noopener noreferrer"};function r(d,v){const s=i("ExternalLinkIcon");return t(),e("div",null,[u,n("p",null,[n("a",k,[p("源码分析：②ReentrantLock之条件锁Condition"),o(s)])])])}const b=a(l,[["render",r],["__file","java-thread-x-lock-reentrantlock-condition-source.html.vue"]]);export{b as default};
