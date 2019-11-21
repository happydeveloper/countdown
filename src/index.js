import './style.css';
import ProgressBar  from 'progressbar.js';

// import { util } from './util.js';

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


var qt="1.1";
var bg ="puppy";
var destElem ="";
var bgChanged = false;
var hurryupFlag = false;
var endFlag = false;



if(qt = getQueryVariable('t')){
    var duration = Number(qt) * 60 * 1000;
} else {
    var duration = Number(prompt('분을 알려주세요.') * 60 * 1000);
}

var dest = getDestTime(duration);

if(bg = getQueryVariable('bg')) {
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+bg+")";
} else {
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?structure')";
}

var container = document.querySelector('#container');

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
        // debugger;
        var remained = Math.floor(duration*(1-circle.value())/1000);
        var m = Math.floor(remained/60);
        var s = remained%60;
        if(!bgChanged && m === 0){
            bgChanged = true;
            document.querySelector('body').style.backgroundImage = "url('https://source.unsplash.com/1600x900/?code')";
            document.querySelector('body').style.backgroundSize = "cover";
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
            endFlag = true;
            document.querySelector('.githubinfo').style.display = 'block';
        }
        if (m === 0){
            circle.setText(s);
            if(bar){
                bar.text.style.color='rgba(255,0,0,1)';
                bar.path.setAttribute('stroke','rgba(255,0,0,1)')
            }
        } else {
            destElem = '<div class="dest">'+dest+'</div>';
            circle.setText(destElem+m+':'+s);
        }
    }
});
bar.animate(1.0);
// bar.stop();