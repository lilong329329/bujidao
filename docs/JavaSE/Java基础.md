---
    title: Java基础语法
    author: 李龙
    date: '2021-12-12'
---
# day01 -Java基础语法

## 1、Java概述

### 	1.1 Java的起源 

​			语言：计算机有自己独特的语言：比如，java、C（面向过程）C++ （C plus plus   cpp）Python、go语言、ruby、erlang、scla

​	java语言：java语言的由来   詹姆斯·高斯林（James Gosling）

​	图灵奖：姚期智 获取图灵奖 （计算机方面的最高奖项，图灵 是一个人，发明计算机）

跨平台：  java   实际上是 jdk这个工具具有跨平台性，jdk可以安装在不同的系统上面

​		平台：Windows系统

​					mac系统

​					linux系系统

### 	1.2 JDK是什么？JRE又是什么？java为什么具有跨平台性？Java如何配置环境变量

​		JRE：JRE就是JDK里面的编译工具，把java语言，编译成了.class文件

​		JDK：JDK相当于一些列的工具集，里面包含有JRE、javac   javap

​		JVM: java虚拟机,具有跨平台性,把.class 文件 进行加载、翻译、执行  变成====》计算机可以识别的  二进制  0101010 （字节码）

### 	1.3 Java通过什么进行编译（NotePad++ 、idea）

​	1.4 动手操作部分

- 安装绿色版的JDK1.8 （环境变量的配置）
- 安装NotePad++    (记事本Puls)
- idea（强大的Java编译工具,对idea的破解）

## 2、Java的第一个程序

​	2.1 Dos命令(和linux系统是有一定区别)

在Windows系统下

| 操作           | 说明                            |
| -------------- | ------------------------------- |
| 切换盘符       | 盘符切换。d:回车，表示切换到d盘 |
| 查看所有的文件 | dir                             |
| 进入某一个文件 | cd  文件名称                    |
| 退出某一个文件 | cd ..                           |
| 进入多级目录   | cd \aa\bb                       |
| 清屏           | cls                             |
| 进入根目录     | cd \                            |
| 退出           | exit                            |

在Idea中新建文件步骤：
	1、先创建一个项目，找到Create new Project

![image-20210706152901985](day01%20Java%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.assets/image-20210706152901985.png)

2、新建一个空工程  empty Project 

![image-20210706153116028](day01%20Java%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.assets/image-20210706153116028.png)

![image-20210706153147540](day01%20Java%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.assets/image-20210706153147540.png)

![image-20210706153305296](day01%20Java%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.assets/image-20210706153305296.png)

新建一个实际的项目

​	在空文件夹下面 

​				project(项目 ，空文件夹)

​						module1（项目一）

​						module2（项目二）

### 2.1  第一个HelloWorld程序

​		规则：(阿里巴巴规范)

​	包名：其实也是一个文件夹，命名规则：都是小写字母，一般使用所在公司的网址 倒写

​	类名： 也是需要自己定义，首字母需要大写

​	方法名：

### 2.2 注释

```
//什么是注释？   对一段代码进行解释说明  
```

注释的分类：  

- ==单行注释   //          ctrl+/     定位到需要注释代码的当前行==
- ==多行注释   /*   dshifaof*/    Ctrl+shift+/   此时需要选中 被注释的代码==
- 文档注释  /** fsdahifds */

注意：单行注释 可以进行嵌套

​			多行注释  是否可以嵌套多行注释呢？

​					多行注释，不能嵌套多行注释 可以嵌套单行注释

注释：被注释的代码或者文字，不会被编译器编译、解释

### 2.3 关键字

什么是关键字， 关键字其实就是jdk里面自带的，不需要认为的自己定义，jdk1.8 里面  有很多的jar包 这些都是java官方自己提供的，不需要使用者自己定义。

特点：

- 所有的关键字都是小写
- 关键字在idea编译器中，都会高亮显示，例如第一个Helloworld程序中的public class  static 等

