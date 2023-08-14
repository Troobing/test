// //First
// (() => {
//     function sayHi(str: String) {
//         return '你好' + str
//     }
//     sayHi('123')
//     let a: Number = 30
//     console.log(a)
// })()
1





/*lskdjfadsklfj        
sdfadsfasf
adsfsadfsdf*/
//多行注释  /*   */
1





// 常量 const
// 变量 var(全局) let（局部）
// console.log(...) 打印
1





/* 
 算数运算符  +  -  *  /  %（取余） ++(自增)  --(自减) 
    关系运算符  ==  !=  >  <  >=  <=
    逻辑运算符  &&（and）  ||(or)  !(not)
        &&和||属于短路运算符 
            1.&& 运算符只有在左右两个表达式都为 true 时才返回 true
            2.|| 运算符只要其中一个表达式为 true ，则该组合表达式就会返回 true
    位运算符（二进制） 
        &  两个相应的二进位都为 1，该位的结果值才为 1，否则为 0。
        |  两个相应的二进位中只要有一个为 1，该位的结果值为 1。
        ~  取反，使数字 1 成为 0，0 成为 1。
        ^  异或，异或，
        <<  左移，由 << 右边的数指定移动的位数，高位丢弃，低位补 0。（右移>>同）
        >>> 无符号右移，与有符号右移位类似，除了左边一律使用0 补位。
    赋值运算符
        =（赋值）  +=（先加再赋值，x=10，y=5，x+=y则x=5）
        -=（先减后赋值）  *=（先乘再赋值）  /=（先除再赋值）
    三元运算符
        Test ？exper1 ：exper2 （如果判断true则返回exper1，如果false则exper2）    
        eg：var num：number=-2
            var result=num>0 ? '大于0'：'小于零'
            console.log(result)  //返回：小于零
    typeof 运算符：返回操作数的数据类型。
        eg：var=12
            console.log(typeof num)   //返回number
    instanceof
    负号运算符（-）：更改操作数的符号（正的变成负的）
    字符串运算符：连接运算符（+），+ 运算符可以拼接两个字符串
    eg： var a:string='a1'+'.a2'
         console.log(a)   //结果：a1.a2  
*/
1




// //“值”（value）和“类型”（type）
// //基础数据类型
// //布尔类型  boolean   true 1 ， false 0
// let flag: boolean = true
// flag = true

// //数字类型 number
// let a: number = 10 //十进制
// let a1: number = 0b1010//二进制
// let a2: number = 0o12//八进制
// let a3: number = 0xa//十六进制
// a = 11

// //字符串类型 string
// let str: string = '123'

// //undefined和null , 用的不多
// let u: undefined = undefined
// let n: null = null
// //u=123

// //undefined和null 还可以作为其他类型的子类型
// //可以把undefined和null赋值给其它类型的变量
// let b: number = undefined
// let str1: string = null

// //symbol  用于创建一个不重复的标识符
// //Symbol可以避免属性名冲突。

// //bigint类型   
// //用于表示大于 Number 类型支持范围的大整数,可以安全地存储和操作大整数,不会出错
1


/*
//implicit(隐式类型)，explicit（显示类型）
//在ts中,隐式类型(Implicit)和显式类型(Explicit)指的是变量的类型注解方式。
let age = 18; // 隐式类型推断为number
let age: number = 18; // 显式声明number类型
*/
1



// const gh1 = new String('hello');
// //gh1的类型为String对象类型
// //可以访问String对象的方法,如s.charAt()
// const gh2:string='hello'
1



//引用数据类型 数组 和 对象
// //定义数组一
// let arr2: number[] = [1, 2, 3]   //数字类型数组  []表数组
// let arr4: (number|string)[]=[1,'2']
// //arr2=['']  //只能数字

// //只读数组
// //1
// const arr5: number[]=[1,2,3]
// arr5[0]=11
// const arr6:readonly number[]=[1,2,3]
// //arr6[0]=11   报错
// //2
// const arr7=[0,1] as const;
// //arr[0]=4     报错

// //let arr3:Array=[]
// //定义数组二:泛型
// let arr1: Array<number> = [10, 20, 30]
// //let arr4:number<number>=

// //eg
// var aa: number[] = Array(4)  //(4)表示数组aa中有4个元素
// var bb = aa.length
// for (var i = 0; i <= bb; i++) {
//     aa[i] = i * 2
//     console.log(aa[i]);
// }   //结果:0  2  4  6  8   

