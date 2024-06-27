function homePageAnimation(){
    gsap.set(".slidesm", {scale: 5})
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home",
            start:"top top",
            end: "bottom top",
            // markers: true,
            pin: true,
            scrub: 4,
        }
    })
    // videoclip
    tl.to(".vdodiv", {
        '--clip': "0%",
        ease: Power2,
    },'a')
    .to(".slidesm", {
        scale: 1,
        ease: Power2, 
    },'a')
    .to(".lft", {
        xPercent: -10,
        stagger: .03,
        ease: Power4, 
    }, 'b')
    .to(".rgt", {
        xPercent: -10,
        stagger: .03,
        ease: Power4, 
    }, 'b')
}

function realpageanimation(){
    gsap.to(".slide", {
        scrollTrigger: {
            trigger: ".real",
            start: "top top",
            end: "bottom bottom",
            // markers: true,
            scrub: 1,
        },
        xPercent: -200,
        ease: Power4
    })
}

homePageAnimation();
realpageanimation();


 