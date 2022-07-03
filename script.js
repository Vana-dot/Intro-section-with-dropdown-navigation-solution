var container = document.querySelector("#options");
var img = document.querySelector("#arrow");
function trocas(){
    if(container.style.display === 'none') {
        container.style.display = 'flex';
        img.src="./images/icon-arrow-up.svg";
    } else {
        container.style.display = 'none';
        img.src="./images/icon-arrow-down.svg";
    }
   
    

}

var containertwo = document.querySelector("#optionstwo");
var imgtwo = document.querySelector("#arrowtwo");
function trocastwo(){
    if(containertwo.style.display === 'none') {
        containertwo.style.display = 'flex';
        imgtwo.src="./images/icon-arrow-up.svg";
    } else {
        containertwo.style.display = 'none';
        imgtwo.src="./images/icon-arrow-down.svg";
    }
   
    

}