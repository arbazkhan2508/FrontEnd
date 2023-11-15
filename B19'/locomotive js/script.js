const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// // var tl=gsap.timeline()
// // tl
// gsap.from("img",{
//      scrollTrigger:{
//         trigger:"img",
//         start:"bottom 10%",
//         markers:"true"
//     },
//     y:300,
//     ease:Expo.easeInout,
//     duration:2,
//     opacity:0
// })