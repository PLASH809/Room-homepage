const menu = document.querySelector('.nav');
const btnMenu= document.querySelector('#btn-menu');
const btnClose = document.querySelector('#btn-close');
let header = document.querySelector('#container-header');
let images = ['images/desktop-image-hero-2.jpg','images/desktop-image-hero-3.jpg','images/desktop-image-hero-1.jpg'];
let cont= images.length;
const ctnInfo = document.querySelector(".container-info");
const infoText= document.getElementsByClassName('information');
let indexText=1;




// open and close the menu 
btnMenu.addEventListener('click', () =>{
    menu.classList.add('active');
   
    
})

btnClose.addEventListener('click',()=>{
    menu.classList.remove('active');
    
});

// skip images and information


ShowText(indexText);

function textSlidesplus(n){
    ShowText(indexText+=n);
}
function currentTextSlides(n){
    ShowText(indexText+=n);
}

function ShowText(n){
    let i;
    if(n>infoText.length){ 
        indexText=1
    }
    if(n<1){
        indexText=infoText.length
    }
    for(i=0;i<infoText.length;i++){
        infoText[i].style.display ="none";
    }
    infoText[indexText-1].style.display="block";
}


function next(){
    if (cont <images.length  ){
        cont= cont+1;
      
      
    }else{
        cont = 1;
                
    }
    
    header.style.backgroundImage = `url(${images[cont-1]})`;

    textSlidesplus(1);
  
}

function back(){
    if (cont <images.length +1 && cont>1){
        cont= cont-1;
    }else{
        cont = images.length;
    }
    header.style.backgroundImage = `url(${images[cont-1]})`;

    textSlidesplus(-1);
}








