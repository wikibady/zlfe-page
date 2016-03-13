function setSectionSize(){
    /*
    * let Section class has the same size as the window,
    * what's up,the width of class section equals window.width - nav.width
    */

    $("section").css({
        "height":$(window).height(),
        "width":parseInt($(window).width())-parseInt($('nav').width())+"px",
        "display":"none",
             });

    $("section").first().css({
        "top":0,
        "display":"",
        "background-image":"url('https://daks2k3a4ib2z.cloudfront.net/56e3b19da6ebff347a3b456c/56e3b19ea6ebff347a3b45b6_4dAw8Su1SyaQH5ABC87S_Traunsee-Toscana_2014-02-01-(90-von-117)-500px.jpg')",

});
}
function setClick(){
    /*
    * set the background-color for clicked li in nav
    * */
}
function mousewheelEvent(e) {
    var section=$("section");
    for(var i =0;i<section.length;i++)
    {
        alert(section[i].css());
        //if (section[i].css.)
    }

}
function mouseScrue(){
    if (document.attachEvent) {
        document.attachEvent("onmousewheel", function(e) {
            mousewheelEvent(e, e.wheelDelta);
        });
    }
    else if (document.addEventListener) {
        document.addEventListener("DOMMouseScroll", function(e) {
            mousewheelEvent(e, e.detail * -40);
        }, false);
    }
}