```java
package cn.ygtong;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/06/16:10
 * @Description: 此编辑页面是做社么得
 */
public class Test1 {
    public static void main(String[] args) {

        System.out.println("HelloWorld");

        //什么是注释？   //对一段代码进行解释说明

        /*fdsajff dsf as fds
                //fdsaiofnas

         */

        //System.out.println("fdsaafasf ");
      /*  System.out.println("fadskfa fadsf dsah f");
        fdashifasd fdsafjo
                jfadsfdsa
                        jsdakgsad */
    }
}

```

### 2.4  常量

​	概念：在程序运行过程中，值不会发生改变

常量的分类：

​	字符串常量    例   “发大水发你双方都”   “ab”

​	字符常量：‘a’ ‘b’

​	整型常量   23  -12 55

​	小数常量：0.1   2.3 

​	布尔常量：  true   false   对 错

### 2.5   Java的基本数据类型

​	计算机最小的信息单元  bit

​	计算机最小的存储单元 ：byte

换算关系：

​	1byte = 8bit位

byte  kb   mb gb  Tb  pb  。。。。换算关系

1kb = 1024byte

mb = 1024kb

gb = 1024mb

tb = 1024gb

pb = 1024tb

计算机组成原理里面：

​	01010110      换算成10进制   0*20    +1*

​	







==java的基本数据类型==

| 类型                                    | （内存占用） | 取值范围        |
| --------------------------------------- | ------------ | --------------- |
| byte  字节                              | 1            | （-128）  - 127 |
| short  （短整型）                       | 2            |                 |
| int （整型）                            | 4            |                 |
| long（长整形）                          | 8            |                 |
| float  （1.3L   此时表示是float类型的） | 4            |                 |
| double  （1.3  默认是double类型的）     | 8            |                 |
| char  （‘ ’）                           | 2            |                 |
| boolean （true   false）                | 1            |                 |
|                                         |              |                 |

### 2.6 变量

-  变量的定义格式：   基本数据类型   变量名 = 初始值；  （变量名，其中变量名可以自己定义）

需要会的：变量的定义  然后使用，并在控制台上进行打印输出















回顾：

1. java发展历史        java之父  高斯林       常见的编程语言 ：C   C++、Python、java、erlang
2. ==jdk1.8的安装 和环境变量的配置== （实在实在不会了，利用百度，自己手动操作一下如何配置jdk的环境变量）
3. ==idea2020.1 版本的安装和激活破解== 
4. 利用idea第一个Helloworld代码的编写     1.如何创建项目   创建empty  Project       Module(项目) 2 .包名的创建规则 3.类名的创建规则，首字母大写
5. 注释     （单行注释、多行注释、文档注释）
6. 关键字   关键字是java公司自己提供的，不需要人为的定义、都是小写，而且在编译器中高亮显示  public   static void  等都是关键字。
7. 常量   (字符串常量、字符常量、小数常量、整数常量、布尔常量等)   值不会发生改变的量，就叫做常量
8. ==java中的数据类型：分为两种，基本数据类型，引用数据类型（String、集合等等）==
9. java中的基本数据类型（四类八种）
   1. 整型：byte（1）  short（2） int （4） long （8）  整型：默认是int类型
   2. 小数： float（4）  double(8)     默认：double类型
   3. 字符类型：char（2）   
   4. 布尔类型：boolean   (1)  默认值：false
10. 变量：
    1. 变量的定义格式：

```java
基本数据类型 变量的名字(可以自己随意定义，但是尽量做到见名知意) = 初始值;   //分号表示 语句结束
举例：
    int num  = 10;   //实际读法：把10 赋值给整型变量 num
```

今日：

### 	2.7 标识符

​	概念：用户自己给 类、方法、变量、常量等自己定义的名字

标识符命名规则：

​	1、标识符命名是由大小写字母、数字、下划线、$（英文状态下的美元符号）组成。

​			==其中==   标识符的首字母不能是 数字

​						标识符不能使用关键字、保留字（现在java中暂时没有使用，未来可能会使用的 goto 、const）

​						====第一个字符可以是下划线或者$美元符号（确定）==

​						标识符 不能使用两个单词 中间 有空格   a b

例子：

