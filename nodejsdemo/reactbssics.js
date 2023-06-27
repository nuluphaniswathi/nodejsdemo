//spread operator
let arr=[1,2,3,4];
let arr2=[5,6,7,8];
let arr3=[...arr,...arr2]
console.log(arr3);
//rest operator
function rest(name,...remaining)
{
    console.log(name+":"+remaining);
}
rest('swathi','21','female','diwali','6304000523');
//default parameter
function user1(name,age=20)
{
    console.log(name+" "+age);
}
user1('swthi');
//creating class
class cl1{
    constructor(msg)
    {
        this.msg=msg;
    }
    admin()
    {
        console.log(this.msg);
    }
}
var u=new cl1("swathi");
u.admin();
//funtion:
const c=()=>console.log("hello");
c();
const user= (num1)=>{return num1+5;}
var r=user(10);
console.log(r);
/*const s=10;
s=20
console.log(s);csnnot modify const variable so gives error*/

/*{
    let d=10;
}
console.log(d);/*gives error because let is local scope/
/*
//date
var date=new Date();
console.log(date);
//valueof-->provides in milliseconds
console.log(date.valueOf());
//json feature stringify
var da={
    name:"Swathi0",
    age:"21"

}
var json=JSON.stringify(da)
console.log(json);
//array demo
var d=[1,2,3,4,4,5]
console.log(d);
console.log(Array.isArray(d));
console.log(d.lastIndexOf(4));
console.log(d.indexOf(3));
var o=d.map(

    function(element)
    {
        return element=element+1
    }
)
console.log(o)
var kp=d.filter(
    function(ele)
    {
        return ele>2
    }
)
console.log(kp);
var ev=d.some(
    function(ele)
    {
        return ele>2
    }
)
console.log(ev);
//object demo
var da={
    name:'john',
    age:'20'
}
console.log(da);
//functions
function func()
{
    console.log("0");
}
func();
//if else demo
var marks=10;
if(marks>10)
{
    console.log("pass");
}
else if(marks>20)
{
    console.log("excellent");
}
else{
    console.log("Fail");
}
//loops
for(var i=0;i<10;i++)
{
    console.log(i);
}
//while
var i=0;
while(i<=10)
{
    console.log(i);
    i++;
}*/