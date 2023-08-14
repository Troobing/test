//元组tuple  
let arr3: number[] = [1, 2, 3, 4]
//元组合并了不同类型的对象
//对应位置的类型需要相同
let Tarr: [number, boolean?] = [123, true]
//问号(?)表示该成员是可选的
//添加内容时，需要是number或boolean类型
Tarr.push(456)
Tarr.push(false)
//Tarr.push('456') 报错


var hh = []
hh[0] = 111
hh[1] = 222
console.log(hh[1]);


var m: [number, string] = [10, '1'];
m.push(14);
m.push('4');
//console.log(m[2]);   报错
//解决方法1：
var mm = [10, '1'];
mm.push(14);
mm.push('4');
console.log(mm[2]);
//解决方法2：
var mmm: (number | string)[] = [10, '1']
mm.push(14);
mm.push('4');
console.log(mm[2]);


//push()向元组中添加元素（添加在最后面）；pop()向元组中移除元素（最后一个）
var kkk = [10, '20']
kkk.push(30)
kkk.push('40')
kkk.pop()
console.log(kkk[2]);  //结果：30
console.log(kkk[3]);  //结果：undefined(因为是最后一个已经被删了)


//元组更新
var lll: [number, string] = [10, '20']
console.log(lll[0]);
lll[0] = 30
console.log(lll[0]);   //结果： 10，30


//解构元组（可把远足元素赋值给变量）
var vv = [10, '20']
var vv1 = vv[0], vv2 = vv[1]
console.log(vv1, vv2);
//也可
var bb0 = [10, '20']
var [bb1, bb2] = bb0
console.log(bb1);
console.log(bb2);