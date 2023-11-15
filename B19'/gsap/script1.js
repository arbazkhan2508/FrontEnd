document.querySelectorAll("img")
.forEach(function(elum){
   gsap.from(elum,{
      scrollTrigger:{
         trigger:elum,
         start:"top 60%",
         markers:true
      },
      y:100,
      opacity:0,
      ease:Expo.easeInout,
      duration:1
   })
})
// gsap.from("#a",{
//     // scrollTrigger:{
//     //    trigger:"#a",
//     //    start:"bottom 10%",
//     //    markers: true
//     // },
//     x:300,
//     duration:2,
//     ease:Expo.easeInout,
//     opacity:0
// })
    
// gsap.from("#b",{
//     scrollTrigger:{
//        trigger:"#b",
//        start:"top 30%"
//     //    markers: true
//     },
//     x:300,
//     duration:2,
//     ease:Expo.easeInout,
//     opacity:0
// })
    

// gsap.from("#c",{
//     scrollTrigger:{
//        trigger:"#c",
//        start:"top 30%",
//     //    markers: truekjhgfxzzzzzzzzzzzzzzz
//     },
//     x:300,
//     duration:2,
//     ease:Expo.easeInout,
//     opacity:0
// })
    

// document.querySelectorAll("img")
// .forEach(function(elum){
//     gsap.from(elum,{
//     scrollTrigger:{
//        trigger:elum,
//        start:"top 30%",
//        markers: true
//     },
//     x:300,
//     duration:2,
//     ease:Expo.easeInout,
//     opacity:0
//  })

// })

// document.querySelectorAll("img")
// .forEach(function(elum){
//     gsap.from(elum,{
//       scrollTrigger:{
//          trigger:elum,
//          start:"top 60%"
//       },
//       y:500,
//       ease:Expo.easeInout,
//       duration:2,
//       opacity:0
//     }) 
//    })
// document.querySelectorAll("img")
// .forEach(function(elum){
//    gsap.from(elum,{
//       scrollTrigger:{
//          trigger:elum,
//          start:"top 80%"
//          // markers:true
//       },
//       x:-500,
//       ease:Expo.easeInout,
//       duration:2,
//       opacity:0
//    })
// })
