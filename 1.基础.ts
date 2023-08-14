//First
(() => {
    function sayHi(str: String) {
        return '你好' + str
    }
    sayHi('123')
    let a: Number = 30
    console.log(a)
})()




/*lskdjfadsklfj        
sdfadsfasf
adsfsadfsdf*/
//多行注释  /*   */




//常量 const
//变量 var(全局) let（局部）
//console.log(...) 打印




//类型别名
type s = string   //通过type 给类型起别名
let str3: s = '123'
//str=123  报错
//常用于给联合类型起别名
type all = string | number | boolean
let q1: all = 123
q1 = ''
let q2: all = true
//q2 = [123]   报错

//用来约束取值只能是几个字符串中的一个
//张三，张三丰，张大炮
type stringType = '张三' | '张三丰' | '张大炮'
let names: stringType = '张三'




//命名空间，用namespace定义
//eg：
namespace xxx {
    export interface hhh { }
    export class jjj { }
}
//以上定义了一个命名空间xxx，若想再外部可以调用xxx的类或接口，则要在类或接口前添加export关键词
//若一个命名空间在一个单独的ts文件中，则应使用///引用，格式：
/// <reference path = '文件名'/>

namespace ppp {
    export class haohaohao {
        age: number
        size: string
        constructor(age: number, size: string) {
            this.age = age
            this.size = size
        }
    }
}
//另一文件中：
///<reference path = 'hw.ts' />
namespace ppp {
    var woman1 = new haohaohao(18, 'big')
    console.log(woman1.age);
}












