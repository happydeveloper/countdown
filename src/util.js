
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


// 전체화면 설정
var bgDoc = document.documentElement;

function openFullScreenMode() {    
    if (bgDoc.requestFullscreen) {
        const p = el.webkitRequestFullScreen();
    p.then(() => {console.log('full screen')});
        bgDoc.requestFullscreen();
    } else if (bgDoc.webkitRequestFullscreen) { // Chrome, Safari (webkit)
        bgDoc.webkitRequestFullscreen();
    } else if (bgDoc.mozRequestFullScreen) { // Firefox
        bgDoc.mozRequestFullScreen();
    } else if (bgDoc.msRequestFullscreen) { // IE or Edge
        bgDoc.msRequestFullscreen();
    }
}

var elem = document.documentElement;
function openFullscreen() {
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

export default util