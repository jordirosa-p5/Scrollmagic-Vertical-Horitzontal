let controller = new ScrollMagic.Controller();

let distAMourens = $('#second').width() - window.innerWidth;

let scene = new ScrollMagic.Scene({
        triggerElement: "#second",
        triggerHook: 0,
        duration: "300%"
    })
    .setPin('#second')
    .addIndicators()
    .on('progress', function (e) {
        let moviment = -distAMourens * e.progress + "px";
        $('#second').css({transform: "translateX(" + moviment + ")"});
    })
    .addTo(controller);

