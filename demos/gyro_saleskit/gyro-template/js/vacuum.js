(function () {
    var shakeRange = 5;
    var tl = new TimelineMax();

    tl
    .set(getEl('.forward-in-bg'),{top:'100%'})
    .set(getEl('.forward-in-innerBg'),{top:'-100%'})
    .to(getEl('.forward-in-bg'),1.2,{top:'0%',ease:Power1.easeInOut},'in')
    .to(getEl('.forward-in-innerBg'),1.2,{top:'-0%',ease:Power1.easeInOut},'in').pause();
    

    // tl.play();
 
    window.addEventListener('devicemotion', function (event) {
        accelerationX = Math.round(event.acceleration.x);
        accelerationY = Math.round(event.acceleration.y);
        accelerationZ = Math.round(event.acceleration.z);

        if (Math.abs(accelerationY) > shakeRange ) {
            tl.play();
        }
    });

    function getEl(name) {
        if (name.indexOf('#') != -1) {
            return document.getElementById(name.replace('#', ''));
        }

        if (name.indexOf('.') != -1) {
            return document.getElementsByClassName(name.replace('.', ''))[0];
        }
    }

    // function removeEl(elem) {
    //     elem.parentNode.removeChild(elem);
    // }

    // function log(str) {
    //     // getEl('.video').innerHTML= str
    // }
})();