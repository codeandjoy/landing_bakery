const scrollToAbout = () => gsap.to(document.body, { duration: .5, scrollTo: '#about-section' });
const scrollToMenu = () => gsap.to(document.body, { duration: .5, scrollTo: '#menu-section' });
const scrollToVisit = () => gsap.to(document.body, { duration: .5, scrollTo: '#visit-section' });



let submenuOpen = false;

const navmenuBtns = document.querySelectorAll('.btn-navmenu');
const openSubmenu = () => {
    navmenuBtns.forEach(btn => {
        btn.classList.add('btn-navmenu-opened');
    });

    gsap.to('#full-page-fade',{
        display: 'block',
        opacity: .7,
        duration: .2
    });

    gsap.to('.navmenu', {
        height: 'auto',
        duration: .2
    });

    submenuOpen = true;
}
const closeSubmenu = () => {
    navmenuBtns.forEach(btn => {
        btn.classList.remove('btn-navmenu-opened');
    });

    gsap.to('#full-page-fade',{
        display: 'none',
        opacity: 0,
        duration: .2
    });

    gsap.to('.navmenu', {
        height: 0,
        duration: .2
    });

    submenuOpen = false;
}

navmenuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (!submenuOpen) openSubmenu();
        else if (submenuOpen) closeSubmenu();
    });
});



document.querySelectorAll('.btn-about').forEach(btn => {
    btn.addEventListener('click', () => {
        closeSubmenu();
        scrollToAbout();
    });
})

document.querySelectorAll('.btn-menu').forEach(btn => {
    btn.addEventListener('click', () => {
        closeSubmenu();
        scrollToMenu();
    });
});

document.querySelectorAll('.btn-visit').forEach(btn => {
    btn.addEventListener('click', () => {
        closeSubmenu();
        scrollToVisit();
    });
})