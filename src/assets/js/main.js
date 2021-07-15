/**
 * Обработка переключения визуального режима
 */
let visualRegime = document.querySelector('.visual-regime');

visualRegime.onclick = function(){
   
    if ( this.getAttribute('data-regime') === "0" ){
        this.setAttribute('data-regime', "1");
        this.classList.add('visual-regime_dark');
    } else {
        this.setAttribute('data-regime', "0");
        this.classList.remove('visual-regime_dark');
    }

}

/*********************************************************************/