```java
package cn.jiupai.day01;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/07/16:05
 * @Description:
 */
public class Test1 {
    public static void main(String[] args) {


       //大小写字母、数字  下划线   $
        int NUM  = 10;
        int num = 10;
        //在同一个作用域中 {}   不能够出现两个相同的变量名
//        int num = 20;
        int $num = 20;

//        int 2num =20;     标识符的第一个字符不能是数字
//        int a a =20;   //标识符如果有多个单词，中间不能使用空格

//        long static = 10;  //关键字不能够做标识符(变量名)
//        long goto =10;    //保留字不能够做标识符
//        long  const =10;
    }
}

```

### 2.8 java基本数据类型转换

1. #### 自动类型转换

   1. 表示从内存范围小的转换成大的

```java
把一个表示数据范围小的数值或者变量赋值给另一个表示数据范围大的变量。这种转换方式是自动的，直接书写即
可
例如：
    
        int  a =10;  //内存4
        double b = a;

        System.out.println(b);
```

1. #### 强制类型转换

   1、把一个表示数据范围大的数值或者变量赋值给另一个表示数据范围小的变量。
       强制类型转换格式：==目标数据类型 变量名 = (目标数据类型)值或者变量;==

```java

        double c =10;
        System.out.println("c:"+c);

        int d =(int)c;  //强制类型转换 会丢失精度
```

```
特殊情况  long(大)====>float
//long ==》folat类型的

long f = 10;

float g = f;
double h = f;
double ff =g;
```

![image-20210707164856603](day01%20Java%E5%9F%BA%E7%A1%80%E8%AF%AD%E6%B3%95.assets/image-20210707164856603.png)

# day02 Java基础语法

# 1、运算符

### 1.1 算数运算符

算数运算符：数学上 + - * / 取余（取模）

```java 
int  a  =10;
int b =20;
int c  = a+b;

public class Test2 {
    //main方法是程序的入口,程序启动，先找的 main
    public static void main(String[] args) {
        //1、算数表达式
        int a = 11;
        int b = 20;

        //+
        int c = a+b;
        System.out.println(c);

        //-
        int d = a-b;
        System.out.println(d);

        //*
        int e = a*b;
        System.out.println(e);

        //*
        int f = b/a;

        float ff = b/a; //保留几位小数  1.81 （）学完APi之后
        System.out.println(ff);

        //% 取余（取模）  a =1  b =2

        int fff = b%a;
        System.out.println(fff);

    }
}

注意：/   和 % 
    1 /  表示除法 ，在java中 结果取整数取商
    2 %  表示取余 ，在java中 结果取余数
    
//  字符串的拼接：
    

        //不同的数据类型操作呢?
        char aaa ='a';
        int bbb =10;
// 不同数据类型操作，先把小的自动转换成大的 ，然后再进行操作
        System.out.println(aaa+bbb);

        //字符串的操作

        int aaaa =10;
        int aaaaa =107;
        System.out.println(10+'a'+"");   //表示字符串的拼接  "107"

```

==回顾：==

- 标识符（命名规则,由大小写英文字母、数字、__、$可以做标识符，标识符中的大小写是区分的）
- 开头不能使用数字    不能使用关键字、保留字（goto、const 现在暂时不使用，未来可能会使用）
- 如果标识符用2个单词命名，中间不能有空格
- 其他命名规则基本都符合

java中数据类型：基本数据类型和引用数据类型。

基本数据类型：

​	整型：byte  short  int  long   默认是 ：int类型

​	浮点型：float   double      默认是  double类型

​	字符型： char（2）

​	布尔：boolean  （1）

基本数据类型的转换规则：

​	自动转换 （小-》大） byte  short    ==>int ==>long======>>float======》double类型的

​	特殊的：char ==》int       long===》float

​	‘a’   97       A  65      0   48

​	强制类型转换：

​		强制类型转换：从大的变成小的     规则：int  a  = （int）8L

1、把一个表示数据范围大的数值或者变量赋值给另一个表示数据范围小的变量。
    强制类型转换格式：==目标数据类型 变量名 = (目标数据类型)值或者变量;==

运算符：算数运算符：

​	除法：取得结果是 商

​	取余：取得结果是余数

### 1.2 赋值运算符

