//类
//类：描述所创建的对象共同的属性和方法


//eg:
class CCar {
    engine: string
    constructor(engine: string) {
        this.engine = engine
    }
    xxx(): void {
        console.log('函数中型号：' + this.engine);

    }
}
var car = new CCar('XXXYYY')
car.xxx()
console.log('读取型号:' + car.engine);


//实例化对象
class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayhi(str: string) {
        console.log('hi' + str);

    }
}
let p1 = new Person('zhangsan', 18)    //new的时候，会执行类中的构造方法constructor
p1.sayhi('lisi')


//扩展现有的类，通过继承
//继承：类与类之间的关系

//eg:
class N1 {
    size: string
    constructor(size: string) {
        this.size = size
    }
}
class N2 extends N1 {
    wide: string
    constructor(size: string, wide: string) {
        super(size)
        this.wide = wide
    }
}
class N3 extends N2 {
    disp(): void {
        console.log('wide: ' + this.wide);

    }
}
var xxxx = new N3('super', 'normal')
console.log('size: ' + xxxx.size);
xxxx.disp()

//子类继承父类
class Animal {        //父类  
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    sayhi(sayhi: string) {
        console.log('hi' + str);

    }
}
//子类
class Dog extends Animal {
    constructor(name: string, age: number) {
        //调用父类的构造函数，使用super
        super(name, age)
    }
    //可以调用父类的方法,也可以重写父类的方法
    sayhi() {
        console.log('ddodododo');

    }
}
const a4 = new Animal('mao', 3)
a4.sayhi('mao')
const b1 = new Dog('gou', 2)
//b1.sayhi('gou')    //报错
//总结：类与类之间存在继承关系，通过extents进行继承
//子类可以调用父类的方法，通过super

//子类还可以重写父类的方法
class M1 {
    disp(): void {
        console.log('father');
    }
}
class M2 extends M1 {
    disp(): void {
        super.disp()
        console.log('children');
    }
}


//存取器 ， 可以帮助我们控制对对象成员的访问
class Name {
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }
    //设置存取器
    //读取器-->用来读取数据
    get fullName() {
        return this.firstName + '-' + this.lastName
        //return('张三')
    }
    //设置器-->用来设置数据
    set fullName(value) {
        console.log(value);
        let names = value.split('-')
        this.firstName = names[0]
        this.lastName = names[1]
    }
}
const n1 = new Name('张', '大炮')
console.log(n1);
n1.fullName = '张-三丰'
console.log(n1.fullName);


//静态方法
//静态属性
//只属于类自己的属性和方法,静态成员可以直接通过类名调用
class A {
    static name1: string
    // constructor(name:string){
    //     this.name=name
    // }

    static sayhi(): void {
        console.log('hi');

    }
}
// const a5=new A()
// console.log(a5.name);
A.name1 = 'hahahage'
console.log(A.name1);
A.sayhi()


//instanceof运算符,用于判断对象是否是指定的类型，如果是返回true，否则flase
class II { }
var III = new III()
var iii = III instanceof II
console.log(iii);


// 修饰符
//public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
//private 修饰的属性或方法是私有的，不能在声明它的类的外部访问，包括子类也不能，但是这个属性和方法是可以被继承的
//protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
class B {
    public gendar: string   //共有的属性
    private name1: string
    protected age: number   //受保护的属性
    public constructor(name: string, age: number) {
        this.name1 = name
        this.age = age
    }
    public p() {
        console.log(this.name1);
        console.log(this.age);

    }
}
class C extends B {
    constructor(name1: string, age: number) {
        super(name1, age)
    }
    play() {
        //console.log(this.name1);  //报错
        console.log(this.age);
    }
}
const b2 = new B('张三', 12)
const c2 = new C('张三丰', 13)
//console.log(c2.age);
//console.log(b2.name1);
//b2.p()
c2.play()


//readonly修饰符
class X {
    //readonly age:number //只读属性,但是在构造函数可以修改
    //readonly以及三个修饰符定义的在参数上，那就是创建并且初始化age参数
    constructor(public age: number) {
        //this.age=age
    }
    update() {
        //this.age=14   //报错，不能被修改，只读属性
    }
}
const x = new X(13)
console.log(x);
//X.age=15  报错


// 抽象类
// 抽象属性和抽象方法不能被继承
abstract class Y {  //定义抽象类
    abstract name: string //抽象属性
    // constructor(name){
    //     this.name=name
    // }
    abstract sayHi()   //不能够有具体实现

}
//不能被实例化
class Z extends Y {
    name: string
    constructor(name) {
        super()
        this.name = name
    }
    //在子类中去实现抽象类中的抽像方法
    sayHi() {
        console.log('hi');
    }
}
const z = new Z('zzz')
console.log(z.name);
z.sayHi();


//类的类型
class Car {
    name: string
    constructor(name) {
        this.name = name
    }
}
class Ben extends Car {
    age: number
    constructor(name) {
        super(name)
    }
}
//const car:Ben=new Car('')  //报错 类型Car里缺少属性age 但类型Ben中需要该属性
const ben: Car = new Ben('')


//eg：
class Iaperson {
    name:string
    age:number
    sex:string
    constructor(name:string,age:number,sex:string){
        this.age=age
        this.name=name
        this.sex=sex
    }
    Disp():void{
        console.log('我的信息：'+this.age,this.name,this.sex);
    }
}
let iaperson=new Iaperson('微微', 17,'woman')
iaperson.Disp()    ////输出：我的信息：17 微微 woman