// //数组迭代（可用for语句来循环输出数组中的各个元素）
// var kk: any
// var ll: number[] = [10, 11, 12, 13]
// for (kk in ll) {
//     console.log(ll[kk]);
// }

// //数组解构
// //eg1：
// var xx: number[] = [10, 20]
// let xx1 = xx[0], xx2 = xx[1]
// //let xx2=xx[1]
// console.log(xx1);
// console.log(xx2);      //结果：10  20
// //eg2：
// let cc: number[] = [10, 20]
// let [x0, y0] = cc
// console.log(x0);
// console.log(y0);       //结果：10  20

// //多维数组
// var zz = [[[1, 2, 3], [7, 8, 9]], [[10, 11, 12], [13, 14]], [[17, 18]]];
// console.log(zz[1][1][0]);    //结果13

// //eg  作为参数传递给函数
// var sites: string[] = new Array("Google", "Runoob", "Taobao", "Facebook")
// function disp(sites: string[]) {
//     for (var i = 0; i < sites.length; i++) {
//         console.log(sites[i])
//     }
// }
// disp(sites);     //结果：Google Runoob Taobao Facebook

// //eg  作为函数的返回值
// function disp1(): string[] {
//     return new Array("Google", "Runoob", "Taobao", "Facebook");
// }
// var sites: string[] = disp1()
// for (var ii in sites) {
//     console.log(sites[i])
// }

//对象
// //object 表示非原始类型, 除了number string boolean（字面量方式定义）
// let obj: object = {}   //{}表对象
// //obj=123 报错
// //obj=''  报错
// obj = null
// obj = undefined
// obj = []
// obj = new String()    //实例对象
// obj = String
// //eg:
// var obj0 = {
//     site1: 'troobing',
//     site2: 'binging'
// }
// console.log(obj0.site1);
// console.log(obj0.site2);
// //eg：
// var oob = {
//     site1: 'roob',
//     site2: 'yumi',
//     site3: function () { }
// }
// oob.site3 = function () {
//     console.log('hello' + oob.site1);
// }
// oob.site3()
// //对象可以作为一个参数传给函数
// var site = {
//     site1: '111',
//     site2: '222'
// }
// var inin = function (obj: { site1: string, site2: string }) {
//     console.log(obj.site1);
//     console.log(obj.site2);
// }
// inin(site)
1





// //ts Map对象
// //创建Map
// let myMap = new Map();
// //或
// let mymap = new Map([
//     ["key1", "value1"],
//     ["key2", "value2"]
// ]);

// /*Map 相关的函数与属性：
// map.clear() – 移除 Map 对象的所有键/值对 。
// map.set() – 设置键值对，返回该 Map 对象。
// map.get() – 返回键对应的值，如果不存在，则返回 undefined。
// map.has() – 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
// map.delete() – 删除 Map 中的元素，删除成功返回 true，失败返回 false。
// map.size – 返回 Map 对象键/值对的数量。
// map.keys() - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
// map.values() – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。*/

// let mmap = new Map();
// mmap.set('11', 1);
// mmap.set('22', 2);
// mmap.set('33', 3);
// console.log(mmap.get('22'));
// console.log(mmap.get('44'));
// console.log(mmap.has('11'));
// console.log(mmap.size);
// console.log(mmap.delete('11'));
// mmap.clear();
// console.log(mmap);  //结果： 2，undefined，true，3，trueMap(0) {}

// //迭代map
// let mmmap = new Map
// mmmap.set('11', 1)
// mmmap.set('22', 2)
// mmmap.set('33', 3)
// for (let key of mmmap.keys()) {
//     console.log(key);
// }
// for (let value of mmmap.values()) {
//     console.log(value);
// }
// for (let entry of mmmap.entries()) {
//     console.log(entry[0], entry[1]);
// }
// for (let [key, value] of mmmap) {
//     console.log(key, value);
// }     //结果：11，22，33，1，2，3，11 1，22 2，33 3，11 1，22 2，33 3 
1





// //any 任何类型
// let h: any = 123
// h = true
// h = {}
// h = ''
// h = []
// let newArr: any[] = [1, 2, 3, '', true]
// console.log(newArr[0].split(''))
1



