const shareBtn = document.querySelector('#shareBtn');
const shareDivDesktop = document.querySelector('.share-div-desktop');
const shareBtnMobile = document.querySelector('#shareBtnMobile');
const shareDivMobile = document.querySelector('.share-div-mobile');

shareBtn.addEventListener('click', function(){
    if(window.innerWidth > 784){
        shareBtn.classList.toggle('btn-light');
        shareBtn.classList.toggle('btn-dark');
        shareDivDesktop.classList.toggle('hidden');
    }
    // console.log("hello");
    else {
        shareDivMobile.classList.toggle('hidden');
    }
})

shareBtnMobile.addEventListener('click', function(){
    shareDivMobile.classList.toggle('hidden');
})


window.addEventListener('resize', function(){
    if (window.innerWidth > 784){
        shareDivMobile.classList.add('hidden');
    }
    else{
        shareDivDesktop.classList.add('hidden');
        shareBtn.classList.remove('btn-dark');
        shareBtn.classList.add('btn-light')
    }
})