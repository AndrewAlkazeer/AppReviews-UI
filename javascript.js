var page4contI = document.querySelectorAll(".page-4-cont i");
var h5PICont = document.querySelectorAll(".h5-p-i-cont");
var page4ContH5 = document.querySelectorAll(".page-4-cont h5");
var reviewerCont = document.querySelector(".reviewer-cont");
var leftArrowCont = document.querySelector(".left-arrow-cont");
var rightArrowCont = document.querySelector(".right-arrow-cont");

window.onload = ()=>{

    var switcher0 = false;
    var switcher1 = false;
    var switcher2 = false;
    var switcher3 = false;
    var switcher4 = false;
    var switcher5 = false;

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