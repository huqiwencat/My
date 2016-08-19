//弹出遮罩层
function displayTans(){
	var getBtn=document.getElementsByClassName("w-select");
	var tans=document.getElementsByClassName("w-transparent")[0];
	for(var i=0;i<getBtn.length;i++){
		getBtn[i].addEventListener("click",function(){
			tans.style.display="block";
		});
	}
	tans.addEventListener("click",function(e){
		if(e.target.className=="w-transparent"){
			tans.style.display="none";
		}
	});
}
//是否领取
function judeg(){
	var bag=document.getElementsByClassName("w-bagGeneral");
	for(var i=0;i<bag.length;i++){
		if(bag[i].getAttribute("data-isGet")=="1"){
			bag[i].getElementsByTagName("button")[0].style.display="none";
			bag[i].style.backgroundImage="url(img/bg4.png)";
		}
	}
}
window.onload=function(){
	displayTans();
	judeg();
}
