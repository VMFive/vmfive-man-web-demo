(function () {
    var shakeRange = 5;
    var tl = new TimelineMax();

    tl.to(getEl('.title1'), .8, {autoAlpha:0,scale:.5})
    .to(getEl('.vacuum'),.6,{marginTop:'-70%',ease:Power1.easeOut},'clean')
    .to(getEl('.bg1'),.6,{top:'30%',height:'70%',ease:Power1.easeOut},'clean')
    .to(getEl('.vacuum'),.6,{marginTop:'-20%',ease:Power1.easeInOut},'clean2')
    .to(getEl('.vacuum'),1,{marginTop:'-100%',ease:Power1.easeInOut},'clean5') 
    .to(getEl('.bg1'),.5,{delay:.6,top:'0%',height:'100%',ease:Power1.easeOut},'clean5')
    .to(getEl('.vacuum'),1.2,{marginTop:'0%',ease:Power1.easeInOut},'cleanAfter')
    .to(getEl('.bg2'),1.2,{height:'100%',ease:Power1.easeInOut},'cleanAfter')
    .from(getEl('.enddingTxt'),1,{autoAlpha:0,top:30,ease:Power3.easeOut},'cleanAfter+=.4').pause()

    // tl.play();
 
    window.addEventListener('devicemotion', function (event) {
        accelerationX = Math.round(event.acceleration.x);
        accelerationY = Math.round(event.acceleration.y);
        accelerationZ = Math.round(event.acceleration.z);

        if (Math.abs(accelerationY) > shakeRange ) {
            tl.play();
        }
    });
    // document.addEventListener('touchstart', function () {
    //     tl.play();
    // })

    // document.addEventListener('touchend', function () {
    // })

    // getEl('.clozBtn').addEventListener('click', function () {
    //     getEl('.popAd').style.display = 'none';
    // })

    // var bg = getEl('#bg');
    // var startPage = getEl('#startcut');
    // var endPage = getEl('#endcut');
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


    // window.addEventListener('devicemotion', function (event) {
    //     accelerationX = Math.round(event.acceleration.x);
    //     accelerationY = Math.round(event.acceleration.y);
    //     accelerationZ = Math.round(event.acceleration.z);

    //     if (Math.abs(accelerationX) > shakeRange || Math.abs(accelerationY) > shakeRange || Math.abs(accelerationZ) > shakeRange) {
    //         isShaking = true;
    //         if (shakeTimeOut) {
    //             clearTimeout(shakeTimeOut);
    //         }
    //         shakeTimeOut = setTimeout(function () {
    //             isShaking = false;
    //             shakeTimeOut = null;
    //         }, 500);
    //     }
    // });

    // // addBB();
    // function addBB() {
    //     var iDiv = document.createElement('div');
    //     // if()
    //     iDiv.className = (Math.random()>0.8)?'bb_w':'bb';
    //     getEl('#bbBg').appendChild(iDiv);
    //     return iDiv
    // }

    // var during = 5;
    // var tt = TweenLite.to(getEl('#startcut'), during / 2, { delay: .3, scale: .7, autoAlpha: 0 }).pause();
    // var tt2 = TweenLite.fromTo(getEl('#endcut'), during / 2, { scale: .7, autoAlpha: 0 }, { delay: during / 2 + .25, scale: 1, autoAlpha: 1 }).pause();

    // // var targetAlpha = 1;
    // // var targetScale = 1;
    // // var isEnding = false;

    // setInterval(function () {

    //     var bb = addBB();
    //     TweenLite.fromTo(bb, getRandom(2, 4),
    //         { css: { left: getRandom(0, 100) + '%', top: '100%', scale: getRandom(.05, .2) } },
    //         {
    //             css: { top: getRandom(10, 50) + '%' }, ease: Power1.easeIn, onComplete: function () {
    //                 removeEl(bb)
    //             }
    //         })


    // }, 500)

    // setInterval(function () {
    //     if (isShaking) {
    //         var bb = addBB();
    //         var size = (Math.random()>0.8)?getRandom(.5, .6):getRandom(.2, .4);

    //         TweenLite.fromTo(bb, getRandom(.8, 2.5),
    //             { css: { left: getRandom(0, 100) + '%', marginLeft: 0, top: '110%', scale: size } },
    //             {
    //                 css: { marginLeft: getRandom(-100, 100), top: '-10%' }, ease: Power1.easeIn, onComplete: function () {
    //                     removeEl(bb)
    //                 }
    //             })

            
    //         if (!tt.isActive()) {
    //             tt.play();

    //         }
    //         if (!tt2.isActive()) {
    //             tt2.play();
    //         }
    //     } else {
    //         if (tt.isActive()) {
    //             tt.pause();
    //         }
    //         if (tt2.isActive()) {
    //             tt2.pause();
    //         }
    //     }
    // }, 15)

    // function getRandom(min, max) {
    //     return Math.random() * (max - min) + min;
    // }

    // function limitRange(num, min, max) {
    //     return Math.min(Math.max(min, num), max);
    // }

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