AOS.init({
    duration: 1200,
})


//loader function
function loadLoader(){
    setTimeout(loader , 3000);
}

function loader(){
    var loaderContainer = document.querySelector('.loader')
    loaderContainer.style.display = 'none';

}

window.addEventListener('load' , loadLoader);