//函数声明和函数表达式

// //js 函数声明，命名函数
// function add(a,b){
//     return a+b
// }
// //js 函数表达式
// let add2=function(a,b){
//     return a+b
// }

//ts
//eg.
function gg(a?: number, b?: number, c: number = 4): number {
    if (a > 0 && b < 0) {
        return a + c
    } else if (a < 0 && b > 0) {
        return b + c
    } else if (a > 0 && b > 0) {
        return a + b + c
    } else {
        return c
    }
}
console.log(gg(5, -3, 9));    //结果14
//函数声明，命名函数
//a 和 b 都是number类型
//：number表示函数的返回值是number类型
function add(a: number, b: number): number {
    return a + b
}
console.log(add(1, 2));
let c: number = add(1, 2)
console.log(c);
//函数表示式，匿名函数
let add2 = function (a: number, b: number): number {
    return a + b
}
console.log(add2(1, 2));
//函数完整的写法
let add3: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b
}



//匿名函数自调用
// (function() {
//     var x = 'ff';
//     console.log(x);

// }) ()




//可选参数和默认参数
//可选参数 ？  必选参数不能位于可选参数的后面
//                       默认参数
let getName = function (x: string = 'li', y?: string): string {
    return x + y
}
//console.log(getName());    打印结果为liundefined

//默认参数可以放在必选参数和可选参数后
let getName1 = function (x: string, y?: string, z: string = 'hello'): string {
    return x + y + z
}
console.log(getName1('zhangsan'));   //打印结果为zhangsanundefinedhello




//剩余参数
function fn(x: string, y: string, ...args: number[]) {
    console.log(x, y, args);

}
fn('', '', 1, 2, 3, 4, 5);

function addNumbers(...nums: number[]) {
    var i;
    var sum: number = 0;

    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("和为：", sum)
}
addNumbers(1, 2, 3)  //结果6，50



//函数重载：函数名相同，形参不同的多个函数
//数字 相加，，字符串 拼接
function newAdd(x: string, y: string): string
function newAdd(x: number, y: number): number
function newAdd(x: string | number, y: string | number): string | number {
    if (typeof x == 'string' && typeof y == 'string') {
        // ...
        return x + y
    } else if (typeof x == 'number' && typeof y == 'number') {
        // ...
        return x + y
    }

}
console.log(newAdd(1, 2));
console.log(newAdd('zhang', 'san'));



//构造函数
// var res=new Function('a','b','return a*b')
// var kk=res(3,4);
// console.log(kk);      结果：12



//递归函数
// function ll(number){
//     if(number<=0){
//         return 1
//     }else{
//         return(number*ll(number-1))
//     }
// }
// console.log(ll(5));        结果：120


/*
lambda函数（箭头函数）
普通 function add(a,b){
        return a+b;
    }
箭头 const add=(a,b)=>{    或（省略return也可）  const add=（a,b）=>a+b;     
        return a+b;
    }
var aa=(a:number)=>a+10
console.log(aa(100))    //结果： 110

//可以不指定函数的参数类型，通过函数内来推断参数类型
var aa = (x) => {
    if (typeof x == 'string') {
        console.log(x + ':string');
    } else if (typeof x == 'number') {
        console.log(x + ":number");
    }
}
aa('Tom');
aa(10)            结果:Tom:string  10:number 

//单个参数（）可以不加
let aa=a=>'输入:'+a
console.log(aa(19))    //结果：输入:19

//无参数时可以设置空括号
var aa=()=>{
    console.log('111')
}
aa();        //结果：111
*/





//定义一个函数，获取到一个数字或者字符串的长度
//类型断言，可以手动指定一个类型
//2种方式
//1.变量 as 类型
//2.<类型>变量

//将一个联合类型断言为其中一个类型
function getLength(x: string | number): number {
    if ((x as string).length) {
        return (<string>x).length
    } else {
        return x.toString().length
    }
}
console.log(getLength('123'));
console.log(getLength(123));

//将任何一个类型断言为 any , any类型是访问任何属性和方法
//它极有可能掩盖了真正的类型错误，所以如果不是非常确定，就不要使用as any
(window as any).a = 10
//将any断言为一个具体的类型
function abc(x: any, y: any): any {
    return x + y
}
let a6 = abc(1, 2) as number //a 数值类型
let a7 = abc('1', '2') as string //b 字符串类型