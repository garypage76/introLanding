const hello = () => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        trigger: ".hello",
        scroller: ".smooth-scroll",
        start: "top center",
        end: "top 0",
        scrub: 1,
        // markers: true
    });

    gsap.to('.hello__text h2', {
        scrollTrigger: {},
        opacity: 1,
        y: 0
    });

    gsap.to('.hello__img', {
        scrollTrigger: {},
        start: "top 100%",
        end: "top center",
        opacity: 1,
        rotation: 45
            // markers: true
    });

    gsap.to('.hello__form', {
        scrollTrigger: {},
        opacity: 1,
        y: 0
    });

}

export default hello;