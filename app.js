



const header = document.querySelector('.header');
const logo = document.querySelector('.logo')
let vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)



  window.onscroll = function(){
    if (vw >= 633){
    var top = window.scrollY;
    if (top >= 150) {
      header.classList.add('active');
      logo.classList.add('active-logo');
    }else
    {
      header.classList.remove('active');
      logo.classList.remove('active-logo');
    }
  }
  }
