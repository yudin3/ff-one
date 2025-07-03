console.log(document)
document.addEventListener('DOMContentLoaded', () => {
  'use Srtict';
  const tariffsSwitchers = document.querySelectorAll('.tariffs__label');
  const releaseButtonElems = document.querySelectorAll('.questions__label');
  const buttonCallRequest = document.querySelectorAll('.button__call-request');
  const contactSwitchers = document.querySelectorAll('.contact__label-switcher');
  const sectionCallRequest = document.querySelector('.call-request');
  const sectionCallRequestSwithcer = document.querySelector('.call-request__container-opacity');

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
     });
    });

    sectionCallRequestSwithcer.addEventListener('click', () => {
      sectionCallRequest.classList.toggle('call-request-active');
    });
  });
