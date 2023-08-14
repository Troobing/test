// const hh:string='hello world'
// console.log(hh);

/*lskdjfadsklfj        
sdfadsfasf
adsfsadfsdf*/
//多行注释  /*   */

// class aaa{
//     name():void{
//         console.log('dsfa');
//     }
// }
// var aaaa=new aaa();
// aaaa.name();

/*声明变量    eg.  var 变量名 ：类型 = 值
                   var uname ：string = ‘Bob’  */

// let uname:string='bob';
// let score1:number=10;
// let score2:number=20;
// let sum=score1 + score2;
// console.log('名字：'+uname);
// console.log('第一科目成绩：'+score1);
// console.log('第二科目成绩：'+score2);
// console.log('总成绩：'+sum);

// let some:any='123456';
// let somee:number=(<string>some).length;
// console.log(somee);

// var numm1:number=10;
// var numm2:number=2;
// var numm3:number=0;
// numm3 = numm1+numm2
// console.log(numm3);
// numm3=numm1-numm2
// console.log(numm3);
// numm3=numm1 * numm2
// console.log(numm3);
// numm3=numm1 / numm2
// console.log(numm3);
// numm3++
// console.log(numm3);
// numm3--
// console.log(numm3);

// var nn1:number=5;
// var nn2:number=8;
// console.log('nn1='+nn1);
// console.log('nn2='+nn2);
// var nn3=nn1<nn2
// console.log('nn1<nn2:'+nn3);
// nn3=nn1>nn2
// console.log('nn1>nn2:'+nn3);
// nn3=nn1!=nn2
// console.log('nn1!=nn2:'+nn3);
// nn3=nn1==nn2
// console.log('nn1==nn2:'+nn3);
// nn3=nn1<=nn2
// console.log('nn1<=nn2:'+nn3);
// nn3=nn1>=nn2
// console.log('nn1>=nn2:'+nn3);


// var o1:number = 20; 
// var o2:number = 90; 
// console.log("avg 值为: "+o1 , "percentage 值为: "+o2);   
// var res=((o1>10)&&(o2<100))
// console.log(res);
// var res=((o1>30)||(o2<100))
// console.log(res);
// var res=!(o1==o2)
// console.log(res);

// var xx:number=10
// var yy:number=5
// xx=yy
// console.log(xx);
// xx+=yy
// console.log(xx);
// xx-=yy
// console.log(xx);
// xx*=yy
// console.log(xx);
// xx/=yy
// console.log(xx);

// var hh:string='a1'+'.a2'
// console.log(hh)

// var qq:number=-5
// if (qq>0){
//     console.log('yes');   
// }  console.log('no');

// const ww:number=7
// if (ww>0){
//     console.log('>0');

// }else{
//     console.log('<0');   
// }

// const rr:number=8
// if (rr>10){
//     console.log('>10');

// }else if(rr>9){
//     console.log('>9');

// }else if(rr<0){
//     console.log('<0');

// }else{
//     console.log("yes");

// }

// var grade: string = "B";
// switch (grade) {
//     case "A": {
//         console.log("优");
//         break;
//     }
//     case "B": {
//         console.log("良");
//         break;
//     }
//     case "C": {
//         console.log("及格");
//         break;
//     }
//     case "D": {
//         console.log("不及格");
//         break;
//     }
//     default: {
//         console.log("非法输入");
//         break;
//     }
// }

// var tt: boolean = false;
// switch(tt) {
//     case true:{
//         console.log(false);
//         break;
//     }
//     case false:{
//         console.log(true);
//         break;
//     }
//     default :{
//         console.log(true ,false);      
//     } 
// }


// var num: number = 5;
// var i: number;
// var factorial = 1;

// for (i = num; i >= 1; i--) {
//     factorial *= i;
// }
// console.log(factorial)

// let yy:any={
//     name:'gg',
//     age:2
// }
// let uu:string
// for (uu in yy){
//     console.log(yy[uu]);

// }

// let person8 = {
//     name: "John",
//     age: 30
//   };

//   for (let key in person) {
//     console.log(key); 
//   }



