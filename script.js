let btns = document.querySelectorAll('.btnbox')
btns.forEach((btn) => {
    let blackbox = btn.querySelector('.blackbox')
    let txt = btn.querySelectorAll('.btn h4')
    btn.addEventListener('mouseenter', function (dets) {
        gsap.to(blackbox, {
            top: 0,
            duration: 0.5,
            borderRadius: '0%'
        })
        gsap.to(txt, {
            transform: 'translateY(-100%)',
            duration: 0.3,
            color: '#f8f8f8'
        })
    })
    btn.addEventListener('mouseleave', function (dets) {
        gsap.to(blackbox, {
            top: '100%',
            borderRadius: '90%'
        })
        gsap.to(txt, {
            transform: 'translateY(0%)',
            duration: 0.3,
            color: "#161616"
        })
    })   
})

window.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
        x: dets.clientX,
        y: dets.clientY
    })
}
)

gsap.from('.imgcircle img', {
    y: '100%',
    duration: 1
})

let tl = gsap.timeline()
tl.from(".about h1", {
    transform: 'translateY(30%)',
    opacity: 0,
    scrollTrigger: {
        trigger: '.about h1',
        scroller: 'body',
        // markers: true,
        start: 'top 70%',
        end: 'top 50%',
        scrub: true
    }
})
    .from('.about .line', {
        transform: 'translateY(30%)',
        opacity: 0,
        scrollTrigger: {
            trigger: '.about .line',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true
        }
})
    .from('.about p', {
        transform: 'translateY(30%)',
        opacity: 0,
        scrollTrigger: {
            trigger: '.about p',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true
        }
})
    .from('.aboutbtn', {
        transform: 'translateY(30%)',
        opacity: 0,
        scrollTrigger: {
            trigger: '.aboutbtn',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true
        }
})
    .from('.skills h1', {
        transform: 'translateY(30%)',
        opacity: 0,
        scrollTrigger: {
            trigger: '.skills h1',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true
        }
    })
    .from('.skills .line', {
        transform: 'translateY(30%)',
        opacity: 0,
        scrollTrigger: {
            trigger: '.skills .line',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true
        }
    })
    .from('.skillimg', {
        transform: 'translateY(30%)',
        opacity: 0,
        scrollTrigger: {
            trigger: '.skillimg',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true
        }
    })
    .from('.projects h1', {
        transform: 'translateY(30%)',
        opacity: 0,
        scrollTrigger: {
            trigger: '.projects h1',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true
        }
    })
    .from('.projects .line', {
        transform: 'translateY(30%)',
        opacity: 0,
        scrollTrigger: {
            trigger: '.projects .line',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true
        }
    })
    .from('.projectimg', {
        transform: 'translateX(-30%)',
        opacity: 0,
        stagger: 0.5,
        scrollTrigger: {
            trigger: '.projectimg',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true
        }
    })
   gsap.from('.projectdesc', {
        transform: 'translateX(30%)',
        opacity: 0,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '.projectdesc',
            scroller: 'body',
            // markers: true,
            start: 'top 70%',
            end: 'top 50%',
            scrub: true
        }
    })