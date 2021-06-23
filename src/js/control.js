const control = () => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        trigger: ".control",
        scroller: ".smooth-scroll",
        start: "top center",
        end: "top 0",
        scrub: 1
            // markers: true
    });

    gsap.to('.control__text p', {
        scrollTrigger: {},
        opacity: 1,
        y: 0
    });

    gsap.to('.control__list li', {
        scrollTrigger: {},
        opacity: 1,
        y: 0
    });

}

export default control;