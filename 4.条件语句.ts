//if语句
var qq: number = -5
if (qq > 0) {
    console.log('yes');
}
console.log('no');   //结果：no
//如果布尔表达式（qq>0）为true则执行if语句内的代码块，如果fulse，则if语句结束后的第一组代码(闭括号外)将被执行


//if...else语句
const ww: number = 7
if (ww > 0) {
    console.log('>0');

} else {
    console.log('<0');
}     //结果：>0
//如果布尔表达式（ww>0）为true则执行if内的代码，如果false则执行else内的代码


//if...else if...else语句
const rr: number = 8
if (rr > 10) {
    console.log('>10');
} else if (rr > 9) {
    console.log('>9');
} else if (rr < 0) {
    console.log('<0');
} else {
    console.log("yes");
}   //结果：yes
//else之前依次判断，若布尔表达式为true则打印其后括号内代码，
//若else之前全部布尔表达式都为false，则执行else后括号内的代码


//switch…case 语句
let tt:boolean = false;

switch (tt) {
    case true as boolean :{
        console.log(false);
        break;
    }

    case false as boolean: {
        console.log(true);
        break;
    }

    default: {
        console.log(true, false);
    }
}   //结果：true
//当测试的变量等于case中的常量时，case后跟的语句将被执行，直到遇到break为止；
//在switch语句结尾可有default，当变量与case的所有值都不匹配时执行，此中break不必需
//eg:
var bbb: number = 10
switch (bbb) {
    case 20: {
        console.log(false);
        break
    }
    case 10: {
        console.log(true);
        break
    }
    default: {
        console.log(10);

    }
}    //结果  true
