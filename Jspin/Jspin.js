var Jspin = (function () {
    "use strict";

    var config = {
        'class': 'spin_loader',
        'ancho': 50,
        'alto': 50,
        'animacion': 'animation_spin',
    };

    var init = function () {
        stop();

        var ancho_ = 0;
        var alto_ = 0;

        //obtenemos el ancho y alto de la ventana de nuestro navegador, compatible con todos los navegadores
        if (window.innerWidth == undefined) { ancho_ = window.screen.width; }
        else { ancho_ = window.innerWidth; }
        if (window.innerHeight == undefined) { alto_ = window.screen.height; }
        else alto_ = window.innerHeight;

        var anim_ = document.createElement('div');

        anim_.style.marginTop = (alto_ / 2 - config.alto) + "px";
        anim_.style.marginLeft = (ancho_ / 2 - config.ancho) + "px";
        anim_.style.width = config.ancho + "px";
        anim_.style.height = config.alto + "px";
        anim_.style.border = "10px solid #eee";
        anim_.style.borderTop = "10px solid #666";
        anim_.style.borderRadius = "50%";
        anim_.style.animationName = config.animacion;
        anim_.style.animationDuration = "0.70s";
        anim_.style.animationIterationCount = "infinite";
        anim_.style.animationTimingFunction = "linear";

        var div_ = document.createElement("div");

        div_.setAttribute('class', config.class);
        div_.setAttribute('style', 'filter: alpha(opacity=65);-moz-opacity: 65;opacity: 0.65;');
        div_.style.position = "fixed";
        div_.style.top = "0px";
        div_.style.left = "0px";
        div_.style.zIndex = "3200";
        div_.style.background = "#111";
        div_.style.width = ancho_ + "px";
        div_.style.height = alto_ + "px";
        div_.style.height = "calc(100% - 0px)";

        div_.appendChild(anim_);

        document.body.appendChild(div_);
    };

    var stop = function () {
        var loader = document.querySelector('div.' + config.class);
        if (loader !== null) { loader.parentNode.removeChild(loader); }
    };


    return {
        init: init,
        stop: stop,
        config: config,
    };
})();