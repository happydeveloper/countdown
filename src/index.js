import './style.scss';
import ProgressBar  from 'progressbar.js';

var qt="1.1";
var bg ="puppy";
var destElem ="";

var bgChanged = false;
var hurryupFlag = false;
var endFlag = false;

var queue;


 function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
}

function getDestTime(duration){
    var ts = ((new Date()).getTime() / 1000)*1000 + duration;
    var date = new Date(ts);
   return date.getHours()+":"+('0'+date.getMinutes()).slice(-2);
}


if(qt = getQueryVariable('t')){
    queue = qt.split(',');
    if (queue.length > 0) {
        var duration = Number(queue[0]) * 60 * 1000;
    } else {
        var duration = Number(qt) * 60 * 1000;
    }
} else {
    var duration = Number(prompt('분을 알려주세요.') * 60 * 1000);
}

if(getQueryVariable('gray') === "1") {
    document.body.style.filter = "grayscale(100%)";
} 

var dest = getDestTime(duration);

if(bg = getQueryVariable('bg')) {
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+bg+")";
} else {
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?puppy')";
}

var container = document.querySelector('#container');


function toggleFullscreen() {
    console.log('풀스크린');
    let elem = document.querySelector("body");
    elem.click();
    if (!document.fullscreenElement) {
      elem.requestFullscreen().catch(err => {
        console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
    console.log('풀스크린*************************');
}

function openFullscreen() {

    var elem = document.documentElement;
    if(!document.fullscreenElement) {
        if (elem.requestFullscreen) {
            elem.requestFullscreen().catch(err=>{
                console.log(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
                openFullscreen();
            });
          } else if (elem.mozRequestFullScreen) { /* Firefox */
            elem.mozRequestFullScreen();
          } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();
          } else if (elem.msRequestFullscreen) { /* IE/Edge */
            elem.msRequestFullscreen();
          }
    }
}
document.querySelector('body').addEventListener("keypress",
function(event){
    if(event.keyCode == 13) {
        window.scrollTo(0,1);
        openFullscreen();
    }
}, false);




var bar = new ProgressBar.Circle(container, {
    duration: duration,
    svgStyle: {
        display: 'block',
        width: '400px'
    },
    strokeWidth:10,
    trailColor: 'rgba(0,0,0,0.8)',
    color:'rgba(0,255,0,0.8)',
    text: {
        value: 'Text'
    },
    step: function(state, circle, attachment) {
         
        var remained = Math.floor(duration*(1-circle.value())/1000);
        var m = Math.floor(remained/60);
        var s = remained%60;
        if(!bgChanged && m === 0){
            document.querySelector('body').style.backgroundImage = "url('https://source.unsplash.com/1600x900/?code')";
            document.querySelector('body').style.backgroundSize = "cover";
            bgChanged = true;
        }
        if(!hurryupFlag && (m === 0 && s < 30)){
            document.querySelector('#container').classList.add('animated');
            document.querySelector('#container').classList.add('infinite');
            document.querySelector('#container').classList.add('flip');
            hurryupFlag = true;
        }
        //console.log(endFlag, m, s);
        if(!endFlag && (m === 0 && s === 0)){
            document.querySelector('#container').className = '';
            document.querySelector('#container').classList.add('animated');
            document.querySelector('#container').classList.add('infinite');
            document.querySelector('#container').classList.add('pulse');
            document.querySelector('#container').classList.add('delay-1s');
            document.querySelector('.githubinfo').style.display = 'block';
            endFlag = true;
        }
        if (m === 0){
            if (endFlag == true && queue.length > 1){
                var queryStr = qt.replace(queue[0]+",","");
                var url = window.location.hostname;
                window.location.href ="/?t="+queryStr+"&bg="+bg;
                console.log("timer2 on----------" + bg);
            }
            
            circle.setText(s);
            if(bar){
                bar.text.style.color='rgba(255,0,0,1)';
                bar.path.setAttribute('stroke','rgba(255,0,0,0.7)')
            }
        } else {
            destElem = '<div class="dest">'+dest+'</div>';
            circle.setText(destElem+m+':'+s);
        }
    }
});
bar.animate(1.0);
// bar.stop();