(function () {
    // var isShaking = false;
    var shakeRange = 10;
    // var shakeTimeOut;
    // var shakeDone = false;
    // TweenMax.set('.hideFirst',{autoAlpha:0})
    var isPlaying = false;


    // tl.play();

    document.addEventListener('touchstart', function () {
        playAni();
    })

    // document.addEventListener('touchend', function () {
    //     playAni();
    // })

    function playAni() {
        if (!isPlaying) {
            isPlaying = true;
            
            var rollingrResult;
            var rr1 = getRandom(1,2);
            var rr2 = getRandom(1,2);

            if(rr1===rr2){
                if(rr1===1){
                    rollingrResult =3;
                }else{
                    rollingrResult =4;

                }
            }else{
                rollingrResult =2
            }


            playroll(rr1,rr2,rollingrResult)
            console.log(rr1,rr2,rollingrResult)
        }

    }

    var count =1;

    function playroll(r1,r2,rollingrResult){
        var tl = new TimelineMax();
        var rr = '.rt1';
        var rr2 = '.rt2';
        tl.to(rr, .4, { scale: 2 ,rotation:'0deg'})
        .to(rr,.6,{scale:1,ease:Bounce.easeOut})
        .to(rr,.9,{rotation:getRandom(-45,45)+(count++)*180+180,top:getRandom(5,35)+'%'},0)
        .to(rr2, .4, { scale: 2 ,rotation:'0deg'},0)
        .to(rr2,.7,{scale:1,ease:Bounce.easeOut},.4)
        .to(rr2,.9,{rotation:getRandom(-45,45)+(count++)*180,top:getRandom(5,35)+'%'},0)
        .set('.rt1 .pic', { backgroundImage: 'url(./images/rolling/ppp'+ r1 + '.png' },.6)
        .set('.rt2 .pic', { backgroundImage: 'url(./images/rolling/ppp'+ r2 + '.png' },.6)
        .fromTo('.motion-in .bg', .6, { autoAlpha: 0, top: 30, backgroundImage: 'url(./images/rolling/p0'+rollingrResult+'.png' }, { autoAlpha: 1, top: 0 },'-=.2')
        .call(function () {
            isPlaying = false;
        })
        
            // .set('.rt1', { rotation:'-90deg',backgroundImage: 'url(./images/rolling/pp0' + rollingrResult + '-1.png' })
            // .set('.rt2', { rotation:'20deg',backgroundImage: 'url(./images/rolling/pp0' + rollingrResult + '-2.png' })
            // .to('.rt1', .5, { scale: 1, autoAlpha: 1, rotation:'720deg',ease: Power2.easeOut })
            // .to('.rt2', .5, { scale: 1, autoAlpha: 1, rotation:'720deg',ease: Power2.easeOut },'-=0.3')
            // .fromTo('.motion-in .bg', .6, { autoAlpha: 0, top: 30, backgroundImage: 'url(./images/rolling/p0' + rollingrResult + '.png' }, { autoAlpha: 1, top: 0 },'-=.2')
            // .call(function () {
            //     isPlaying = false;
            // })
    }

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
            playAni();
        }
    });

    // var bbImg = "url('" + getEl('#bbBg').getAttribute('data-bbImg') + "')";

    // function addBB() {

    //     var iDiv = document.createElement('div');
    //     iDiv.className = 'bb';
    //     iDiv.style.backgroundImage = bbImg;
    //     getEl('#bbBg').appendChild(iDiv);
    //     return iDiv
    // }

    // setInterval(function () {
    //     log(isShaking)
    //     if (isShaking) {
    //         var bb = addBB();
    //         var size = (Math.random() > 0.8) ? getRandom(.5, 1) : getRandom(.2, .4);

    //         TweenLite.fromTo(bb, getRandom(.8, 2.5),
    //             { css: { left: getRandom(0, 100) + '%', marginLeft: 0, top: '110%', scale: size } },
    //             {
    //                 css: { marginLeft: getRandom(-100, 100), top: '-10%' }, ease: Power1.easeIn, onComplete: function () {
    //                     removeEl(bb)
    //                 }
    //             })


    //         if (!shakeDone) {
    //             tl.play();
    //             shakeDone = true;
    //         }
    //     }
    // }, 30)

    function getRandom(min, max) {
        return Math.round(Math.random() * (max - min) + min);
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