// //unknown类型（严格版any类型）
// //不同：
// //1.unknown类型的变量，不能直接赋值给其他类型的变量（除了any类型和unknown类型）
// let v:unknown = 123;
// //let v1:boolean = v; // 报错
// let v2:any = v; 
// //2.不能直接调用unknown类型变量的方法和属性
// let v1:unknown = { foo: 123 };
// //v1.foo  // 报错
// //3.只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，
// //  其他运算都会报错。
1




//never类型
//即该类型为空，不包含任何值
1




// //void类型 空值，表示没有任何返回值的函数
// function fun1(): void {
//     console.log(123);
// }
// console.log(fun1());
1






// //类型断言   
// //类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型
// let some4: any = '123456';
// let somee4: number = (<string>some4).length;
// console.log(somee4);   //打印结果为  6
1





// //类型推断   ts在没有明确的指定类型的时候推测一个类型
// //两种情况   //1.定义变量的时候，直接给变量赋值
// //2.定义变量的时候，没有赋值，则定义类型为any类型
// let t = 123;   //将t定义为一个number类型通过类型推断
// //t=''  报错
1





// //联合类型
// //表示取值可以为多种类型中的一种
// //flag true,1 false,2
// let f: boolean | number | string = true
// //f=123
// //f=true
// f = '123'            //再次赋值，走类型推断，给变量定义一个类型 
// console.log(f.split(''))

// //number[] | string[]表示一个数组，其元素要么全都是number，要么全都是string，不能两者兼有
// //（number | string）[]表示一个数组，其元素类型可以是number，也可以是string，可以混合
1




// //交叉类型
// //用A&B表示，任一类型必须同时属于A和B，才属于交叉类型A&B
// type AA= { foo: number };
// type BB = AA & { bar: number };
1






/*
条件语句

if语句
var qq:number=-5
if (qq>0){
    console.log('yes');   
}
console.log('no');   //结果：no
如果布尔表达式（qq>0）为true则执行if语句内的代码块，如果fulse，则if语句结束后的第一组代码(闭括号外)将被执行

if...else语句
const ww:number=7
if (ww>0){
    console.log('>0');
    
}else{
    console.log('<0');   
}     //结果：>0
如果布尔表达式（ww>0）为true则执行if内的代码，如果false则执行else内的代码

if...else if...else语句
onst rr:number=8
if (rr>10){
    console.log('>10');  
}else if(rr>9){
    console.log('>9');
}else if(rr<0){
    console.log('<0');
}else{
    console.log("yes");
}   //结果：yes
else之前依次判断，若布尔表达式为true则打印其后括号内代码，
若else之前全部布尔表达式都为false，则执行else后括号内的代码

switch…case 语句
var tt: boolean = false;
switch(tt) {
    case true:{
        console.log(false);
        break;
    }
    case false:{
        console.log(true);
        break;
    }
    default:{
        console.log(true ,false);      
    } 
}   //结果：true
当测试的变量等于case中的常量时，case后跟的语句将被执行，直到遇到break为止；
在switch语句结尾可有default，当变量与case的所有值都不匹配时执行，此中break不必需
*/
1



/*
循环
一.for循环
var num: number = 5;
var i: number;
var factorial = 1;

for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial)   //结果为120
//先执行i=num，如果i>=1,则执行factorial *= i，再执行i--，直到i<0,结束循环

二.for...in循环 （适合遍历对象）
let person9 = {
    name: "John",
    age: 30
  };
  
  for (let key in person9) {
    console.log(key); 
  }  //结果：name   age

三.for...of循环 （可遍历数组，字符串，map和set集合，arguments，DOM Nodelist等）
const oo=[1,2,3]
for(let pp of oo){
    console.log(pp)
}     //结果1，2，3
 
foreach循环
let arr = [1, 2, 3]; 

arr.forEach(function(value) {
  console.log(value); 
});    //结果 1  2  3

every循环
let ss=[1,2,33,45];
let dd=ss.every(ss=>ss>=5);
console.log(dd);  //结果  false
用于判断数组中的所有元素是否都满足指定条件，
如果所有元素都满足测试条件就返回 true,否则返回 false。

some循环
与every循环结构相似
差别在于只要有元素满足指定条件就返回true

四.while循环
let gg=6
let jj=1
while (gg>1){
  jj*=gg
  gg--
}
console.log(jj);   //结果为720

五。do...while循环
var gg:number=5
var jj:number=1
do{
  jj*=gg
  gg--
}while (gg>0);
console.log(jj);    //结果 120
var gg = 10;
do {
    console.log(gg);
    gg--;
} while (gg >= 0);  //结果是从10到0的排列
//while后条件如果true，则返回do重新执行循环，若false则终止

六.break语句
break会停止执行嵌套循环最内层的循环，然后执行该块后的下一行代码
var gg = 5;
while (gg > 0) {
    if (gg < 2) {
        console.log(gg);
        break;
    }
    gg--;
}

七。continue语句
for(let gg=8;gg>=0;gg--){
  if (gg % 2 != 0){
    continue
  }
  console.log(gg);
}
continue 会跳过当前循环中的代码，强迫开始下一次循环。

八.无限循环
eg.
let gg = 10;
do {
    console.log(gg);
} while (gg = 10);
*/
1





