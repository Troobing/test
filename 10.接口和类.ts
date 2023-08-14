//类实现接口
//方法
interface ISing {
    //这个方法是没有任何实现
    sing()
}
interface IDance {
    dance()
}
class P implements ISing, IDance {  //人 唱歌，跳舞
    sing() {
        console.log('cc');
    }
    dance() {
        console.log('dd');
    }
}
class An implements ISing, IDance { //动物 唱歌，跳舞
    sing() {
        console.log('cc');
    }
    dance() {
        console.log('dd');
    }
}
const p2 = new P()
const d2 = new An()
p2.sing()
p2.dance()
d2.sing()
d2.sing()

//属性
interface OOOO {
    name: string
}
class oooo implements OOOO {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
var ooo = new oooo('lisi', 18)
console.log(ooo.age);




//接口继承接口
interface IRun {
    run()
}
interface ISwim {
    swim()
}
//接口可以继承其他的多个接口
interface IActive extends IRun, ISwim {

}
//...
class I implements IActive {
    run() {

    }
    swim() {

    }
}




//接口继承类
class NewPerson {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sayHi() {
        console.log('hi');

    }
}
interface MPerson extends NewPerson { //接口继承类中的实例属性和方法
    age: number
}
let person: MPerson = {
    name: '',
    age: 18,
    sayHi() {

    }
}