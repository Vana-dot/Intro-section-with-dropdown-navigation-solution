// Menu desktop

const container = document.querySelector("#features_item_two");
const img = document.querySelector(".img");
const btnitemtwo = document.querySelector(".btn-item")
function trocas(){
    if(container.style.display === 'none') {
        container.style.display = 'flex';
        img.src="./assets/images/icon-arrow-up.svg";
    } else {
        container.style.display = 'none';
        img.src="./assets/images/icon-arrow-down.svg";
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


// Menu mobile

const containerone = document.querySelector("#features_item_one");
const imgone = document.querySelector(".imgone");
const btnitemone = document.querySelector(".btn-item-one")
function trocasone(){
    if(containerone.style.display === 'none') {
        containerone.style.display = 'flex';
        imgone.src="./assets/images/icon-arrow-up.svg";
    } else {
        containerone.style.display = 'none';
        imgone.src="./assets/images/icon-arrow-down.svg";
    }
}


const btnitemon = document.querySelector('#btn-item-on');
const bton = document.querySelector('#imgon');
const containeron = document.querySelector('#companyone');

function trocason() {
    if(containeron.style.display === 'none'){
        containeron.style.display ='flex';
        bton.src="./assets/images/icon-arrow-up.svg";
    }
    else {
        containeron.style.display ='none';
        bton.src="./assets/images/icon-arrow-down.svg";

    }  
}

btnitemone.addEventListener('click',trocasone);
btnitemon.addEventListener('click',trocason);



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


const menu_mobile = document.querySelector("#featu");
const menu_features = document.querySelector("#menum");
const overlay = document.querySelector("#overlay");

function menumobile(){
    if(menu_mobile.style.display === 'none') {
        menu_mobile.style.display = 'flex';
        overlay.classList.add("active");
       //document.body.style.backgroundColor  = "rgba(32, 2, 2, 0.5)";
    } else {
        menu_mobile.style.display = 'none';
        overlay.classList.remove("active");
    }}

