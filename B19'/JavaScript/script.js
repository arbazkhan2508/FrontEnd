//mon 29/08
// // arbaz print hello arbaz
//  var n1=prompt("Enter your Name");
//  console.log("hello,"+n1);

// // nam print karao
// // var ans=prompt("Enter your name");
// // console.log(ans);

// multiplication two number
//  var n1=prompt("Enter number1");
//  var n2=prompt("Enter number2");
//  Number=(n1);
//  Number=(n2);
// console.log(n1*n2);

// // 1nam or a numbr mango pr jo input number do nam ka us number ka char print karao
// // var c=prompt("Enter name");
// // var n=prompt("Enter any number");
// // console.log(c.charAt(Number(n)-1); 

// // 2 nam mango 2nd char same to hello print nhi to hey print karo
// var n1=prompt("Enter name1");
// var n2=prompt("Enter name2");

// if(n1.charAt(2)===n2.charAt(2)){
//     console.log("Hello");
// }
// else{
//     console.log("Heyyy");
// }

// //  user se ek nam mango or uska 1st 3rd or last charcter print karao
//  var ans=prompt("namm?")
//   console.log(ans.charAt(0)+ans.charAt(2)+ans.charAt(ans.length-1));

//wed 31/08
//loops
//forin forof for foreach

//user se teen baar heyy print karao
// for(var i=1;i<6;i++){
//     console.log("hey");
// }
// for(start; end; change){

//}
//1 3 5 7 9
//   for(var i=1;i<10;i+=2)
//   {
//     console.log(i);
//   }
//1 3 7 9 11
//   for(var i=1;i<12;i+=2)
//   {
//     if(i!=5)
//     {
//         console.log(i);
//     }
//   }
//1 3 5 49 9
//   for(var i=1;i<10;i+=2)
//   {
//     if(i===7)
//     {
//         console.log(i*i);
//     }
//     else{
//         console.log(i);
//     }
//   }
//arr=[11 132 43 4111]
// arr=[11,131,23,43];
// for(var i=0;i<4;i++)    
// {
//     console.log(arr[i]);
// }
// var ans=prompt("name");
//     console.log(ans);  
// fri-02/09 
// 1 2 3 5 8 13 21 34 55
    // var first=1;
    // var next=2;
    // console.log(first);
    // console.log(next);
    // for(var i=1;i<8;i++)
    // {
      
    //   var temp=(first+next);
    //    first=next;
    //   next=temp;
    //   console.log(temp);
    // }
// 1)
// 2)
// 3)
  // var i=1;
  // for(i=1;i<10;i++)
  // {
  //   console.log(i+")");
  // }
// function
// 6 type of fnc
// uses of function
// jab bhi koi code ek sath ho or use future me chalana ho to use functionme daldege

// jab koi code bar bar chalra ho to use functionme dal dege to bar bar likhna nhi padega
//function statement
// 1.function somename(){
//    function statements
// }
// function asad(){
//   console.log("arbaz");
// }
// asad();
// asad();
//2. function expression=saved in var
// var n1=function asad(){
  //   console.log("hello asad");
  //  }
  //   n1();
  //   n1();
  //   n1();
  //   n1();
// var defg=function(){
//    console.log("hey");
// }
// defg();

// 3.anonymous function
// computer calls automatically doesnt need to call
    
// newer js=
// fat arrow
// 1.()=>{

// }
// var n1=()=>{
//   console.log("hey");
// }
// n1();
// n1();
// asad();
// 2.fat arrow with one Param
// var n2=()=>{
//       console.log("helllo");
//   }
// n2()
// 3.fat arrow with implicit return
// ()=> 12;
// var div=document.querySelector("#div")
// var btn=document.querySelector("button")
// flag=0;
// btn.addEventListener("click",function(){
//  if(flag===0)
//  {
//   div.style.backgroundColor="red"
//   flag=1;
//  }
//  else{
//   div.style.backgroundColor="transparent"
//   flag=0;
// } 
// })
// var H1=document.querySelector("h1")
// H1.innerHTML="yellow"
// H1.style.backgroundColor="blue"
// H1.addEventListener("dblclick",function(){
//    H1.style.color="black"
// })

// var div=document.querySelector("div")
// var btn=document.querySelector("button")
// flag=0;
// btn.addEventListener("click",function(){
//   if(flag===0)
//   {
//     div.style.backgroundColor="red"
//     flag=1;
//   }
//   else{
//     div.style.backgroundColor="transparent"
//     flag=0;
//   }
// })