// let person9 = {
//     name: "John",
//     age: 30
//   };

//   for (let key in person9) {
//     console.log(key); 
//   }


// let uu:any=99
// let ii
// for(ii in uu){
//   console.log(uu(ii));

// }

// const oo=[1,2,3]
// for(let pp of oo){
//   console.log(pp)
// }

// 

// let ss=[1,2,33,45];
// let dd=ss.every(ss=>ss>=5);
// console.log(dd);

// let arr7 = [1, 2, 3]; 

// arr7.forEach(function(value) {
//   console.log(value); 
// });

// let gg=[1,2,3,4]
// gg.forEach(function(jj){
//   console.log(jj);

// })
// let gg=[1,2,3]
// let jj=gg.every(gg=>gg>=2)
// console.log(jj);

// let gg=[2,4,6,8]
// let jj=gg.some(gg=>gg>=5)
// console.log(jj);

// let gg=6
// let jj=1
// while (gg>1){
//   jj*=gg
//   gg--
// }
// console.log(jj);

// var gg:number=5
// var jj:number=1
// do{
//   jj*=gg
//   gg--
// }while (gg>0);
// console.log(jj);
// var gg: number = 5
// while (gg > 0) {
//   if (gg < 2 ) {
//     console.log(gg);
//     break
//   }gg--
// } 

// var num:number = 0
// var count:number = 0;

// for(num=0;num<=20;num++) {
//     if (num % 2==0) {
//         continue
//     }
//     count++
// }
// console.log ("0 ~20 之间的奇数个数为: "+count)


// for(let gg=8;gg>=0;gg--){
//   if (gg % 2 != 0){
//     continue
//   }
//   console.log(gg);
// }

// let jj: number = 8
// while (jj >= 0) {
//   if (jj % 2 == 0) {
//     console.log(jj);
//   }
//   jj--
// }

// let gg=10
// do{console.log(gg);

// }while(gg=10)

// // 函数定义
// function greet():string { // 返回一个字符串
//     return "Hello World" 
// } 

// function caller() { 
//     var msg = greet() // 调用 greet() 函数 
//     console.log(msg) 
// } 

// // 调用函数
// caller()

// function gg(a?:number,b?:number,c:number=4):number{
//     if (a>0 && b<0){
//         return a+c
//     }else if(a<0 && b>0){
//         return b+c
//     }else if(a>0 && b>0){
//         return a+b+c
//     }else{
//         return c
//     }
// }
// console.log(gg(5,-3,9));

// function jj(a:number,...b:number[]){
//     return a +''+ b
// }
// console.log(jj(1,2,3,4,5));
// function addNumbers(...nums:number[]) {  
//     var i;   
//     var sum:number = 0; 

//     for(i = 0;i<nums.length;i++) { 
//        sum = sum + nums[i]; 
//     } 
//     console.log("和为：",sum) 
//  } 
//  addNumbers(1,2,3) 

// (function() {
//     var x = 'ff';
//     console.log(x);

// }) ()

// var res=new Function('a','b','return a*b')
// var kk=res(3,4);
// console.log(kk);

// function ll(number){
//     if(number<=0){
//         return 1
//     }else{
//         return(number*ll(number-1))
//     }
// }
// console.log(ll(5));

// var aa=(a:number)=>a+10
// console.log(aa(100))

// var aa = (x) => {
//     if (typeof x == 'string') {
//         console.log(x + ':string');
//     } else if (typeof x == 'number') {
//         console.log(x + ":number");
//     }
// }
// aa('Tom');
// aa(10)

// let aa=a=>'输入:'+a
// console.log(aa(19))


// var disp =()=> { 
//     console.log("Function invoked"); 
// } 
// disp();

// var aa=()=>{
//     console.log('111')
// }
// aa();        //结果：111


// var aa: number[] = Array(4)
// var bb = aa.length

// for (var i = 0; i <= bb; i++) {

//     aa[i] = i * 2

//     console.log(aa[i]);

// }

// var arr_names: number[] = new Array(4)
// for (var i = 0; i < arr_names.length; i++) {
//     arr_names[i] = i * 2
//     console.log(arr_names[i])
// }

