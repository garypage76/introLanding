const rollingText = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.mission__roller svg', {
        scrollTrigger: {
            // markers: true,
            trigger: ".mission",
            scroller: ".smooth-scroll",
            start: "0 100%",
            end: "bottom 0",
            scrub: true
        },
        x: -900,
    });

}

export default rollingText;