// //接口

// //1.对象类型，他是对行为的抽象，用于对【对象的形状（shape）】进行描述，理解为一种约束
// //接口一般首字母大写（如下例中Person），一般会在接口前加I
// //定义的变量比接口少了一些属性是不允许的，也不能多出其他的属性
// //?表示可选属性，定义对象？的属性可有可无
// //[propName:string]:any 任意属性和任意属性值
// //可用readonly定义只读属性(不能改)
// //定义接口
// interface IPerson {
//     readonly id: number,    //确定(只读)属性（readonly）
//     name: string,           //可选属性 name age sex等 
//     age: number,
//     sex?: string,
//     //[propName:string]:any     //确定和可选属性必须是任意属性的子集
//     [propName: string]: string | number   //(可用联合类型)
// }
// let p: IPerson = {
//     id: 123456,
//     name: 'hh',
//     age: 123,
//     //sex:'man'
//     width: 123,
// }

// //2.数组类型
// //不常用
// interface INewArray {
//     [index: number]: number
// }
// let arr: INewArray = [1, 2, 3, 4]
// //[1,2,3,4]  arr[0]-->obj['name']
// //  0,1,2,3

// //3.函数类型
// //参数，返回值
// interface ISearchFunc {
//     //(参数：类型，....): 返回值的类型
//     (a: string, b: string): boolean
// }
// //参数，返回值
// //function fun2(a,b){
// //}
// const fun2: ISearchFunc = function (a: string, b: string): boolean {
//     return a.search(b) !== -1
// }
// console.log(fun2('123', '1'));

// //联合类型和接口
// interface ren {
//     name: string
//     xing: string | string[] | (() => string)
// }
// let ren1: ren = { name: '1', xing: '100' }
// console.log(ren1);
// let ren2: ren = { name: '2', xing: ['200'] }
// console.log(ren2);
// let ren3: ren = { name: '3', xing: () => '300' }
// let rrr: any = ren3.xing
// console.log(rrr());       //结果： { name: '1', xing: '100' }   { name: '2', xing: [ '200' ] }   300
1



















// //函数声明和函数表达式

// // //js 函数声明，命名函数
// // function add(a,b){
// //     return a+b
// // }
// // //js 函数表达式
// // let add2=function(a,b){
// //     return a+b
// // }

// //ts
// //eg.
// function gg(a?: number, b?: number, c: number = 4): number {
//     if (a > 0 && b < 0) {
//         return a + c
//     } else if (a < 0 && b > 0) {
//         return b + c
//     } else if (a > 0 && b > 0) {
//         return a + b + c
//     } else {
//         return c
//     }
// }
// console.log(gg(5, -3, 9));    //结果14
// //函数声明，命名函数
// //a 和 b 都是number类型
// //：number表示函数的返回值是number类型
// function add(a: number, b: number): number {
//     return a + b
// }
// console.log(add(1, 2));
// let c: number = add(1, 2)
// console.log(c);
// //函数表示式，匿名函数
// let add2 = function (a: number, b: number): number {
//     return a + b
// }
// console.log(add2(1, 2));
// //函数完整的写法
// let add3: (a: number, b: number) => number = function (a: number, b: number): number {
//     return a + b
// }



// //匿名函数自调用
// // (function() {
// //     var x = 'ff';
// //     console.log(x);

// // }) ()