| 符号 | 作用                   | 说明                               |
| ---- | ---------------------- | ---------------------------------- |
| =    | 赋值（右边赋值给左边） | int a =10;把10赋值给变量 a         |
| -=   | 减后赋值               | int  a -=10  把a-10的值重新赋值给a |
| +=   | 加后赋值               | int  a +=10  把a+10的值重新赋值给a |
| *=   | 乘后赋值               | int  a *=10  把a*10的值重新赋值给a |
| /=   | 除后赋值               | int  a /=10  把a/10的值重新赋值给a |
| %=   | 取余后赋值             | int  a %=10  把a%10的值重新赋值给a |

单个值的话：

int  a =10；

++a    a 的值是11

a++    a的结果也是  11

==注意：==

1. 扩展运算符，隐含了强制类型转换

```
short s =10;
s =(short) (s+10);  //不能够自己主动进行强制转换

//扩展运算符：+=   -=   *= 等等,隐含了强制转换

s+=10;    //s=s+10;
```

多个值计算：

int x  =10；

int y =x++;   //求  x =  11            y=10

int y2 =++x       x=11            y2 = 12

```
int x  =10;

int y =x++;   //求  x =  11            y=10

System.out.println(x);
System.out.println(y);


System.out.println("======================");


int y2 =++x;  //       x=11            y2 = 11

System.out.println(x);

System.out.println(y2);

//   练习题

=======================================================================================================

public class Test3 {
    public static void main(String[] args) {


        int x = 10;
        int a =x++;   //a  10  x  11
        int b =x++;   //b   11  x 12 
        int c =x++;   //c 12   x 13
        

        int y = x++ + x++ + x++;    //30   33     33
        
        
        int y1 =a+b+c;

        System.out.println(y);

        System.out.println(x);
    }
}
```

### 1.3 关系运算符

-  ==   !=   >   >=   <   <=   比较的结果 是boolean类型，结果要么true  要么false

注意：=    和   == 

​	=   表示的是赋值 运算

==  表示  等于 就是关系表达式

### 1.4  逻辑运算符

逻辑运算符： 与 或 非          &   |  !           举例 ：true & true     true      true | false    有一个为true即为true  

int i = 10;
int j = 20;
int k = 30;



&&  和 &有什么区别？ a&&b

​	&& 具有短路效果，a为false  b不用再判断，直接输出false      当a为true的时候，需要判断第二个。

​	&  a&b    不管a的结果是啥，b都需要进行判断

|| 和| 有什么区别？

a||b    当a为true的时候，b不需要判断，直接可以输出结果，当a为false的时候，b需要判断

a|b   不管a为何值，b都需要判断。



符号 作用 说明
&& 短路与 作用和&相同，但是有短路效果
|| 短路或 作用和|相同，但是有短路效果
短路逻辑运算符
在逻辑与运算中，只要有一个表达式的值为false，那么结果就可以判定为false了，没有必要将所有表达式的值都
计算出来，短路与操作就有这样的效果，可以提高效率。同理在逻辑或运算中，一旦发现值为true，右边的表达式
将不再参与运算。
逻辑与&，无论左边真假，右边都要执行。
短路与&&，如果左边为真，右边执行；如果左边为假，右边不执行。
逻辑或|，无论左边真假，右边都要执行。
短路或||，如果左边为假，右边执行；如果左边为真，右边不执行。



优点：节省计算机资源(&&  ||)

### 1.5   三元运算符

​	格式：

​	关系表达式 ? 表达式1：表达式2

int a =10；  int  b =11；

​	// 语言解释：a>b？ true ：false 

```
public class Test5 {
    public static void main(String[] args) {

        int i = 10;
        int j = 20;

        String s = i > j ? "111" : "222";

        System.out.println(s);


    }
}
```

​	案例：