// var kk:number[]=Array(3)
// kk[0]=0
// console.log(kk.length);
// kk[1]=1
// console.log(kk.length);
// kk[2]=2
// console.log(kk.length);
// kk[3]=3
// console.log(kk.length);
// kk[4]=4
// console.log(kk.length);

// var kk:any
// var ll:number[]=[10,11,12,13]
// for(kk in ll){
//     console.log(ll[kk]);
// }

// var zz:number[][][]=[[[1,2,3],[4,5,6],[7,8,9]],[[10,11,12],[13,14]],[[15,16],[17,18]]]
// console.log(zz[1][1][0]);


// var sites:string[] = new Array("Google","Runoob","Taobao","Facebook") 

// function disp(sites:string[]) {
//         for(var i = 0;i<sites.length;i++) { 
//                 console.log(sites[i]) 
//         }  
// }  
// disp(sites);


// function disp1():string[] { 
//     return new Array("Google", "Runoob", "Taobao", "Facebook");
// } 

// var sites:string[] = disp1() 
// for(var i in sites) { 
//     console.log(sites[i]) 
// }

// var xx:number[]=[10,20]
// let xx1=xx[0],xx2=xx[1]
// //let xx2=xx[1]
// console.log(xx1);
// console.log(xx2);

// let cc:number[]=[10,20]
// let [x0,y0]=cc
// console.log(x0);
// console.log(y0);


// let nameSiteMapping = new Map();
// nameSiteMapping.set("Google", 1);
// nameSiteMapping.set("Runoob", 2);
// nameSiteMapping.set("Taobao", 3);
// for (let entry of nameSiteMapping.entries()) {
//     console.log(entry[0], entry[1]);
// }


// let mmap=new Map();
// mmap.set('11',1);
// mmap.set('22',2);
// mmap.set('33',3);

// mmap.clear();
// console.log(mmap);

// let mmmap=new Map
// mmmap.set('11',1)
// mmmap.set('22',2)
// mmmap.set('33',3)
// for(let kk of mmmap.keys()){
//     console.log(kk);
// }
// for(let value of mmmap.values()){
//     console.log(value);
// }
// for(let entry of mmmap.entries()){
//     console.log(entry[0],entry[1]);  
// }
// for(let [key,value] of mmmap){
//     console.log(key,value);
// }

// var hh=[]
// hh[0]=111
// hh[1]=222
// console.log(hh[1]);

// var mmm:[number,string]=[10,'1'];
// mmm.push(14);
// mmm.push('4');
// console.log(mmm[2]);

// var kkk=[10,'20']
// kkk.push(30)
// kkk.push('40')
// kkk.pop()
// console.log(kkk[var lll:[number,string]=[10,'20']
// var lll:[number,string]=[10,'20']
// lll[0]=30
// console.log(lll[0]);

// var lll:[number,string]=[10,'20']
// console.log(lll[0]);
// lll[0]=30
// console.log(lll[0]);

// var vv=[10,'20']
// var vv1=vv[0],vv2=vv[1]
// console.log(vv1,vv2);

// var bb0=[10,'20']
// var [bb1,bb2]=bb0
// console.log(bb1);
// console.log(bb2);

// var aaaa:()=>{
//     console.log('111')
// }
// aaaa();

// interface ren{
//     name:string
//     xing:string | string[] | (()=>string)
// }
// let ren1:ren={name:'1',xing:'100'}
// console.log(ren1);
// let ren2:ren={name:'2',xing:['200']}
// console.log(ren2);
// let ren3:ren={name:'3',xing:()=>'300'}
// let rrr:any=ren3.xing
// console.log(rrr());

// interface hao{
//     [hao1:number]:string
// }

// interface hao{
//     [yes:number]:string
// }
// let hao1:hao=['1','2']
// console.log(hao1[1]);