// //可选参数和默认参数
// //可选参数 ？  必选参数不能位于可选参数的后面
// //                       默认参数
// let getName = function (x: string = 'li', y?: string): string {
//     return x + y
// }
// //console.log(getName());    打印结果为liundefined

// //默认参数可以放在必选参数和可选参数后
// let getName1 = function (x: string, y?: string, z: string = 'hello'): string {
//     return x + y + z
// }
// console.log(getName1('zhangsan'));   //打印结果为zhangsanundefinedhello




// //剩余参数
// function fn(x: string, y: string, ...args: number[]) {
//     console.log(x, y, args);

// }
// fn('', '', 1, 2, 3, 4, 5);

// function addNumbers(...nums: number[]) {
//     var i;
//     var sum: number = 0;

//     for (i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
//     console.log("和为：", sum)
// }
// addNumbers(1, 2, 3)  //结果6，50



// //函数重载：函数名相同，形参不同的多个函数
// //数字 相加，，字符串 拼接
// function newAdd(x: string, y: string): string
// function newAdd(x: number, y: number): number
// function newAdd(x: string | number, y: string | number): string | number {
//     if (typeof x == 'string' && typeof y == 'string') {
//         // ...
//         return x + y
//     } else if (typeof x == 'number' && typeof y == 'number') {
//         // ...
//         return x + y
//     }

// }
// console.log(newAdd(1, 2));
// console.log(newAdd('zhang', 'san'));



// //构造函数
// // var res=new Function('a','b','return a*b')
// // var kk=res(3,4);
// // console.log(kk);      结果：12



// //递归函数
// // function ll(number){
// //     if(number<=0){
// //         return 1
// //     }else{
// //         return(number*ll(number-1))
// //     }
// // }
// // console.log(ll(5));        结果：120


// /*
// lambda函数（箭头函数）
// 普通 function add(a,b){
//         return a+b;
//     }
// 箭头 const add=(a,b)=>{    或（省略return也可）  const add=（a,b）=>a+b;     
//         return a+b;
//     }
// var aa=(a:number)=>a+10
// console.log(aa(100))    //结果： 110

// //可以不指定函数的参数类型，通过函数内来推断参数类型
// var aa = (x) => {
//     if (typeof x == 'string') {
//         console.log(x + ':string');
//     } else if (typeof x == 'number') {
//         console.log(x + ":number");
//     }
// }
// aa('Tom');
// aa(10)            结果:Tom:string  10:number 

// //单个参数（）可以不加
// let aa=a=>'输入:'+a
// console.log(aa(19))    //结果：输入:19

// //无参数时可以设置空括号
// var aa=()=>{
//     console.log('111')
// }
// aa();        //结果：111
// */




// //定义一个函数，获取到一个数字或者字符串的长度
// //类型断言，可以手动指定一个类型
// //2种方式
// //1.变量 as 类型
// //2.<类型>变量

// //将一个联合类型断言为其中一个类型
// function getLength(x: string | number): number {
//     if ((x as string).length) {
//         return (<string>x).length
//     } else {
//         return x.toString().length
//     }
// }
// console.log(getLength('123'));
// console.log(getLength(123));

// //将任何一个类型断言为 any , any类型是访问任何属性和方法
// //它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用as any
// (window as any).a = 10
// //将any断言为一个具体的类型
// function abc(x: any, y: any): any {
//     return x + y
// }
// let a6 = abc(1, 2) as number //a 数值类型
// let a7 = abc('1', '2') as string //b 字符串类型
1







// //类型别名
// type s = string   //通过type 给类型起别名
// let str3: s = '123'
// //str=123  报错
// //常用于给联合类型起别名
// type all = string | number | boolean
// let q1: all = 123
// q1 = ''
// let q2: all = true
// //q2 = [123]   报错

// //用来约束取值只能是几个字符串中的一个
// //张三，张三丰，张大炮
// type stringType = '张三' | '张三丰' | '张大炮'
// let names: stringType = '张三'
1








// //元组tuple  
// let arr3: number[] = [1, 2, 3, 4]
// //元组合并了不同类型的对象
// //对应位置的类型需要相同
// let Tarr: [number, boolean] = [123, true]
// //添加内容时，需要是number或boolean类型
// Tarr.push(456)
// Tarr.push(false)
// //Tarr.push('456') 报错

