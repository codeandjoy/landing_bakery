gsap.from('.hero-content-logo', {
    opacity: .2,
    y: -10,
    duration: 1
});

gsap.from(['.hero-content-banner', '.hero-content-container p'], {
    opacity: .2,
    duration: 1
});

gsap.from('.hero-content-container button', {
    scale: 1.2
});



['.about-title-container', '.menu-title-container'].forEach(crown => {
    gsap.from(crown, {
        scrollTrigger: {
            trigger: crown,
            start: 'top 80%',
            end: 'bottom, 50%',
        },
        y: -20,
        opacity: 0,
    });
});

['.about-title-container span', '.menu-title-container span'].forEach(titleSpan => {
    gsap.from(titleSpan, {
        scrollTrigger: {
            trigger: titleSpan,
            start: 'top 80%',
            end: 'bottom, 50%',
        },
        opacity: 0,
    });
})



const aboutContenth3s = gsap.utils.toArray('.about-content-block h3');
aboutContenth3s.forEach(h3 => {
    gsap.from(h3, {
        scrollTrigger: {
            trigger: h3,
            start: 'top 90%',
            end: 'bottom, 80%',
        },
        y: -20,
        opacity: 0
    });
});

const aboutContenthps = gsap.utils.toArray('.about-content-block p');
aboutContenthps.forEach(p => {
    gsap.from(p, {
        scrollTrigger: {
            trigger: p,
            start: 'top 90%',
            end: 'bottom, 80%',
        },
        opacity: 0
    });
});



['.experience-img-container .img-title-text', '.accessible-img-container .img-title-text']
.forEach(titleText => {
    gsap.from(titleText, {
        scrollTrigger: {
            trigger: titleText,
            start: 'top 80%',
            end: 'bottom, 50%'
        },
        opacity: 0
    });
});

gsap.from(['.experience-text-art', '.experience-content-container h3',],{
    scrollTrigger: {
        trigger: '.experience-content-container',
        start: 'top 90%',
        end: 'bottom, 50%'
    },
    x: -100,
    opacity: 0,
    duration: 1
});

const experienceps = gsap.utils.toArray('.experience-content-container p');
gsap.from(experienceps, {
    scrollTrigger: {
        trigger: '.experience-content-container',
        start: 'top 90%',
        end: 'bottom, 50%'
    },
    x: -100,
    opacity: 0,
    duration: 1,
    stagger: .1
});



gsap.from(['.accessible-text-art', '.accessible-content-container h3'],{
    scrollTrigger: {
        trigger: '.accessible-content-container',
        start: 'top 90%',
        end: 'bottom, 50%'
    },
    x: 100,
    opacity: 0,
    duration: 1
});

const accessibleps = gsap.utils.toArray('.accessible-content-container p');
gsap.from(accessibleps, {
    scrollTrigger: {
        trigger: '.accessible-content-container',
        start: 'top 90%',
        end: 'bottom, 50%'
    },
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: .1
});



const menutitles = gsap.utils.toArray('.menu-block-title');
menutitles.forEach(title => {
    gsap.from(title, {
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'bottom, 50%'
        },
        opacity: 0
    });
});

[
    gsap.utils.toArray('.menu-block-1 .menu-block-listing .entry'),
    gsap.utils.toArray('.menu-block-2 .menu-block-listing .entry'),
    gsap.utils.toArray('.menu-block-3 .menu-block-listing .entry')
].forEach((menuBlockEntries, idx) => {
    gsap.from(menuBlockEntries, {
        scrollTrigger: {
            trigger: `.menu-block-${idx+1} .menu-block-title`,
            start: 'top 70%',
            end: 'bottom, 60%'
        },
        opacity: 0,
        y: 10,
        stagger: .1
    });
});



gsap.from(['.visit-section-content-container .title-art', '.visit-section-content-container h3'], {
    scrollTrigger: {
        trigger: '.visit-section-content-container',
        start: 'top 70%',
        end: 'bottom, 60%'
    },
    opacity: 0
});

const visitps = gsap.utils.toArray('.visit-section-content-container p');
gsap.from(visitps, {
    scrollTrigger: {
        trigger: '.visit-section-content-container',
        start: 'top 70%',
        end: 'bottom, 60%'
    },
    opacity: 0,
    stagger: .1
})