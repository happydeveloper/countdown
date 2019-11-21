
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

export default util