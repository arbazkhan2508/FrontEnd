// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
//  });
 gsap.from("#a",{
        scrollTrigger:{
           trigger:"#a",
           start:"bottom 10%",
           markers: true
        },
        x:300,
        duration:2,
        ease:Expo.easeInout,
        opacity:0
    })
        