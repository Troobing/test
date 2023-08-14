//1.对象类型，他是对行为的抽象，用于对【对象的形状（shape）】进行描述，理解为一种约束
//接口一般首字母大写（如下例中Person），一般会在接口前加I
//定义的变量比接口少了一些属性是不允许的，也不能多出其他的属性
//?表示可选属性，定义对象？的属性可有可无
//[propName:string]:any 任意属性和任意属性值
//可用readonly定义只读属性(不能改)
//定义接口
interface IPerson {
    readonly id: number,    //确定(只读)属性（readonly）
    name: string,           //可选属性 name age sex等 
    age: number,
    sex?: string,
    //[propName:string]:any     //确定和可选属性必须是任意属性的子集
    [propName: string]: string | number   //(可用联合类型)
}
let p: IPerson = {
    id: 123456,
    name: 'hh',
    age: 123,
    //sex:'man'
    width: 123,
}
console.log(p.id);



//2.数组类型
//不常用
interface INewArray {
    [index: number]: number
}
let arr: INewArray = [1, 2, 3, 4]
//[1,2,3,4]  arr[0]-->obj['name']
//  0,1,2,3

                                                                     
//3.函数类型
//参数，返回值
interface ISearchFunc {
    //(参数：类型，....): 返回值的类型
    (a: string, b: string): boolean
}
//参数，返回值
//function fun2(a,b){
//}
const fun2: ISearchFunc = function (a: string, b: string): boolean {
    return a.search(b) !== -1
}
console.log(fun2('123', '1'));

//联合类型和接口
interface ren {
    name: string
    xing: string | string[] | (() => string)
}
let ren1: ren = { name: '1', xing: '100' }
console.log(ren1);
let ren2: ren = { name: '2', xing: ['200'] }
console.log(ren2);
let ren3: ren = { name: '3', xing: () => '300' }
let rrr: any = ren3.xing
console.log(rrr());       //结果： { name: '1', xing: '100' }   { name: '2', xing: [ '200' ] }   300




//接口合并
interface CCat {
    name: 'xx'
}
interface CCat {
    name: 'xx'
    age: '3'
}
const ccat: CCat = { name: 'xx', age: '3' }