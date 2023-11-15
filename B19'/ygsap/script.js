var tl=gsap.timeline({
    repeat:-1
});
tl
.to(".imgc",{
    width:"100%",
    ease:Expo.easeInout,
    duration:2,
    stagger:2,
},'a')
.to(".text h1",{
    ease:Expo.easeInout,
    stagger:2,
    top:0
},'a')
.to(".text h1",{
    delay:2,
    ease:Expo.easeInout,
    stagger:2,
    top:"-100%"
},'a')