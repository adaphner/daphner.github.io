//to process and update navigation tabs
document.querySelectorAll('.nav-tab').forEach(nav => nav.addEventListener('click', (e) => {
    const page = e.target.innerText;
    updatePage(page, nav);
}));

//to display the home page by default
document.getElementById('default').click();

function updatePage(page, nav) {

    //reset pages display and borderbottom
    document.querySelectorAll('.page-content').forEach((pgs) => pgs.style.display = 'none');
    document.querySelectorAll('.nav-tab').forEach((navs) => {
        navs.style.borderBottom = '1px solid #f5f5f5';
    });

    //to show the content of the clicked tab
    const showPage = document.getElementById(page);
    showPage.style.display = 'flex';
    nav.style.borderBottom = '1px solid #204666';
}

window.onscroll = () => {

    //to change subnav display when scrolling pass 250px
    const subNav = document.getElementById('projects-sub-nav');
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        subNav.style.display = 'none';
    } else {
        subNav.style.display = 'flex';
    }

    //to change nav and subnav display when scrolling pass 450px
    const mainNav = document.getElementById('navigation');
    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        mainNav.style.display = 'none';
    } else {
        mainNav.style.display = 'flex';
    }
}

//Change the social icons on mouseover
document.querySelectorAll('.ft-social-icons').forEach(icon => icon.addEventListener('mouseover', () => {
    switch (icon.id) {
        case 'linkedin-icon':
            icon.setAttribute('src', 'images/linkedin-green.svg');
            break;
        case 'github-icon':
            icon.setAttribute("src", "images/github-green.svg");
            break;
        case 'email-icon':
            icon.setAttribute("src", "images/email-green.svg");
            break;
    }
}));

//Change the social icons on mouseleave
document.querySelectorAll('.ft-social-icons').forEach(icon => icon.addEventListener('mouseleave', () => {
    switch (icon.id) {
        case 'linkedin-icon':
            icon.setAttribute('src', 'images/linked-in-white.svg');
            break;
        case 'github-icon':
            icon.setAttribute("src", "images/git-hub-white.svg");
            break;
        case 'email-icon':
            icon.setAttribute("src", "images/email-white.svg");
            break;
    }
}));

//to scroll ba to the top when the footer logo is clicked.
document.getElementById('scroll-to-top').addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