```
package cn.jiupai.day01;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/08/15:55
 * @Description:
 * 、需求：一座寺庙里住着三个和尚，已知他们的身高分别为150cm、210cm、165cm，
 * 请用程序实现获取这三个和尚的最高身高，求三个和尚身高最高的
 */
public class Test7 {
    public static void main(String[] args) {




        int a =150;
        int b =210;
        int c =165;





      int heshagn1 =a;
      int heshagn2 =b;
      int heshagn3 =c;


      //求的是和尚1 和和尚2之间的最大值
         int tempWeight = heshagn1 > heshagn2 ? heshagn1 : heshagn2;


         int  max = tempWeight>heshagn3?tempWeight:heshagn3;

        System.out.println(max);

//        int tempWeight = heshagn1 > heshagn2 ? heshagn1 : heshagn2;
//
//        int maxWeight = tempWeight > heshagn3 ? tempWeight : heshagn3;
//
//        System.out.println("三个和尚中身高最高的是"+maxWeight);


//        int s1 = heshagn1 > heshagn2 ? heshagn1 : heshagn2;


    }
}
```

# 2、键盘录入

​		键盘录入的三步：

​	1、创建Scanner对象

​			Scanner  scanner   =   new  Scanner(System.in)            //Scanner对象是java本身就有的

​	2、System.out.println("请输入XXXX")

​	3、通过变量名 接收键盘录入的值

​		int   a  =  scanner.nextInt（）

题目：请键盘录入三个数，并比较三个数中的最大值？

 回顾：

​	运算符：

​	算数运算符    

​	关系运算符

​	逻辑运算符  (& |  !  ^     &&     ||)  其中 双与和双或在一定条件下，是有短路效果的

​	赋值运算符（i++    ++i）   i++先赋值 再自增1      ++i  先自增1  在 赋值

​	三运运算符(格式a>b?a:b)

# 3、流程控制语句

### if语句

- 顺序结构   (代码从上到下执行)
  - 分支结构（if   switch） 可以控制语句执行的步骤
  - 格式：if(关系表达式){ 语句体;}

```java
if（关系表达式）{

​		sout。。。

}	else{

fjkasjfl

}

//第三种格式

if(关系表达式){
	语句体;
}else if（关系表达式）{
    语句体；
}
.
.
else{
    语句体
}
```

### switch语句

```java
格式：

   switch(关系表达式){

		case1: 
           语句体;
           break;//表示结束当前的switch语句
           
         case2：
             语句体；
             break
             
          default：
             	语句体；
             	break;

}


```

### for循环结构

for循环     while循环    do  while循环  都是循环语句

格式：

```java
	for（初始条件；判断条件；结束条件）{
        循环体;
    }
```

回顾：

1. 水仙花数：

789  （分别求个位、十位、百位）

个位：789 %10

十位：789/10%10

百位：789/100

1. for循环的格式

for(初始化语句；结束条件；控制语句){

​		方法体

}

求1-10之间的偶数和

```java
int sum =0;
for(int i=1;i<=10;i++){
    if(i%2 ==0){
        sum =sum+i;
    }
}

System.out.println(sum)
```

### while循环

格式：

```java
初始化语句;
while (条件判断语句) {
循环体语句;
条件控制语句;
}


int i=0;                            
while(i<=10){                      
    sum = sum+i；  循环体语句
        i++；
}


do{

​	sum =sum+i;

​	i++;

}while(i<=10)




while(true){
    sum=sum+i；
        
        break;  表示结束当前的循环
}

```

### do  While循环

初始化语句

do{

​	sum =sum+i;

​	i++;

}while(i<=10)

回忆：

```java
1、for循环
2、while循环
3、do  while循环
 
    对比三种循环方式：

for循环和while循环先判断条件是否成立，然后决定是否执行循环体（先判断后执行）
do...while循环先执行一次循环体，然后判断条件是否成立，是否继续执行循环体（先执行后判断）
for循环和while的区别
条件控制语句所控制的自增变量，因为归属for循环的语法结构中，在for循环结束后，就不能再次被访
问到了
条件控制语句所控制的自增变量，对于while循环来说不归属其语法结构中，在while循环结束后，该变
量还可以继续使用
死循环（无限循环）的三种格式
1. for(;;){}
2. while(true){}
3. do {} while(true);
```

如何跳出循环以及结束循环

​	结束本次循环，继续下次循环     continue；  

​	直接结束循环;    break;

