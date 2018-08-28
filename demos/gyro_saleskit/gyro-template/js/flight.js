(function () {
    // var isShaking = false;
    var isLook = false;
    // var shakeTimeOut;
    // var tl = new TimelineMax();

    // tl.to(getEl('.plane'),2, {scale:1.3,left:-700,top:'20%',ease:Power0.easeNone})
    // .to(getEl('.t1'),.6,{autoAlpha:1,marginTop:0},'-=.2')
    // .to(getEl('.t2'),.6,{autoAlpha:1,marginTop:0},'-=.5')
    // .to(getEl('.t3'),.6,{autoAlpha:1,marginTop:0},'-=.5').pause();
    


    // tl.play();

    
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
    var beta=0;
    var target=100;
    var targetAngle  = 110;
    var startAngle = 65;
    var bg = getEl('.motion-in-bg');

    window.addEventListener('deviceorientation', function (e) {
        beta = limitRange(e.beta,startAngle,targetAngle );
        // target = (beta - startAngle ) / 70 ;
        // gamma = e.gamma;
        // alpha = e.alpha;
        if(beta >= targetAngle ){
            if(!isLook){
                isLook = true;
                bg.style.backgroundPosition = 'center 0%';
            }
        }
        
        if(!isLook){
            target = 100 - ((beta - startAngle ) / (targetAngle - startAngle)) * 100 - 1;
            bg.style.backgroundPosition='center '+target+'%'
        }

       
        log(target);

    });

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

    // function removeEl(elem) {
    //     elem.parentNode.removeChild(elem);
    // }

    function log(str) {
        getEl('.log').innerHTML= str
    }
})();