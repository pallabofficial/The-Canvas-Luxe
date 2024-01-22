

const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
});

let animation = gsap.timeline();

animation
    .to("#main",{
        
        y:"100vh",
        duration:0,
        scale:0.5,
        
    })
    .to("#main",{
        
        y:"-30vh",
        duration:2,
        delay:1,
        
    })
    .to("#main",{
        y:"0vh",
        
        rotate:360,
        scale:1,
        duration:1,
        
    })

    