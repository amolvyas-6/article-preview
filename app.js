const shareBtn = document.querySelector('#shareBtn');
const shareDivDesktop = document.querySelector('.share-div-desktop');

shareBtn.addEventListener('click', function(){
    if(window.innerWidth > 784){
        shareBtn.classList.toggle('btn-light');
        shareBtn.classList.toggle('btn-dark');
        shareDivDesktop.classList.toggle('hidden');
    }
})
