//一. for循环
var num: number = 5;
var i: number;
var factorial = 1;

for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial)   //结果为120
//先执行i=num，如果i>=1,则执行factorial *= i，再执行i--，直到i<0,结束循环


//二. for...in循环 （适合遍历对象）
let person9 = {
    name: "John",
    age: 30
  };
  
  for (let key in person9) {
    console.log(key); 
  }  //结果：name   age

  
//三. for...of循环 （可遍历数组，字符串，map和set集合，arguments，DOM Nodelist等）
const oo=[1,2,3]
for(let pp of oo){
    console.log(pp)
}     //结果1，2，3
 
//foreach循环
let ar = [1, 2, 3]; 

ar.forEach(function(value) {
  console.log(value); 
});    //结果 1  2  3

//every循环
let ss=[1,2,33,45];
let dd=ss.every(ss=>ss>=5);
console.log(dd);  //结果  false
//用于判断数组中的所有元素是否都满足指定条件，
//如果所有元素都满足测试条件就返回 true,否则返回 false。

//some循环
//与every循环结构相似
//差别在于只要有元素满足指定条件就返回true


//四. while循环
let gg0=6
let jj0=1
while (gg0>1){
  jj0*=gg0
  gg0--
}
console.log(jj0);   //结果为720


//五. do...while循环
var gg1:number=5
var jj1:number=1
do{
  jj1*=gg1
  gg1--
}while (gg1>0);
console.log(jj1);    //结果 120
var gg1 = 10;
do {
    console.log(gg1);
    gg1--;
} while (gg1 >= 0);  //结果是从10到0的排列
//while后条件如果true，则返回do重新执行循环，若false则终止


//六. break语句
//break会停止执行嵌套循环最内层的循环，然后执行该块后的下一行代码
var gg2 = 5;
while (gg2 > 0) {
    if (gg2 < 2) {
        console.log(gg2);
        break;
    }
    gg2--;
}


//七. continue语句
for(let gg=8;gg>=0;gg--){
  if (gg % 2 != 0){
    continue
  }
  console.log(gg);
}
//continue 会跳过当前循环中的代码，强迫开始下一次循环。

//八. 无限循环
//eg.
let gg4 = 10;
do {
    console.log(gg4);
} while (gg4 = 10);