// var hh = []
// hh[0] = 111
// hh[1] = 222
// console.log(hh[1]);

// var m: [number, string] = [10, '1'];
// m.push(14);
// m.push('4');
// //console.log(m[2]);   报错
// //解决方法1：
// var mm = [10, '1'];
// mm.push(14);
// mm.push('4');
// console.log(mm[2]);
// //解决方法2：
// var mmm: (number | string)[] = [10, '1']
// mm.push(14);
// mm.push('4');
// console.log(mm[2]);

// //push()向元组中添加元素（添加在最后面）；pop()向元组中移除元素（最后一个）
// var kkk = [10, '20']
// kkk.push(30)
// kkk.push('40')
// kkk.pop()
// console.log(kkk[2]);  //结果：30
// console.log(kkk[3]);  //结果：undefined(因为是最后一个已经被删了)

// //元组更新
// var lll: [number, string] = [10, '20']
// console.log(lll[0]);
// lll[0] = 30
// console.log(lll[0]);   //结果： 10，30

// //解构元组（可把远足元素赋值给变量）
// var vv = [10, '20']
// var vv1 = vv[0], vv2 = vv[1]
// console.log(vv1, vv2);
// //也可
// var bb0 = [10, '20']
// var [bb1, bb2] = bb0
// console.log(bb1);
// console.log(bb2);
1







// //枚举（enum）类型
// //使用枚举类型给一组数值赋予名称
// //可以通过名称去拿取值，也可以通过值去拿取名称
// //1，2，3，4
// enum numbertype {
//     one = 2,//手动赋值，没有赋值则第一个参数默认为零，后面的递增加一
//     two = 1,  //后面的值如果没有手动赋值，会根据前面的值进行递增加一
//     three,
//     four
// }
// console.log(numbertype);
// //打印出来是1，2，3    只有三个数，three会覆盖one
// //手动赋值尽量不要写一些重复的值

// //枚举项有两种类型，常数项（constant member）和计算所得项（computed member）
// //计算所得项需要放置在已经确定赋值的枚举项之前，后面不能存放未手动赋值的枚举项
// enum color {
//     red,
//     blue = 'blue'.length,
//     green = 11
// }

// //常数枚举
// //常数枚举是使用 const enum 定义的枚举类型
// //常数枚举和普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
// const enum Obj {
//     o,
//     b,
//     //j='j'.length  报错
// }
// console.log(Obj.o);
// console.log(Obj.b);

// //外部枚举（Ambient Enums）是使用declare enum 定义的枚举类型
// //declare 定义的类型只会用于编译时的检查，编译结果中会被删除 
// //同时使用declare和const也是可以的
// declare const enum ABC {
//     a, b, c
// }
// console.log(ABC.a);
1






// //类
// //类：描述所创建的对象共同的属性和方法

// //eg:
// class CCar {
//     engine: string
//     constructor(engine: string) {
//         this.engine = engine
//     }
//     xxx(): void {
//         console.log('函数中型号：' + this.engine);

//     }
// }
// var car = new CCar('XXXYYY')
// car.xxx()
// console.log('读取型号:' + car.engine);