/*
// for (let i = 0; i >=0 ; i++) {
//     var num: (any)[] = []
//     class Person0 {
//         name: string;
//         age: number;
//         constructor(name: string, age: number) {
//             this.name = name
//             this.age = age
//         }
//         xxx() {
//             console.log('用户:' + num[i].name);
//         }
//     }
//     let person1 = new Person0('张三', 48)
//     num.push(person1);
//     let person2 = new Person0('李四', 38)
//     num.push(person2);
    
    
//     num[i].xxx()
//     console.log(num[i].age);

// }
*/

// class CCar{
//     engine:string
//     constructor(engine:string){
//         this.engine=engine
//     }
//     xxx():void{
//         console.log('函数中型号：'+ this.engine);

//     }
// }
// var car=new CCar('XXXYYY')
// car.xxx()
// console.log('读取型号:'+car.engine);

// class Shape{
//     area:number
//     constructor(a:number){
//         this.area=a
//     }
// }

// class Circle extends Shape{
//     hhh(){
//         console.log('圆的面积：'+ this.area);

//     }
// }
// var circle=new Circle(80)
// circle.hhh()

// class N1{
//     size:string
//     constructor(size:string){
//         this.size=size
//     }
// }
// class N2 extends N1{
//     wide:string
//     constructor(size:string,wide:string){
//         super(size)
//         this.wide=wide
//     }
// }
// class N3 extends N2{
//     disp():void{
//         console.log('wide: '+this.wide);

//     }
// }
// var xxxx=new N3('super','normal')
// console.log('size: '+xxxx.size);
// xxxx.disp()

// class II { }
// var III = new II()
// var iii = III instanceof II
// console.log(iii);

// interface IIII{
//     name:string
//     age:number
//     wide?:string
// }
// var iiii:IIII={
//     name:'ljfdjllkfd',
//     age:13,
// } 
// console.log(iiii.name);

// interface OOOO {
//     name: string
// }
// class oooo implements OOOO {
//     name: string
//     age:number
//     constructor(name: string,age:number){
//         this.name=name
//         this.age=age
//     }
// }
// var ooo=new oooo('lisi',18)
// console.log(ooo.age);

// interface IPoint {
//     x: number
//     y: number
// }
// function addPoints(p1: IPoint, p2: IPoint): IPoint {
//     var x = p1.x + p2.x
//     var y = p1.y + p2.y
//     return { x: x, y: y }
// }
// var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 })

// ///<reference path = 'hw.ts' />
// namespace ppp {
//     var woman1 = new haohaohao(18, 'big')
//     console.log(woman1.age);
// }

// import yyy=require('./ww')
// class zzz implements yyy.xxx{
//     name(){
//         console.log('');

//     }

// }



// const vs=new String('hello')
// console.log(typeof vs);
// console.log(vs.charAt(1));

// let fo:number[]=[1,2,3,4]
// let foo=fo[5]
// console.log(foo);


// let some4: any = 123456;
// let somee4: number = (<string>some4).length;
// console.log(somee4);



// var bbb: number = 10
// switch (bbb) {
//     case 20: {
//         console.log(false);
//         break
//     }
//     case 10: {
//         console.log(true);
//         break
//     }
//     default: {
//         console.log(10);

//     }
// }    //结果  true


// let nnnn:number=10
// let mmmm:number=20
// nnnn *= mmmm
// console.log(nnnn);



// interface Ianame {
//     name: string
//     sex: string
//     age: number
//     wide?: string
// }
// let ianame: Ianame = {
//     name: 'lisi',
//     sex: 'man',
//     age:17
// }
// console.log(ianame);


// class Iaperson {
//     name:string
//     age:number
//     sex:string
//     constructor(name:string,age:number,sex:string){
//         this.age=age
//         this.name=name
//         this.sex=sex
//     }
//     Disp():void{
//         console.log('我的信息：'+this.age,this.name,this.sex);
//     }
// }
// let iaperson=new Iaperson('微微', 17,'woman')
// iaperson.Disp()    ////输出：我的信息：17 微微 woman

// class t1 {
//     name: string
// }

// class t2 {
//     age: number
// }

// class t3{
//     sex:string
// }

// class t4 extends t1{}

// interface t4 extends t2{}

// interface t4 extends t3{
// }

// let t5 =new t4('lisi',17,'man')



















































































































































































































































































