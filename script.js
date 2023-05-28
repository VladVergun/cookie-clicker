var cookies = 0;
var bakers = 0;
var cpc = 1;
var hiremoney = 20;
var level = 0;

function bake() {
    cookies+=cpc;
    document.getElementById("cookietext").innerHTML = "cookies: " + cookies;
    if ((cookies >= 100) & (cookies < 1000) & (level < 1)) {
        document.getElementById ("achieve").style.opacity = "1";
        document.getElementById("achievetext").innerHTML = "✨first hundred (100 cookies)✨";
        level++;
        setInterval(opacity,5000);
    }
    if ((cookies >= 1000) & (cookies < 10000) & (level < 2)) {
        document.getElementById ("achieve").style.opacity = "1";
        document.getElementById("achievetext").innerHTML = "✨cookie beginner (1000 cookies)✨";
        level++;
        setInterval(opacity,5000);
    }
    if ((cookies >= 10000) & (cookies < 100000) & (level < 3)) {
        document.getElementById ("achieve").style.opacity = "1";
        document.getElementById("achievetext").innerHTML = "✨don't give up (10000 cookies)✨";
        level++;
        setInterval(opacity,5000);
    }
    if ((cookies >= 100000) & (cookies < 1000000) & (level < 4)) {
        document.getElementById ("achieve").style.opacity = "1";
        document.getElementById("achievetext").innerHTML = "✨cookie gladiator (100000 cookies)✨";
        level++;
        setInterval(opacity,5000);
    }
    if ((cookies >= 1000000 )  & (level < 5)) {
        document.getElementById ("achieve").style.opacity = "1";
        document.getElementById("achievetext").innerHTML = "✨cookie master (1000000 cookies)✨";
        level++;
        setInterval(opacity,5000);
    }
}
function hire() {
    if (cookies >= hiremoney){
        cpc++;
        cookies-=hiremoney;
        hiremoney += 5;
        bakers++;
        document.getElementById("cookietext").innerHTML = "cookies: " + cookies;
        document.getElementById("hirebtn").innerHTML = "HIRE BAKER " + bakers + " " + hiremoney + "$";
    }
    else {
        alert('no cookies?');
    }
}

function opacity () {
    document.getElementById ("achieve").style.opacity = "0";
}