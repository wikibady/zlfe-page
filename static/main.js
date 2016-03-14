var sectionList=document.getElementsByTagName('section');




$('section').css(
    {
        "height":$(window).height(),
    }
)
$(".nav-button").click(function(){
        var oLink=document.getElementById("link");
        var oStyle = oLink.currentStyle? oLink.currentStyle : window.getComputedStyle(oLink, null);

        if(oStyle.display=="none"){
                oLink.style.display="block";
        }
        else{
            oLink.style.display="none";
        }
    }
)
function handle(delta) {//handle after wheelEnent
    var s = delta + ": ";
    if (delta <0)
    {

        switch(window.location.hash){
            case "#home":
                window.location.hash="about";
                break;
            case "#about":
                window.location.hash="works";
                break;
            case "#works":
                window.location.hash="contact";
                break;
            default :
                break;
        }
       //ÏÂ»¬
    }
    else {
        switch(window.location.hash){
            case "#works":
                window.location.hash="about";
                break;
            case "#about":
                window.location.hash="home";
                break;
            case "#contact":
                window.location.hash="works";
                break;
            default :
                break;
            }
    }
}
var bIfScroll =0;
function wheel(event){//whellEvent
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {
        delta = event.wheelDelta/120;
        if (window.opera) delta = -delta;
    } else if (event.detail) {
        delta = -event.detail/3;
    }
    if (delta && bIfScroll%2==0)
        handle(delta);
    bIfScroll++;
}

//add whellEvent
if (window.addEventListener)
    window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;