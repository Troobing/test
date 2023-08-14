//“值”（value）和“类型”（type）





//一.基础数据类型

//1.布尔类型  boolean   true 1 ， false 0
let flag: boolean = true
flag = true


//2.数字类型 number
let a: number = 10 //十进制
let a1: number = 0b1010//二进制
let a2: number = 0o12//八进制
let a3: number = 0xa//十六进制
a = 11


//3.字符串类型 string
let str: string = '123'


//4.undefined和null , 用的不多
let u: undefined = undefined
let n: null = null
//u=123

//undefined和null 还可以作为其他类型的子类型
//可以把undefined和null赋值给其它类型的变量
let b: number = undefined
let str1: string = null


//symbol  用于创建一个不重复的标识符
//Symbol可以避免属性名冲突。


//bigint类型   
//用于表示大于 Number 类型支持范围的大整数,可以安全地存储和操作大整数,不会出错






//any 任何类型
let h: any = 123
h = true
h = {}
h = ''
h = []
let newArr: any[] = [1, 2, 3, '', true]
console.log(newArr[0].split(''))





//unknown类型（严格版any类型）
//不同：
//1.unknown类型的变量，不能直接赋值给其他类型的变量（除了any类型和unknown类型）
let v:unknown = 123;
//let v1:boolean = v; // 报错
let v2:any = v; 
//2.不能直接调用unknown类型变量的方法和属性
let v1:unknown = { foo: 123 };
//v1.foo  // 报错
//3.只能进行比较运算（运算符==、===、!=、!==、||、&&、?）、取反运算（运算符!）、typeof运算符和instanceof运算符这几种，
//  其他运算都会报错。





//never类型
//即该类型为空，不包含任何值





//void类型 空值，表示没有任何返回值的函数
function fun1(): void {
    console.log(123);
}
console.log(fun1());






/*
//implicit(隐式类型)，explicit（显示类型）
//在ts中,隐式类型(Implicit)和显式类型(Explicit)指的是变量的类型注解方式。
let age = 18; // 隐式类型推断为number
let age: number = 18; // 显式声明number类型
*/






//二.引用数据类型
//1.数组
//定义数组一
let arr2: number[] = [1, 2, 3]   //数字类型数组  []表数组
let arr4: (number|string)[]=[1,'2']
//arr2=['']  //只能数字


//只读数组
//1
const arr5: number[]=[1,2,3]
arr5[0]=11
const arr6:readonly number[]=[1,2,3]
//arr6[0]=11   报错

//2
const arr7=[0,1] as const;
//arr[0]=4     报错


//let arr3:Array=[]
//定义数组二:泛型
let arr1: Array<number> = [10, 20, 30]
//let arr4:number<number>=


//eg
var aa8: number[] = Array(4)  //(4)表示数组aa中有4个元素
var bb = aa8.length
for (var i = 0; i <= bb; i++) {
    aa8[i] = i * 2
    console.log(aa8[i]);
}   //结果:0  2  4  6  8   


//数组迭代（可用for语句来循环输出数组中的各个元素）
var kk: any
var ll: number[] = [10, 11, 12, 13]
for (kk in ll) {
    console.log(ll[kk]);
}


//数组解构
//eg1：
var xx: number[] = [10, 20]
let xx1 = xx[0], xx2 = xx[1]
console.log(xx1);
console.log(xx2);      //结果：10  20
//eg2：
let cc: number[] = [10, 20]
let [x0, y0] = cc
console.log(x0);
console.log(y0);       //结果：10  20


//多维数组
var zz = [[[1, 2, 3], [7, 8, 9]], [[10, 11, 12], [13, 14]], [[17, 18]]];
console.log(zz[1][1][0]);    //结果13


//eg  作为参数传递给函数
var sites: string[] = new Array("Google", "Runoob", "Taobao", "Facebook")
function disp(sites: string[]) {
    for (var i = 0; i < sites.length; i++) {
        console.log(sites[i])
    }
}
disp(sites);     //结果：Google Runoob Taobao Facebook


//eg  作为函数的返回值
function disp1(): string[] {
    return new Array("Google", "Runoob", "Taobao", "Facebook");
}
var sites: string[] = disp1()
for (var ii in sites) {
    console.log(sites[i])
}


//2.对象
//object 表示非原始类型, 除了number string boolean（字面量方式定义）
let obj: object = {}   //{}表对象
//obj=123 报错
//obj=''  报错
obj = null
obj = undefined
obj = []
obj = new String()    //实例对象
obj = String

//eg:
var obj0 = {
    site1: 'troobing',
    site2: 'binging'
}
console.log(obj0.site1);
console.log(obj0.site2);

