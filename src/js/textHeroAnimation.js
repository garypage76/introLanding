const textHeroAnimation = () => {

    var tl = gsap.timeline({ defaults: { duration: 1, opacity: 0 } });

    tl.from(".animDropText", { y: -40, stagger: 0.25 })

}

export default textHeroAnimation;