(function () {
    var isShaking = false;
    var shakeRange = 10;
    var shakeTimeOut;
    var shakeDone = false;
    // TweenMax.set('.hideFirst',{autoAlpha:0})
    var tl = new TimelineMax();

    tl
    .set(getEl('.motion-in-bg'),{scale:0.2,autoAlpha:0})
    .to(getEl('.motion-in-bg'),0.8,{delay:1,scale:1,autoAlpha:1,ease:Power3.easeOut},'in').pause();
    
    // tl.play();

    document.addEventListener('touchstart', function () {
        isShaking = true;
    })

    document.addEventListener('touchend', function () {
        isShaking = false;
    })

    // getEl('.clozBtn').addEventListener('click', function () {
    //     getEl('.popAd').style.display = 'none';
    // })

    // var bg = getEl('#bg');

    // 陀螺儀背景
    // window.addEventListener('deviceorientation', function (e) {
    //     beta = e.beta - 45;
    //     gamma = e.gamma;
    //     alpha = e.alpha;

    //     beta = limitRange(beta, -45, 45);
    //     gamma = limitRange(gamma, -45, 45);

    //     bg.style.marginTop = -beta * 2 / 9 - 10 + '%';
    //     bg.style.marginLeft = - gamma * 2 / 9 - 10 + '%';

    //     // startPage.style.marginTop = beta * .07 + '%';
    //     // startPage.style.marginLeft = gamma * .07 + '%';

    //     // endPage.style.marginTop = beta * .07 + '%';
    //     // endPage.style.marginLeft = gamma * .07 + '%';

    //     log((gamma * (2 / 9)).toFixed(0));

    // });

    // shaking
    window.addEventListener('devicemotion', function (event) {
        accelerationX = Math.round(event.acceleration.x);
        accelerationY = Math.round(event.acceleration.y);
        accelerationZ = Math.round(event.acceleration.z);

        if (Math.abs(accelerationX) > shakeRange || Math.abs(accelerationY) > shakeRange || Math.abs(accelerationZ) > shakeRange) {
            isShaking = true;
            if (shakeTimeOut) {
                clearTimeout(shakeTimeOut);
            }
            shakeTimeOut = setTimeout(function () {
                isShaking = false;
                shakeTimeOut = null;
            }, 500);
        }
    });

    var bbImg = "url('"+getEl('#bbBg').getAttribute('data-bbImg')+"')";
    
    function addBB() {
        
        var iDiv = document.createElement('div');
        iDiv.className ='bb';
        iDiv.style.backgroundImage = bbImg; 
        getEl('#bbBg').appendChild(iDiv);
        return iDiv
    }

    setInterval(function () {
        log(isShaking)
        if (isShaking) {
            var bb = addBB();
            var size = (Math.random()>0.8)?getRandom(.5, 1):getRandom(.2, .4);

            TweenLite.fromTo(bb, getRandom(.8, 2.5),
                { css: { left: getRandom(0, 100) + '%', marginLeft: 0, top: '110%', scale: size } },
                {
                    css: { marginLeft: getRandom(-100, 100), top: '-10%' }, ease: Power1.easeIn, onComplete: function () {
                        removeEl(bb)
                    }
                })

            
            if (!shakeDone) {
                tl.play();
                shakeDone = true;
            }
        }
    }, 30)

    function getRandom(min, max) {
        return Math.random() * (max - min) + min;
    }

    function limitRange(num, min, max) {
        return Math.min(Math.max(min, num), max);
    }

    function getEl(name) {
        if (name.indexOf('#') != -1) {
            return document.getElementById(name.replace('#', ''));
        }

        if (name.indexOf('.') != -1) {
            return document.getElementsByClassName(name.replace('.', ''))[0];
        }
    }

    function removeEl(elem) {
        elem.parentNode.removeChild(elem);
    }

    function log(str) {
        // getEl('.video').innerHTML= str
        // console.log(str);
    }
})();