//eg：
var oob = {
    site1: 'roob',
    site2: 'yumi',
    site3: function () { }
}
oob.site3 = function () {
    console.log('hello' + oob.site1);
}
oob.site3()

//对象可以作为一个参数传给函数
var site = {
    site1: '111',
    site2: '222'
}
var inin = function (obj: { site1: string, site2: string }) {
    console.log(obj.site1);
    console.log(obj.site2);
}
inin(site)





//普通 const gh2:string='hello'
const gh1 = new String('hello');
//gh1的类型为String对象类型
//可以访问String对象的方法,如s.charAt()
gh1.charAt(1)   //打印值为：e 





//ts Map对象
//创建Map
let myMap = new Map();
//或
let mymap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]);

/*Map 相关的函数与属性：
map.clear() – 移除 Map 对象的所有键/值对 。
map.set() – 设置键值对，返回该 Map 对象。
map.get() – 返回键对应的值，如果不存在，则返回 undefined。
map.has() – 返回一个布尔值，用于判断 Map 中是否包含键对应的值。
map.delete() – 删除 Map 中的元素，删除成功返回 true，失败返回 false。
map.size – 返回 Map 对象键/值对的数量。
map.keys() - 返回一个 Iterator 对象， 包含了 Map 对象中每个元素的键 。
map.values() – 返回一个新的Iterator对象，包含了Map对象中每个元素的值 。*/

let mmap = new Map();
mmap.set('11', 1);
mmap.set('22', 2);
mmap.set('33', 3);
console.log(mmap.get('22'));
console.log(mmap.get('44'));
console.log(mmap.has('11'));
console.log(mmap.size);
console.log(mmap.delete('11'));
mmap.clear();
console.log(mmap);  //结果： 2，undefined，true，3，trueMap(0) {}

//迭代map
let mmmap = new Map
mmmap.set('11', 1)
mmmap.set('22', 2)
mmmap.set('33', 3)
for (let key of mmmap.keys()) {
    console.log(key);
}
for (let value of mmmap.values()) {
    console.log(value);
}
for (let entry of mmmap.entries()) {
    console.log(entry[0], entry[1]);
}
for (let [key, value] of mmmap) {
    console.log(key, value);
}     //结果：11，22，33，1，2，3，11 1，22 2，33 3，11 1，22 2，33 3 





//类型断言   
//类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型
let some4: any = '123456';
let somee4: number = (<string>some4).length;
console.log(somee4);   //打印结果为  6







//类型推断   ts在没有明确的指定类型的时候推测一个类型
//两种情况   //1.定义变量的时候，直接给变量赋值
//2.定义变量的时候，没有赋值，则定义类型为any类型
let t = 123;   //将t定义为一个number类型通过类型推断
//t=''  报错






//联合类型
//表示取值可以为多种类型中的一种
//flag true,1 false,2
let f: boolean | number | string = true
//f=123
//f=true
f = '123'            //再次赋值，走类型推断，给变量定义一个类型 
console.log(f.split(''))

//number[] | string[]表示一个数组，其元素要么全都是number，要么全都是string，不能两者兼有
//（number | string）[]表示一个数组，其元素类型可以是number，也可以是string，可以混合





//交叉类型
//用A&B表示，任一类型必须同时属于A和B，才属于交叉类型A&B
type AA= { foo: number };
type BB = AA & { bar: number };





//枚举（enum）类型
//使用枚举类型给一组数值赋予名称
//可以通过名称去拿取值，也可以通过值去拿取名称
//1，2，3，4
enum numbertype {
    one = 2,//手动赋值，没有赋值则第一个参数默认为零，后面的递增加一
    two = 1,  //后面的值如果没有手动赋值，会根据前面的值进行递增加一
    three,
    four
}
console.log(numbertype);
//打印出来是1，2，3    只有三个数，three会覆盖one
//手动赋值尽量不要写一些重复的值

//枚举项有两种类型，常数项（constant member）和计算所得项（computed member）
//计算所得项需要放置在已经确定赋值的枚举项之前，后面不能存放未手动赋值的枚举项
enum color {
    red,
    blue = 'blue'.length,
    green = 11
}

//常数枚举
//常数枚举是使用 const enum 定义的枚举类型
//常数枚举和普通枚举的区别是，它会在编译阶段被删除，并且不能包含计算成员
const enum Obj {
    o,
    b,
    //j='j'.length  报错
}
console.log(Obj.o);
console.log(Obj.b);

//外部枚举（Ambient Enums）是使用declare enum 定义的枚举类型
//declare 定义的类型只会用于编译时的检查，编译结果中会被删除 
//同时使用declare和const也是可以的
declare const enum ABC {
    a, b, c
}
console.log(ABC.a);











