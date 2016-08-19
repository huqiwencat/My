//上传身份证
function uploadID(obj){
	var xmlhttp;
	var dom=document.getElementById("idArea");
	var file=obj.files[0];
//	ajax提交图片
	if (window.XMLHttpRequest){
		 xmlhttp=new XMLHttpRequest();
	}
	else{
		 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	 }
	
	
	
	if(!/image\/\w+/.test(file.type)){
		alert("请确保文件为图像类型");
	    return false;
	}
	var read=new FileReader();
	read.readAsDataURL(file);
	read.onload=function(e){
		img.src=this.result;
		console.log(this.result)
		dom.innerHTML="";
		dom.appendChild(img);
	}
}
//设置密码
//如果点击的是确认密码则无法弹出输入框
var str=str2="";
var pw=document.getElementById("password");
function setPassword(obj){
	if(obj.getAttribute("data-inputable")){
		var kb=document.getElementById("keyboard");
		kb.style.bottom=0;
		for(var i=0;i<kb.getElementsByTagName("td").length;i++){
			kb.getElementsByTagName("td")[i].addEventListener("touchstart",set);
		}
//		kb.addEventListener("click",set);
	}
}
function set(){
	var kb=document.getElementById("keyboard");
	if(!this.getAttribute("data-delete")){
		str+=this.innerText;
		if(str.length>6){
			pw.setAttribute("data-pw",str.substring(0,str.length-1));
			str=str.charAt(str.length-1);
			pw=document.getElementById("a_password");
			for(var i=0;i<str.length;i++){
				pw.getElementsByTagName("li")[i].innerText="•";
			}
		}
		else{
			if(str.length==6&&pw.getAttribute("id")=="a_password"){
				kb.style.bottom="-222px";
				pw.setAttribute("data-pw",str);
				document.getElementById("setNext").addEventListener("touchstart",testingPassword);
			}
			for(var i=0;i<str.length;i++){
				pw.getElementsByTagName("li")[i].innerText="•";
			}
		}
	}
	else{
		str=str.substring(0,str.length-1);
		pw.getElementsByTagName("li")[str.length].innerText="";
	}
}
//验证两次输入是否相同
function testingPassword(){
	if(document.getElementById("a_password").getAttribute("data-pw")!=document.getElementById("password").getAttribute("data-pw")){
		window.location.href=successUrl;
	}
	else{
		alert("验证通过")
	}
}
function choice(obj){
		obj.parentElement.getElementsByTagName("strong")[0].innerText=obj.value;
	}