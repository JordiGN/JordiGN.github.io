let isMenuOpen = false;
function showMenu(){
    let menumorado= document.getElementById('menumorado');
    if(!isMenuOpen){
        menumorado.style.height = "auto";
    }else{
        menumorado.style.height = "0px";
    }
    isMenuOpen=!isMenuOpen;
}