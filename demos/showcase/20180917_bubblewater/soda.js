(function () {
    var isShaking = false;
    var shakeRange = 10;
    var shakeTimeOut;
    var shakeDone = false;
    TweenMax.set('.hideFirst',{autoAlpha:0})

    // document.addEventListener('touchstart', function () {
    //     isShaking = true;
    // })

    // document.addEventListener('touchend', function () {
    //     isShaking = false;
    // })

    // getEl('.clozBtn').addEventListener('click', function () {
    //     getEl('.popAd').style.display = 'none';
    // })

    var bg = getEl('#bg');
    var startPage = getEl('#startcut');
    var endPage = getEl('#endcut');
    window.addEventListener('deviceorientation', function (e) {
        beta = e.beta - 45;
        gamma = e.gamma;
        alpha = e.alpha;

        beta = limitRange(beta, -45, 45);
        gamma = limitRange(gamma, -45, 45);

        bg.style.marginTop = -beta * 2 / 9 - 10 + '%';
        bg.style.marginLeft = - gamma * 2 / 9 - 10 + '%';

        // startPage.style.marginTop = beta * .07 + '%';
        // startPage.style.marginLeft = gamma * .07 + '%';

        // endPage.style.marginTop = beta * .07 + '%';
        // endPage.style.marginLeft = gamma * .07 + '%';

        log((gamma * (2 / 9)).toFixed(0));

    });


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

    // addBB();
    function addBB() {
        var iDiv = document.createElement('div');
        // if()
        iDiv.className = (Math.random()>0.8)?'bb_w':'bb';
        if (iDiv.className === 'bb_w') {
          iDiv.style.height = (50 + Math.random()*10) + 'px';
          iDiv.style.width = iDiv.style.height;
        } else {
          iDiv.style.height = (50 - Math.random()*10) + 'px';
          iDiv.style.width = iDiv.style.height;
        }
        getEl('#bbBg').appendChild(iDiv);
        return iDiv
    }

    var during = 4;
    var tt = TweenLite.to(getEl('#startcut'), during / 2, { delay: .3, scale: .7, autoAlpha: 0.2 ,onComplete:function () {
        TweenMax.fromTo(getEl('#endcut'), 1.6, { scale: .2, autoAlpha: 0 }, { ease:Elastic.easeOut,scale: 1, autoAlpha: 1 });
        TweenLite.to(getEl('#startcut'), .1, { autoAlpha: 0});
        shakeDone = true;
    }}).pause();
    // var tt2 = TweenLite.fromTo(getEl('#endcut'), during / 2, { scale: .7, autoAlpha: 0 }, { delay: during / 2 + .25, scale: 1, autoAlpha: 1 }).pause();


    setInterval(function () {

        var bb = addBB();
        TweenLite.fromTo(bb, getRandom(2, 4),
            { css: { left: getRandom(0, 100) + '%', top: '100%', scale: getRandom(.05, .2) } },
            {
                css: { top: getRandom(10, 50) + '%' }, ease: Power1.easeIn, onComplete: function () {
                    removeEl(bb)
                }
            })


    }, 500)

    setInterval(function () {
        if (isShaking) {
            var bb = addBB();
            var size = (Math.random()>0.8)?getRandom(.5, .6):getRandom(.2, .4);

            TweenLite.fromTo(bb, getRandom(.8, 2.5),
                { css: { left: getRandom(0, 100) + '%', marginLeft: 0, top: '110%', scale: size } },
                {
                    css: { marginLeft: getRandom(-100, 100), top: '-10%' }, ease: Power1.easeIn, onComplete: function () {
                        removeEl(bb)
                    }
                })


            if (!shakeDone&&!tt.isActive()) {
                tt.play();

            }
            // if (!tt2.isActive()) {
            //     tt2.play();
            // }
        } else {
            if (tt.isActive()) {
                tt.pause();
            }
            // if (tt2.isActive()) {
            //     tt2.pause();
            // }
        }
    }, 15)

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
    }
})();
