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

let hamburger = document.querySelector('.hamburger');
let sidebar = document.querySelector('.sidebar');
let hide_sidebar = document.querySelector('.hide-sidebar-btn');
let modal_fog = document.querySelector('.modal-fog');

hamburger.onclick = function(){
    sidebar.classList.toggle('sidebar_show-mob');
    modal_fog.classList.toggle('modal-fog_show');
}

hide_sidebar.onclick = function(){
    sidebar.classList.toggle('sidebar_show-mob');
    modal_fog.classList.toggle('modal-fog_show');
}


window.onresize = function(){
    modal_fog.classList.remove('modal-fog_show');
    sidebar.classList.remove('sidebar_show-mob');
}

/*Форма покупки*/

/* Инпуты*/
let inp_price = document.querySelector('#inp-price');
let inp_count = document.querySelector('#inp-count');
let inp_comission = document.querySelector('#inp-comission');
let inp_total = document.querySelector('#inp-total');

/* То что отображается*/
let lb_price = document.querySelector('.buy-form__price');
let lb_count = document.querySelector('.buy-form__count');
let lb_comission = document.querySelector('.buy-form__comission');
let lb_total = document.querySelector('.buy-form__summ-value');

/* Кнопки увеличения/уменьшения кол-ва*/

let btn_inc = document.querySelector('.buy-form__btn_inc');
let btn_dec = document.querySelector('.buy-form__btn_dec');

btn_inc.onclick = function(){
    let cur = +inp_count.value;
    cur++;
    inp_count.value = cur;
    lb_count.innerHTML = cur;

    lb_total.innerHTML = cur * ( (+inp_price.value)+ (+inp_comission.value) );
    inp_total.value = lb_total.innerHTML;
 
}

btn_dec.onclick = function(){
    let cur = +inp_count.value;
    cur--;
    cur = (cur < 1) ? 1 : cur;
    inp_count.value = cur;
    lb_count.innerHTML = cur;

    lb_total.innerHTML = cur * ( (+inp_price.value)+ (+inp_comission.value) );
    inp_total.value = lb_total.innerHTML;

}

//let  = document.querySelector('');