```java
package cn.jiupai.day01;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/12/15:41
 * @Description:
 */
public class Test18 {
    public static void main(String[] args) {



    //continue  只能用在循环里面,结束本次循环，继续下一次循环

        for (int i =0;i<10;i++){

            if (i==5){
//                continue;  结束当前本次循环，继续下一次循环

                break;  直接跳出循环语句
            }


            System.out.println(i);
        }

    }
}

```



### 循环嵌套概述：

在for循环里面，还有一个for循环;

```java
package cn.jiupai.day01;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/12/15:41
 * @Description:
 */
public class Test18 {
    public static void main(String[] args) {



    //continue  只能用在循环里面,结束本次循环，继续下一次循环

        for (int i =0;i<10;i++){

            if (i==5){
//                continue;

                break;
            }


            System.out.println(i);
        }

    }
}

```

## 4、生成随机数

1、创建生成随机数的对象

Random  rd  = new  Random()；



# day04  数组

## 	1 数组

1.1 什么是数组？

数组就是存储同一种数据类型的容器、长度是固定的，不可变。例如：

数组的定义格式：

​	动态数组的初始化方式定义：  数据类型[]  数组的变量名 = new  数据类型[长度]

​	int[]  arr = new int[10];   默认存储的值为：都是0

静态的数组定义方式： 基本数据类型 []  数组的变量名字 ={2,1,3,4,5,7};

​	int[] arr = {1,2,3,4,5,6,7}；

## 	1.2 数组的索引

动态数组：

​	int[]  arr = new int[10]

​	位置、索引的概念：在数组里面存的每一个数据，都有一个编号.

数组中的两个经典错误：

```java

//        System.out.println(arr[3]);   //ArrayIndexOutOfBoundsException: 3  索引越界异常

        //报错

        arr = null;

        System.out.println(arr[0]);   //空指针异常   NullPointerException
```

1、数组的定义方式（会）

2、数组的值和索引（位置）

3、会求数组的长度

5、会利用for循环，遍历出数组中的每一个值。

## 1.3 for循环遍历数组

```java
package cn.jiupai.day04.test01;

/**
 * Created with IntelliJ IDEA.
 *
 * @Author: lilong329329@163.com
 * @Date: 2021/07/14/14:31
 * @Description:
 */
public class Test2 {
    public static void main(String[] args) {

        int[] arr = {1,3,4,1,33,55,33,22,11};


        int[] arr2 = {1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,22,2,22,2,2,22,2,2,2,2,2,2};


        for (int i = 0; i < arr.length; i++) {

            System.out.println(arr[i]);
        }


       /*
       这样从数组中取值，不可取
       System.out.println(arr[0]);
        System.out.println(arr[1]);
        System.out.println(arr[2]);
        System.out.println(arr[3]);
        System.out.println(arr[4]);
        System.out.println(arr[5]);
        System.out.println(arr[6]);
        System.out.println(arr[7]);
        System.out.println(arr[8]);*/


       /* //利用for循环的方式 循环遍历

        //如何获取数组的长度呢
        System.out.println(arr.length);
        //length表示数组的一个属性,求出的是数组的长度

        System.out.println("===============================");

        for (int i=0;i<arr.length;i++){

            System.out.println(arr[i]);
        }*/



    }
}

```

1.4 案例

```
 int[] arr = {2,22,4,8,99,34};
 最大值获取：从数组的所有元素中找出最大值。
* 实现思路：
* 定义变量，保存数组0索引上的元素
* 遍历数组，获取出数组中的每个元素
* 将遍历到的元素和保存数组0索引上值的变量进行比较
* 如果数组元素的值大于了变量的值，变量记录住新的值
* 数组循环遍历结束，变量保存的就是数组中的最大值
public class Test3 {
    public static void main(String[] args) {

        //静态初始化定义数组
        int[] arr = {2,22,4,8,99,34};
        //求出数组中的最大值，利用数组的思想求最大值
        int max = arr[4];
        for (int i = 0; i < arr.length; i++) {
            //取出来每一个值，相互进行比较
            //利用if语句比较大小
            if (arr[i]>max) {
                max = arr[i];
            }
        }
        System.out.println("最大值为："+max);

    }
}
```

