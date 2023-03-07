gsap.registerPlugin(ScrollTrigger);

gsap.to(".sticky", {
    duration: 0.01,
    backgroundColor: '#fff',

    
    scrollTrigger: {
        trigger: ".navbar",
        start: "bottom 0%",
        scrub: true
    }
})