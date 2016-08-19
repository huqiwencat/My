var limitScale = function () {
    var can = parseInt(document.getElementById("klimit").innerText);
    var all = parseInt(document.getElementById("zLimit").innerText);
    var pt = document.getElementById("ptop");
    var pb = document.getElementById("pbottom");
    var bodyH = document.body.clientHeight;
    var screenH = window.screen.height;
    var foot = document.getElementById("w-puFooter");
    if (all >= can) {
        var angle = (can / all).toFixed(2) * 360;
		
        if (angle > 180) {
			
            pt.style.transform = "rotateZ(180deg)";
            pt.style.webkitTransform = "rotateZ(180deg)";
            angle = angle - 180;
            pb.style.transform = "rotateZ(" + angle + "deg)";
            pb.style.webkitTransform = "rotateZ(" + angle + "deg)";
        }
        else {
			
            pt.style.transform = "rotateZ(" + angle + "deg)";
            pt.style.webkitTransform = "rotateZ(" + angle + "deg)";
        }
    }
    ////判断底部栏是否fixed居底
    //if(bodyH+56<screenH){
    //	foot.style.position="fixed";
    //	foot.style.bottom=0;
    //}
    //else{
    //	foot.style.position="relative";
    //}
}

var setmargin = function () {
    var circle = document.getElementsByClassName("w-circle");
    var bodywidth = document.body.clientWidth;
    circle[0].style.left = (bodywidth - 230) / 2 + "px";

}
window.onload = function () {
    setmargin();
    limitScale();
    if (typeof(Android) == "undefined") {
        document.getElementById("w-puFooter").style.display="none";
        document.getElementsByClassName("w-puFooter-lastA")[0].style.paddingBottom="0";
    } else {
    }
}


