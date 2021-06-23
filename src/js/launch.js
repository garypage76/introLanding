const launch = () => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
        trigger: ".launch__img",
        scroller: ".smooth-scroll",
        start: "top 200",
        end: "bottom 0",
        scrub: 1
    });

    gsap.to('#launch__img__rocket', {
        scrollTrigger: {},
        y: -600,
    });

    gsap.to('#launch__img__smoke__purple', {
        scrollTrigger: {},
        scale: 4,
        y: 250,
    });

    gsap.to('#launch__img__smoke__rocket', {
        scrollTrigger: {},
        scale: 3.5,
        y: 250,
    });

    gsap.to('#launch__img__laptop', {
        scrollTrigger: {
            end: "bottom center"
        },
        ease: "power2",
        y: 100
    });

    gsap.to('#launch__img__broken', {
        scrollTrigger: {
            end: "bottom center"
        },
        y: 100,
        opacity: 1,
        ease: "power2"
    });

    gsap.to('#launch__img__space', {
        scrollTrigger: {
            start: "top 100%",
        },
        y: -150
    });

    gsap.to('.fadeIn', {
        scrollTrigger: {
            trigger: ".launch__text",
            start: "top center",
            end: "top 0",
            scrub: 1
        },
        opacity: 1,
        y: 0
    });

}

export default launch;