// Esta clase obtine los valores de las clases html de dos elementos y retorna una margen del mismo tamaño que  el anterior elemento.
class setMargin {
    constructor(preSelector, postSelector) {
        this.firstElement = document.querySelector(preSelector);
        this.secondElement = document.querySelector(postSelector);
    }

    applyMargin() {
        var firstElementHeight = this.firstElement.offsetHeight;
        this.secondElement.style.marginTop = firstElementHeight + 'px';
    }
}

// Uso de la clase
window.onload = function() {
    var marginBannerIntance = new setMargin('header', '.banner_section');
    marginBannerIntance.applyMargin();
}
