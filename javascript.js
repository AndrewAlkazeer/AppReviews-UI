var page4contI = document.querySelectorAll(".page-4-cont i");
var h5PICont = document.querySelectorAll(".h5-p-i-cont");
var page4ContH5 = document.querySelectorAll(".page-4-cont h5");
var reviewerCont = document.querySelector(".reviewer-cont");
var leftArrowCont = document.querySelector(".left-arrow-cont");
var rightArrowCont = document.querySelector(".right-arrow-cont");
// Mobile navbar menu
var one = document.querySelector('.bar-one');
  var two = document.querySelector('.bar-two');
  var three = document.querySelector('.bar-three');
  var main = document.querySelector('.mobile-menu-btn');
  var isClicked = false;
  var isClosed = true;
  var mobileHiddenMenuCont = document.querySelector('.mobile-hidden-menu-cont');
  var navMobileMenuLi = document.querySelectorAll('.nav-mobile-menu li');

window.onload = ()=>{
    var switcher0 = false;
    var switcher1 = false;
    var switcher2 = false;
    var switcher3 = false;
    var switcher4 = false;
    var switcher5 = false;
// Mobile navbar menu button animation

// Menu Open
main.addEventListener('click', ()=>{
    if(!isClicked && isClosed){
      isClicked = true;
      isClosed = false;
      one.style.background = 'black';
      two.style.background = 'black';
      three.style.background = 'black';
      mobileHiddenMenuCont.style.display = 'block';
      document.body.style.overflow = 'hidden';
      setTimeout(()=>{
        navMobileMenuLi[0].style.borderLeft = '7px solid rgb(85, 56, 232)';
      }, 400);
      setTimeout(()=>{
        navMobileMenuLi[1].style.borderLeft = '7px solid rgb(85, 56, 232)';
      }, 700);
      setTimeout(()=>{
        navMobileMenuLi[2].style.borderLeft = '7px solid rgb(85, 56, 232)';
      }, 1000);
     // Stage One Animation
     setTimeout(()=>{
     three.style.top = '100%';
     two.style.top = '100%';
     one.style.top = '100%';
     three.style.transform = 'translateY(0%)';
     two.style.transform = 'translateY(0%)';
     one.style.transform = 'translateY(0%)';
     three.style.transition = '0.7s ease-in-out';
     two.style.transition = '0.6s ease-in-out';
     one.style.transition = '0.5s ease-in-out';
     }, 200);
     // Stage Two Animation
     setTimeout(() =>{
     one.style.top = '-80%';
     two.style.top = '20%';
     three.style.top = '70%';
     three.style.transition = '0.2s ease-in-out';
     two.style.transition = '0.3s ease-in-out';
     one.style.transition = '0.4s ease-in-out';
     }, 1000);
     // Stage Three Animation
     setTimeout(() =>{
     three.style.top = '120%';
     two.style.top = '120%';
     one.style.top = '120%';
     three.style.transform = 'translateY(0%)';
     two.style.transform = 'translateY(0%)';
     one.style.transform = 'translateY(0%)';
     three.style.transition = '0.7s ease-in-out';
     two.style.transition = '0.3s ease-in-out';
     one.style.transition = '0.5s ease-in-out';
     two.style.opacity = '0';
     }, 1400);
     // Stage Four Animation
      setTimeout(() =>{
        one.style.transform = 'rotate(-30deg)';
        three.style.transform = 'rotate(30deg)';
        one.style.transition = '0.3s ease-in-out';
        three.style.transition = '0.3s ease-in-out';
      }, 1900);
      setTimeout(() =>{
        one.style.top = '70%';
        three.style.top = '70%';
        one.style.transform = 'rotate(-45deg)';
        three.style.transform = 'rotate(45deg)';
      }, 2200);
      
      
      }
     // Menu Close
    else{
        isClicked = false;
        isClosed = true;
        one.style.background = 'white';
        two.style.background = 'white';
        three.style.background = 'white';
        mobileHiddenMenuCont.style.display = 'none';
        navMobileMenuLi[0].style.borderLeft = 'none';
        navMobileMenuLi[1].style.borderLeft = 'none';
        navMobileMenuLi[2].style.borderLeft = 'none';
        document.body.style.overflow = 'visible';
        // Stage One
        setTimeout(() =>{
        one.style.transform = 'rotate(0deg)';
        three.style.transform = 'rotate(0deg)';
        three.style.top = '140%';
        two.style.top = '140%';
        one.style.top = '140%';
        two.style.opacity = '1';
        two.style.transitionDelay = '0.2s';
        }, 200);
        // Stage Two
        setTimeout(() =>{
        one.style.top = '-80%';
        two.style.top = '20%';
        three.style.top = '70%';
        three.style.transition = '0.3s ease-in-out';
        two.style.transition = '0.4s ease-in-out';
        one.style.transition = '0.5s ease-in-out';
        }, 500);
        // Stage Three
        setTimeout(() =>{
        one.style.top = '0%';
        two.style.top = '50%';
        three.style.top = '100%';
        three.style.transform = 'translateY(-100%)';
        two.style.transform = 'translateY(-50%)';
      //  one.style.transform = 'translateY(0%)';
        }, 900);
      };
   });

   //  Questions page animation

page4contI[0].addEventListener('click', ()=>{
if(!switcher0){
    h5PICont[0].style.boxShadow = '0 0 5px rgb(255, 169, 1)';
   h5PICont[0].style.border = '2px solid rgb(255, 169, 1)';
   page4contI[0].setAttribute('class', 'fa fa-minus');
   page4ContH5[0].style.color = 'black';
   switcher0 = true;
} else{
    h5PICont[0].style.boxShadow = 'rgb(153, 153, 153) 0px 0px 5px';
    h5PICont[0].style.border = '1px solid #999999';
    page4contI[0].setAttribute('class', 'fa fa-plus');
    page4ContH5[0].style.color = '#999999';
    switcher0 = false;
}
});
page4contI[1].addEventListener('click', ()=>{
  if(!switcher1){
      h5PICont[1].style.boxShadow = '0 0 5px rgb(255, 169, 1)';
     h5PICont[1].style.border = '2px solid rgb(255, 169, 1)';
     page4contI[1].setAttribute('class', 'fa fa-minus');
     page4ContH5[1].style.color = 'black';
     switcher1 = true;
  } else{
      h5PICont[1].style.boxShadow = 'rgb(153, 153, 153) 0px 0px 5px';
      h5PICont[1].style.border = '1px solid #999999';
      page4contI[1].setAttribute('class', 'fa fa-plus');
      page4ContH5[1].style.color = '#999999';
      switcher1 = false;
  }
  });
  page4contI[2].addEventListener('click', ()=>{
    if(!switcher2){
        h5PICont[2].style.boxShadow = '0 0 5px rgb(255, 169, 1)';
       h5PICont[2].style.border = '2px solid rgb(255, 169, 1)';
       page4contI[2].setAttribute('class', 'fa fa-minus');
       page4ContH5[2].style.color = 'black';
       switcher2 = true;
    } else{
        h5PICont[2].style.boxShadow = 'rgb(153, 153, 153) 0px 0px 5px';
        h5PICont[2].style.border = '1px solid #999999';
        page4contI[2].setAttribute('class', 'fa fa-plus');
        page4ContH5[2].style.color = '#999999';
        switcher2 = false;
    }
    });
    page4contI[3].addEventListener('click', ()=>{
        if(!switcher3){
            h5PICont[3].style.boxShadow = '0 0 5px rgb(255, 169, 1)';
           h5PICont[3].style.border = '2px solid rgb(255, 169, 1)';
           page4contI[3].setAttribute('class', 'fa fa-minus');
           page4ContH5[3].style.color = 'black';
           switcher3 = true;
        } else{
            h5PICont[3].style.boxShadow = 'rgb(153, 153, 153) 0px 0px 5px';
            h5PICont[3].style.border = '1px solid #999999';
            page4contI[3].setAttribute('class', 'fa fa-plus');
            page4ContH5[3].style.color = '#999999';
            switcher3 = false;
        }
        });
        page4contI[4].addEventListener('click', ()=>{
            if(!switcher4){
                h5PICont[4].style.boxShadow = '0 0 5px rgb(255, 169, 1)';
               h5PICont[4].style.border = '2px solid rgb(255, 169, 1)';
               page4contI[4].setAttribute('class', 'fa fa-minus');
               page4ContH5[4].style.color = 'black';
               switcher4 = true;
            } else{
                h5PICont[4].style.boxShadow = 'rgb(153, 153, 153) 0px 0px 5px';
                h5PICont[4].style.border = '1px solid #999999';
                page4contI[4].setAttribute('class', 'fa fa-plus');
                page4ContH5[4].style.color = '#999999';
                switcher4 = false;
            }
            });
            page4contI[5].addEventListener('click', ()=>{
                if(!switcher5){
                    h5PICont[5].style.boxShadow = '0 0 5px rgb(255, 169, 1)';
                   h5PICont[5].style.border = '2px solid rgb(255, 169, 1)';
                   page4contI[5].setAttribute('class', 'fa fa-minus');
                   page4ContH5[5].style.color = 'black';
                   switcher5 = true;
                } else{
                    h5PICont[5].style.boxShadow = 'rgb(153, 153, 153) 0px 0px 5px';
                    h5PICont[5].style.border = '1px solid #999999';
                    page4contI[5].setAttribute('class', 'fa fa-plus');
                    page4ContH5[5].style.color = '#999999';
                    switcher5 = false;
                }
                });

                rightArrowCont.addEventListener('click', ()=>{
                    rightArrowCont.style.background = 'grey';
                    reviewerCont.style.left = '-100%';
                    leftArrowCont.style.background = 'rgb(255, 169, 1)';
                });
                leftArrowCont.addEventListener('click', ()=>{
                    leftArrowCont.style.background = 'grey';
                    reviewerCont.style.left = '0%';
                    rightArrowCont.style.background = 'rgb(255, 169, 1)';
});
}