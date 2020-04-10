var page4contI = document.querySelectorAll(".page-4-cont i");
var h5PICont = document.querySelectorAll(".h5-p-i-cont");

window.onload = ()=>{

    var switcher = false;

    h5PICont[0].style.boxShadow = '0 0 5px #999999';
    h5PICont[0].style.border = '1px solid 0 0 5px #999999';
page4contI[0].addEventListener('click', ()=>{
  console.log('clicked');

if(!switcher){
    h5PICont[0].style.boxShadow = '0 0 5px rgb(255, 169, 1)';
   h5PICont[0].style.border = '2px solid rgb(255, 169, 1)';
   console.log('if yellow');
   switcher = true;
} else{
    console.log('current before changes else is ' + h5PICont[0].style.boxShadow);
    h5PICont[0].style.boxShadow = 'rgb(153, 153, 153) 0px 0px 5px !important';
    h5PICont[0].style.border = '1px solid 0 0 5px #999999 !important';
    console.log('else grey');
    switcher = false;
}
});
}