//  var H1=document.querySelector("h1")
  
//   H1.style.backgroundColor="purple"
//   H1.addEventListener("click",function(){
//     if(flag===0)
//     {
//       H1.innerHTML="yellow"
//       H1.style.backgroundColor="red"
//       H1.style.color="black"
//       flag=1;
//     }
//     else{
//       H1.innerHTML="hello"
//       H1.style.backgroundColor="yellow"
//       H1.style.color="red"
//       flag=0;
//     }
//      })
//array is a collection of members/elemente.
// var arr=[0,1,2,3,4,5]
// arr.pop()
// arr.pop()
// arr.push(function(){
//   console.log("heyy");
// })
// arr.shift()
// arr.shift()
// arr.unshift(function(){
//   console.log("heyy");
// }
// )
//object is a function or value pair
// var obj={
//   name:"asad",
//   age:20,
//   dob:290602,
//   college:"titr",
// }
// obj.age;

// function asad(){
//   console.log("asad");
//   console.log("asad");
//   console.log("asad");
//   console.log("asad");
//   console.log("asad");
//   console.log("asad");
// }
// asad();
// asad();
// asad();
// asad();
// asad();

// var arr=[1,2,3,4,4,3,5,3,4,2,4,3,4,1,2,3,4,4,3,5,3,4,2,4,3,4,1,2,3,4,4,3,5,3,4,2,4,3,4,1,2,3,4,4,3,5,3,4,2,4,3,4,1,2,3,4,4,3,5,3,4,2,4,3,4,1,2,3,4,4,3,5,3,4,2,4,3,4,1,2,3,4,4,3,5,3,4,2,4,3,4,1,2,3,4,4,3,5,3,4,2,4,3,4,1,2,3,4,4,3,5,3,4,2,4,3,4]
// console.log(arr.length);

// var arr=[1,2,3,4,5,6]
// console.log(arr[arr.length-arr.length+1]);
//  for(i=0;i<10;i++)
//  {
//   if(i!=3)
//   {
//     console.log(i);
//   }
//   else{
//     console.log(NaN);
//   }
//  }

// 1,3,5,49,9
// for(i=1;i<10;i+=2)
// {
//   if(i===7)
//   {
//     console.log(i*i);
//   }
//   else{
//     console.log(i);
//   }
// }

// 1,2,3,5,8,13,21,34,55
// var first=1;
// var next=2;
// console.log(first);
// console.log(next);
// for(i=3;i<10;i++)
// {
//   var temp=first+next
//   first=next;
//   next=temp
//   console.log(temp);
//   // first=
// }
//  for(i=1;i<11;i++)
//  {
//   console.log(i+")");
//  }
// var f= function  asad(a,b) {
//      console.log(a+b);
      
// }
// f(20,20);

// var H1=document.querySelector("h1");
// var btn=document.querySelector("button")
// var flag=0;
// // h1.textContent="heyy";
// // h1.innerHTML="asad"
// btn.addEventListener("click",function(){
//    if(flag===0){
//     H1.innerHTML="asad";
//     H1.style.display="none";
//     flag=1;
//    }
//    else{
//     H1.innerHTML="asad";
//     H1.style.display="block";
//     H1.style.backgroundColor="purple";
//     flag=0;   
//   }
    
// })
document.querySelector("#show").addEventListener("click",function(){
    document.querySelector("#modal").style.opacity= 1;
    document.querySelector("#modal").style.marginTop=0;
     document.querySelector("#modal").style.pointerEvents ="initial";
    document.querySelector("#modal").style.animation=cubic-bezier(0.19, 1, 0.22, 1);
}) 
document.querySelector("#hide").addEventListener("click",function(){
  document.querySelector("#modal").style.opacity= 0;
  document.querySelector("#modal").style.marginTop=80;
   document.querySelector("#modal").style.pointerEvents ="none";
}) 
// var flag=0;
// document.querySelector("button").addEventListener("click",function(){
//     if(flag===0)
//     {
//       document.querySelector("h2").innerHTML="friends";
//       document.querySelector("h2").style.color="green";
//       this.innerHTML="remove";
//       this.style.backgroundColor="green";
//       flag=1;
//     }
//     else{
//       document.querySelector("h2").innerHTML="strangers";
//       document.querySelector("h2").style.color="red";
//       this.innerHTML="add friend"
//       this.style.backgroundColor="red";
//       flag=0;
//     }
 
// })
