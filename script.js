const btnitemtwo = document.querySelector('.btn-item');
const btn = document.querySelector('.img');
const container = document.querySelector('#features_item_two');


function trocas() {
    if(container.style.display === 'none') {
        container.style.display = 'flex';
        btn.src="./assets/images/icon-arrow-up.svg";
    } 
    else {
        container.style.display = 'none';
        btn.src="./assets/images/icon-arrow-down.svg";
    }
}


const btnitem = document.querySelector('#btn-item');
const bt = document.querySelector('#img');
const containertwo = document.querySelector('#company');

function trocastwo() {
    if(containertwo.style.display === 'none'){
        containertwo.style.display ='flex';
        bt.src="./assets/images/icon-arrow-up.svg";
    }
    else {
        containertwo.style.display ='none';
        bt.src="./assets/images/icon-arrow-down.svg";

    }  
}

btnitem.addEventListener('click',trocastwo);
btnitemtwo.addEventListener('click',trocas);


// const container = document.querySelector(".options");
// const img = document.querySelector(".arrow");
// function trocas(){
//     if(container.style.display === 'none') {
//         container.style.display = 'flex';
//         img.src="./assets/images/icon-arrow-up.svg";
//     } else {
//         container.style.display = 'none';
//         img.src="./assets/images/icon-arrow-down.svg";
//     }
   
    

// }

// const containertwo = document.querySelector(".optionstwo");
// const imgtwo = document.querySelector(".arrowtwo");
// function trocastwo(){
//     if(containertwo.style.display === 'none') {
//         containertwo.style.display = 'flex';
//         imgtwo.src="./assets/images/icon-arrow-up.svg";
//     } else {
//         containertwo.style.display = 'none';
//         imgtwo.src="./assets/images/icon-arrow-down.svg";
//     }
   
    

// }

// const containertre = document.querySelector(".optionstre");
// const imgtre = document.querySelector(".arrowtre");
// function trocastre(){
//     if(containertre.style.display === 'none') {
//         containertre.style.display = 'flex';
//         imgtre.src="./assets/images/icon-arrow-up.svg";
//     } else {
//         containertre.style.display = 'none';
//         imgtre.src="./assets/images/icon-arrow-down.svg";
//     }
   
    

// }

// const containerqua= document.querySelector(".optionsqua");
// const imgqua = document.querySelector(".arrowqua");
// function trocasqua(){
//     if(containerqua.style.display === 'none') {
//         containerqua.style.display = 'flex';
//         imgqua.src="./assets/images/icon-arrow-up.svg";
//     } else {
//         containerqua.style.display = 'none';
//         imgqua.src="./assets/images/icon-arrow-down.svg";
//     }
   
    

// }


var menu_mobile = document.querySelector("#featu");
var menu_features = document.querySelector("#menum");
function menumobile(){
    if(menu_mobile.style.display === 'none') {
        menu_mobile.style.display = 'flex';
    } else {
        menu_mobile.style.display = 'none';
    }
   
    

}