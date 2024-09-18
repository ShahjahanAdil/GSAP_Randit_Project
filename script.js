document.addEventListener("DOMContentLoaded", function () {

    gsap.from(".cursor", {
        duration: 0.5,
        scale: 0,
        opacity: 0,
    });

    const coverSpanH1 = document.querySelectorAll(".cover-h1-span h1");

    coverSpanH1.forEach(h1 => {
        h1.addEventListener("mouseenter", () => {
            gsap.to(".cursor", {
                duration: 0.5,
                scale: 1.8,
                opacity: 0.5,
                backgroundColor: "black",
            });
        });

        h1.addEventListener("mouseleave", () => {
            gsap.to(".cursor", {
                duration: 0.5,
                scale: 1,
                opacity: 1,
                backgroundColor: "#efefef",
            });
        });
    });

    document.addEventListener("mousemove", (e) => {
        gsap.to(".cursor", {
            duration: 0.5,
            x: e.clientX,
            y: e.clientY,
        });
    });

    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener("scroll", () => {
        let currentScrollTop = document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop) {
            gsap.to(header, {
                duration: 0.8,
                y: '-100%',
            });

        } else {
            gsap.to(header, {
                duration: 0.8,
                y: '0%',
                backgroundColor: '#ee4c',
            });
        }

        if (currentScrollTop <= 50) {
            gsap.to(header, {
                duration: 1,
                y: '0%',
                backgroundColor: 'transparent',
            });
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });

    const tl = gsap.timeline();

    tl.from(".h-left", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
    }, 'a');

    tl.from(".h-right > ul > li", {
        y: -100,
        opacity: 0,
        duration: 0.8,
        delay: -0.3,
        stagger: 0.15,
    });

    tl.from(".cover-h1-span h1", {
        y: 120,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        stagger: 0.3,
    }, 'a');

    tl.from(".cover-circle", {
        x: -150,
        duration: 0.8,
        delay: 0.3,
    });

    tl.from(".cover-circle span", {
        scale: 0,
        opacity: 0,
    });

    gsap.from(".cover-btn", {
        opacity: 0,
        duration: 1,
        delay: 1.5,
    });

    const tl1 = gsap.timeline();

    tl1.from(".move-div", {
        width: "0%",
        delay: 0.3,
        scrollTrigger: {
            trigger: ".move",
            start: "top 60%",
            end: "top 20%",
            scrub: 3,
        },
    });

    tl1.from(".move-div h1", {
        opacity: 0,
        fontSize: "4vw",
        duration: 1,
        scrollTrigger: {
            trigger: ".move-div",
            start: "top 30%",
            end: "top 20%",
            scrub: 3,
        },
    });

    tl1.from(".move-btn", {
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".move-div",
            start: "top 30%",
            end: "top 70%",
            scrub: 3,
        },
    });
});