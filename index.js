const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const bannerText = document.querySelector('.banner-text');
    const navFixed = document.querySelector('.navbar-fixed');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link,index) => {
            if( link.style.animation ){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
            }
        });

        //Burger animation
        burger.classList.toggle('toggle');

        //Banner text z-index
        bannerText.classList.toggle('banner-text-hide');
    });


}

//mailchimp
function showMailingPopUp() {
    require(
        ["mojo/signup-forms/Loader"],
        function(L) {
            L.start({"baseUrl":"mc.us10.list-manage.com","uuid":"7e6b734e8e8c8bcdb79af39d4","lid":"4593b23237"})
        }
    );

    document.cookie = 'MCPopupClosed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'MCPopupSubscribed=;path=/;expires=Thu, 01 Jan 1970 00:00:00 UTC;';
}

document.getElementById("open-popup").onclick = function() {showMailingPopUp()};

navSlide();
