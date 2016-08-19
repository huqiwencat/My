var limitScale=function(){
	var can=parseInt(document.getElementById("klimit").innerText);
	var all=parseInt(document.getElementById("zLimit").innerText);
	var pt=document.getElementById("ptop");
	var pb=document.getElementById("pbottom");
	var bodyH=document.body.clientHeight;
	var screenH=window.screen.height;
	var foot=document.getElementById("w-puFooter");
	if(all>=can){
		var angle=(can/all).toFixed(2)*360;
		console.log(angle)
		if(angle>180){
			pt.style.transform="rotateZ(180deg)";
			pt.style.webkitTransform="rotateZ(180deg)";
			angle=angle-180;
			pb.style.transform="rotateZ("+angle+"deg)";
			pb.style.webkitTransform="rotateZ("+angle+"deg)";
		}
		else{
			pt.style.transform="rotateZ("+angle+"deg)";
			pt.style.webkitTransform="rotateZ("+angle+"deg)";
		}
	}
	//判断底部栏是否fixed居底
	if(bodyH+56<screenH){
		foot.style.position="fixed";
		foot.style.bottom=0;
	}
}
window.onload=function(){
	limitScale();
}
