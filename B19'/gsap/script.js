// gsap.from(".a",{
//    y:20,
//    opacity:0,
//    stagger:.2,
//    duration:2,
//    ease:Expo.easeInout
// })
// tl
// gsap.Timelime 
// gsap.from("#bone p",{
//     width:"0",
//      ease:Expo.easeInout,
//      y:20
// })
var tl=gsap.timeline()
tl
tl.from("#img img",{
    y:20,
    width:0,
    duration:1,
    ease:Expo.Inout,
})
tl.from("#nav",{
    ease:Expo.easeInout,
    duration:3,
    opacity:0
})
// .from("#bottom",{
//     y:20,
//     ease:Expo.easeInout,
//     duration:2
// })
// .from("#bone",{
//     y:20,
//     width:"0",
//     ease:Expo.easeInout,
//     duration:2,
//     opacity:0
// })
tl.from("#bone p",{
    opacity:0,
    ease:Expo.easeInout,
    duration:1
})
tl.from("button",{
    opacity:0,
    ease:Expo.easeInout,
    duration:1
})
// .from("#btwo",{
//     y:20,
//     width:"100",
//     ease:Expo.easeInout,
//     duration:2,
//     opacity:0
// })
tl.from(".row",{
    opacity:0,
    ease:Expo.easeInout,
    duration:1
})
.from("#one p",{
    y:20,
    width:0,
    duration:1,
    ease:Expo.easeInout,
    opacity:0
})
tl.from(".a",{
    y:20,
    stagger:.1,
    duration:1,
    ease:Expo.easeInout,
    opacity:0
})
tl.from("#icon",{
    opacity:0,
    duration:1,
    ease:Expo.easeInout
})


