console.log(document)
document.addEventListener('DOMContentLoaded', () => {
  'use Srtict';
  const body = document.getElementById("body");
  const tariffsSwitchers = document.querySelectorAll('.tariffs__label');
  const releaseButtonElems = document.querySelectorAll('.questions__label');
  const buttonCallRequest = document.querySelectorAll('.button__call-request');
  const buttonNavigationMobile = document.querySelector('.header__sandwich-button');
  const contactSwitchers = document.querySelectorAll('.contact__label-switcher');
  const sectionCallRequest = document.querySelector('.call-request');
  const sectionCallRequestSwithcer = document.querySelector('.call-request__container-opacity');
  const sectionNavigationMobile = document.querySelector('.navigation-mobile');
  const sectionNavigationMobiletSwithcer = document.querySelector('.navigation-mobile__container-opacity');
  const navigationMobileSwitchers = document.querySelectorAll('.mobile-menu__item');
  const backToTop = document.getElementById("back-to-top");

/*  const navigationMobiletContent =  document.querySelector('.navigation-mobile__container-content'); */

  const tariffsCloseAll = () => {
      tariffsSwitchers.forEach((switcher,i) => {
          switcher.classList.remove('label-active');
      });
  };

  const contactCloseAll = () => {
      contactSwitchers.forEach((switcher,i) => {
          switcher.classList.remove('contact__label-switcher-active');
      });
  };

  tariffsSwitchers.forEach((elem,i) => {
     elem.addEventListener('click', () => {
         tariffsCloseAll();
         elem.classList.add('label-active');
         });
        });

    contactSwitchers.forEach((elem,i) => {
       elem.addEventListener('click', () => {
           contactCloseAll();
           elem.classList.add('contact__label-switcher-active');
        });
      });

  releaseButtonElems.forEach((elem,i) => {
    elem.addEventListener('click', () => {
      elem.classList.toggle('questions__label-active');
    });
   });

   buttonCallRequest.forEach((elem,i) => {
     elem.addEventListener('click', () => {
       sectionCallRequest.classList.toggle('call-request-active');
       body.classList.toggle('no-scroll');
     });
    });

    sectionCallRequestSwithcer.addEventListener('click', () => {
      sectionCallRequest.classList.toggle('call-request-active');
      body.classList.toggle('no-scroll');
    });


    buttonNavigationMobile.addEventListener('click', () => {
      sectionNavigationMobile.classList.toggle('navigation-mobile-active');
      body.classList.toggle('no-scroll');
    });

    sectionNavigationMobiletSwithcer.addEventListener('click', () => {
      sectionNavigationMobile.classList.toggle('navigation-mobile-active');
      body.classList.toggle('no-scroll');
    });

    navigationMobileSwitchers.forEach((elem,i) => {
       elem.addEventListener('click', () => {
         body.classList.toggle('no-scroll');
           sectionNavigationMobile.classList.toggle('navigation-mobile-active');
          });
    });

    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 300) {
            backToTop.style.display = "flex";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

/*    navigationMobiletContent.classList.toggle('navigation-mobile__container-content-active'); */


  });
