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

function realPageAnimation(){
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

function teamAminmation(){
    document.querySelectorAll(".listelem").forEach(function(el){
        el.addEventListener("mousemove", function(dets){
            
            gsap.to(this.querySelector(".picture"), {
                opacity: 1,
                x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
                power: 4,
                duration: .5,
            })
        })
        el.addEventListener("mouseleave", function(dets){
            gsap.to(this.querySelector(".picture"), {
                opacity: 0,
                power: 4,
                duration: .5,
            })
        })
     })
}

function textpara(){
    var clutter = "";
document.querySelector(".textpara")
.textContent.split("")
.forEach(function(e){
    clutter += `<span class="opacity-10">${e}</span>`
})
document.querySelector(".textpara").innerHTML = clutter;

gsap.set(".textpara span", {opacity: .1})
gsap.to(".textpara span", {
    scrollTrigger: {
        trigger: ".para",
        start: "top -70%",
        end: "bottom -10%",
        scrub: .2,
        markers: true,
    },
    opacity: 1,
    stagger: .03,
    duration: 2,
    ease: Power4
})
}

homePageAnimation();
realPageAnimation();
teamAminmation();
textpara();