const astro = () => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#astro__img__space", {
        scrollTrigger: {
            start: "bottom 200%",
            end: "bottom 0",
            trigger: ".astro",
            scroller: ".smooth-scroll",
            scrub: 1
        },
        y: 150,
    })

    ScrollTrigger.matchMedia({

        "(max-width:991px)": function() {

            ScrollTrigger.defaults({
                trigger: ".astro",
                scroller: ".smooth-scroll",
                scrub: 1
            });

            gsap.to("#astro__img__mountains", {
                scrollTrigger: {
                    start: "center 50%",
                    end: "bottom 0%",
                },
                y: -100,
            })

            gsap.to("#astro__img__planets", {
                scrollTrigger: {
                    start: "center 100%",
                    end: "bottom 0%",
                },
                y: 300,
            })
        }
    });

    ScrollTrigger.matchMedia({

        "(min-width:992px)": function() {

            ScrollTrigger.defaults({
                trigger: ".astro",
                scroller: ".smooth-scroll",
                start: "bottom 100%",
                end: "bottom 0%",
                scrub: 1
            });

            gsap.to("#astro__img__mountains", {
                scrollTrigger: {},
                y: -100,
            })

            gsap.to("#astro__img__planets", {
                scrollTrigger: {},
                y: 150,
            })
        }
    });

}

export default astro;