// //实例化对象
// class Person {
//     name: string
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     sayhi(str: string) {
//         console.log('hi' + str);

//     }
// }
// let p1 = new Person('zhangsan', 18)    //new的时候，会执行类中的构造方法constructor
// p1.sayhi('lisi')

// //扩展现有的类，通过继承
// //继承：类与类之间的关系

// //eg:
// class N1 {
//     size: string
//     constructor(size: string) {
//         this.size = size
//     }
// }
// class N2 extends N1 {
//     wide: string
//     constructor(size: string, wide: string) {
//         super(size)
//         this.wide = wide
//     }
// }
// class N3 extends N2 {
//     disp(): void {
//         console.log('wide: ' + this.wide);

//     }
// }
// var xxxx = new N3('super', 'normal')
// console.log('size: ' + xxxx.size);
// xxxx.disp()

// //子类继承父类
// class Animal {        //父类  
//     name: string
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
//     sayhi(sayhi: string) {
//         console.log('hi' + str);

//     }
// }
// //子类
// class Dog extends Animal {
//     constructor(name: string, age: number) {
//         //调用父类的构造函数，使用super
//         super(name, age)
//     }
//     //可以调用父类的方法,也可以重写父类的方法
//     sayhi() {
//         console.log('ddodododo');

//     }
// }
// const a4 = new Animal('mao', 3)
// a4.sayhi('mao')
// const b1 = new Dog('gou', 2)
// //b1.sayhi('gou')    //报错
// //总结：类与类之间存在继承关系，通过extents进行继承
// //子类可以调用父类的方法，通过super

// //子类还可以重写父类的方法
// class M1 {
//     disp(): void {
//         console.log('father');
//     }
// }
// class M2 extends M1 {
//     disp(): void {
//         super.disp()
//         console.log('children');
//     }
// }

// //存取器 ， 可以帮助我们控制对对象成员的访问
// class Name {
//     firstName: string
//     lastName: string
//     constructor(firstName: string, lastName: string) {
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     //设置存取器
//     //读取器-->用来读取数据
//     get fullName() {
//         return this.firstName + '-' + this.lastName
//         //return('张三')
//     }
//     //设置器-->用来设置数据
//     set fullName(value) {
//         console.log(value);
//         let names = value.split('-')
//         this.firstName = names[0]
//         this.lastName = names[1]
//     }
// }
// const n1 = new Name('张', '大炮')
// console.log(n1);
// n1.fullName = '张-三丰'
// console.log(n1.fullName);

// //静态方法
// //静态属性
// //只属于类自己的属性和方法,静态成员可以直接通过类名调用
// class A {
//     static name1: string
//     // constructor(name:string){
//     //     this.name=name
//     // }

//     static sayhi(): void {
//         console.log('hi');

//     }
// }
// // const a5=new A()
// // console.log(a5.name);
// A.name1 = 'hahahage'
// console.log(A.name1);
// A.sayhi()

// //instanceof运算符,用于判断对象是否是指定的类型，如果是返回true，否则flase
// class II { }
// var III = new III()
// var iii = III instanceof II
// console.log(iii);

// // 修饰符
// //public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// //private 修饰的属性或方法是私有的，不能在声明它的类的外部访问，包括子类也不能，但是这个属性和方法是可以被继承的
// //protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
// class B {
//     public gendar: string   //共有的属性
//     private name1: string
//     protected age: number   //受保护的属性
//     public constructor(name: string, age: number) {
//         this.name1 = name
//         this.age = age
//     }
//     public p() {
//         console.log(this.name1);
//         console.log(this.age);

//     }
// }
// class C extends B {
//     constructor(name1: string, age: number) {
//         super(name1, age)
//     }
//     play() {
//         //console.log(this.name1);  //报错
//         console.log(this.age);
//     }
// }
// const b2 = new B('张三', 12)
// const c2 = new C('张三丰', 13)
// //console.log(c2.age);
// //console.log(b2.name1);
// //b2.p()
// c2.play()

// //readonly修饰符
// class X {
//     //readonly age:number //只读属性,但是在构造函数可以修改
//     //readonly以及三个修饰符定义的在参数上，那就是创建并且初始化age参数
//     constructor(public age: number) {
//         //this.age=age
//     }
//     update() {
//         //this.age=14   //报错，不能被修改，只读属性
//     }
// }
// const x = new X(13)
// console.log(x);
// //X.age=15  报错

// // 抽象类
// // 抽象属性和抽象方法不能被继承
// abstract class Y {  //定义抽象类
//     abstract name: string //抽象属性
//     // constructor(name){
//     //     this.name=name
//     // }
//     abstract sayHi()   //不能够有具体实现

// }
// //不能被实例化
// class Z extends Y {
//     name: string
//     constructor(name) {
//         super()
//         this.name = name
//     }
//     //在子类中去实现抽象类中的抽像方法
//     sayHi() {
//         console.log('hi');
//     }
// }
// const z = new Z('zzz')
// console.log(z.name);
// z.sayHi();

// //类的类型
// class Car {
//     name: string
//     constructor(name) {
//         this.name = name
//     }
// }
// class Ben extends Car {
//     age: number
//     constructor(name) {
//         super(name)
//     }
// }
// //const car:Ben=new Car('')  //报错 类型Car里缺少属性age 但类型Ben中需要该属性
// const ben: Car = new Ben('')
1






//类与接口
// //类实现接口
// interface ISing {
//     //这个方法是没有任何实现
//     sing()
// }
// interface IDance {
//     dance()
// }
// class P implements ISing, IDance {  //人 唱歌，跳舞
//     sing() {
//         console.log('cc');
//     }
//     dance() {
//         console.log('dd');
//     }
// }
// class An implements ISing, IDance { //动物 唱歌，跳舞
//     sing() {
//         console.log('cc');
//     }
//     dance() {
//         console.log('dd');
//     }
// }
// const p2 = new P()
// const d2 = new An()
// p2.sing()
// p2.dance()
// d2.sing()
// d2.sing()

// interface OOOO {
//     name: string
// }
// class oooo implements OOOO {
//     name: string
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//     }
// }
// var ooo = new oooo('lisi', 18)
// console.log(ooo.age);




// //接口继承接口
// interface IRun {
//     run()
// }
// interface ISwim {
//     swim()
// }
// //接口可以继承其他的多个接口
// interface IActive extends IRun, ISwim {

// }
// //...
// class I implements IActive {
//     run() {

//     }
//     swim() {

//     }
// }

// //接口继承类
// class NewPerson {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     sayHi() {
//         console.log('hi');

//     }
// }
// interface MPerson extends NewPerson { //接口继承类中的实例属性和方法
//     age: number
// }
// let person: MPerson = {
//     name: '',
//     age: 18,
//     sayHi() {

//     }
// }
1






// //函数合并-->函数重载（见 7.函数.ts 函数重载）
// //合并的属性的类型必须是唯一的
// //接口合并
// interface CCat {
//     name: 'xx'
// }
// interface CCat {
//     name: 'xx'
//     age: '3'
// }
// const ccat: CCat = { name: 'xx', age: '3' }
// //类的合并是一样的
1






// //泛型
// //需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量
// //函数的作用：跟据数量产生对应的个数，存放在一个数组中
// //T表示任意输入的类型
// function getarr<T>(value: T, count: number): T[] {
//     const arr: T[] = []
//     for (let i = 0; i < count; i++) {
//         arr.push(value)
//     }
//     return arr
// }
// //原则上不推荐使用any
// //使用泛型，在定义时不需要先确定类型，而是在使用时再去确定
// //如果没有确定的话类型推断
// console.log(getarr<number>(123, 3));
// console.log(getarr<string>('123', 3));

// //多个泛型参数的函数
// //[123,'123']-->['123',123]
// function updateArr<T, U>(t: [T, U]): [U, T] {
//     return [t[1], t[0]]
// }
// console.log(updateArr<string, number>(['123', 123]));

// //泛型约束
// interface ILength {
//     length: number
// }
// function getLength0<T extends ILength>(x: T): number {
//     return x.length
// }
// console.log(123);

// //泛型接口
// // interface IArr {
// //     <T>(value: T, count: number): Array<T>
// // }
// interface IArr<T> {
//     (value: T, count: number): Array<T>
// }
// let getArr1: IArr<string> = function <T>(value: T, count: number): T[] {
//     const arr: T[] = []
//     for (let i = 0; i < count; i++) {
//         arr.push(value)
//     }
//     return arr
// }
// console.log(getArr1('123', 123));
// interface IPerson1<T> {
//     name: T
// }
// let p3: IPerson1<string> = {
//     name: ''
// }
// let p4: IPerson1<number> = {
//     name: 1234
// }

// //泛型类
// class Person1<T>{
//     name: string
//     age: T
//     constructor(name: string, age: T) {
//         this.name = name
//         this.age = age
//     }
// }
// const p5 = new Person1<string>('123', '123')
// const p6 = new Person1<number>('123', 123)
1







// //命名空间，用namespace定义
// //eg：
// namespace xxx {
//     export interface hhh { }
//     export class jjj { }
// }
// //以上定义了一个命名空间xxx，若想再外部可以调用xxx的类或接口，则要在类或接口前添加export关键词
// //若一个命名空间在一个单独的ts文件中，则应使用///引用，格式：
// /// <reference path = '文件名'/>

// namespace ppp {
//     export class haohaohao {
//         age: number
//         size: string
//         constructor(age: number, size: string) {
//             this.age = age
//             this.size = size
//         }
//     }
// }
// //另一文件中：
// ///<reference path = 'hw.ts' />
// namespace ppp {
//     var woman1 = new haohaohao(18, 'big')
//     console.log(woman1.age);
// }
1













































































