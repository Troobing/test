//泛型
//需求：定义一个函数，传入两个参数，第一个参数是数据，第二个参数是数量
//函数的作用：跟据数量产生对应的个数，存放在一个数组中
//T表示任意输入的类型
function getarr<T>(value: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
        arr.push(value)
    }
    return arr
}
//原则上不推荐使用any
//使用泛型，在定义时不需要先确定类型，而是在使用时再去确定
//如果没有确定的话类型推断
console.log(getarr<number>(123, 3));       //结果：123，123，123
console.log(getarr<string>('123', 3));


//多个泛型参数的函数
//[123,'123']-->['123',123]
function updateArr<T, U>(t: [T, U]): [U, T] {
    return [t[1], t[0]]
}
console.log(updateArr<string, number>(['123', 123]));


//泛型约束
interface ILength {
    length: number
}
function getLength0<T extends ILength>(x: T): number {
    return x.length
}
console.log(123);


//泛型接口
// interface IArr {
//     <T>(value: T, count: number): Array<T>
// }
interface IArr<T> {
    (value: T, count: number): Array<T>
}
let getArr1: IArr<string> = function <T>(value: T, count: number): T[] {
    const arr: T[] = []
    for (let i = 0; i < count; i++) {
        arr.push(value)
    }
    return arr
}
console.log(getArr1('123', 123));

interface IPerson1<T> {
    name: T
}
let p3: IPerson1<string> = {
    name: ''
}
let p4: IPerson1<number> = {
    name: 1234
}


//泛型类
class Person1<T>{
    name: string
    age: T
    constructor(name: string, age: T) {
        this.name = name
        this.age = age
    }
}
const p5 = new Person1<string>('123', '123')
const p6 = new Person1<number>('123', 123)
