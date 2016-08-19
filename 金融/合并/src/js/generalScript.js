//上传身份证
function uploadID(){
	var docObj=document.getElementById("doc");  
    var imgObjPreview=document.getElementById("preview");  
    if(docObj.files && docObj.files[0]){  
        imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);  
    }else{
        //IE下，使用滤镜  
        docObj.select();  
        var imgSrc = document.selection.createRange().text;  
        var localImagId = document.getElementById("idArea");  
        //图片异常的捕捉，防止用户修改后缀来伪造图片  
        try{  
            localImagId.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";  
            localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;  
        }catch(e){  
            alert("您上传的图片格式不正确，请重新选择!");  
            return false;  
        }  
        imgObjPreview.style.display = 'none';  
        document.selection.empty();  
    }  
    return true;
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
		alert("两次输入不一致!");
		var pw1=document.getElementById("password").getElementsByTagName("li");
		var pw2=document.getElementById("a_password").getElementsByTagName("li");
		for(var i=0;i<pw1.length;i++){
			pw1[i].innerText="";
			pw2[i].innerText="";
		}
		str=str2="";
		pw=document.getElementById("password");
		document.getElementById("password").setAttribute("data-pw","");
		document.getElementById("a_password").setAttribute("data-pw","");
//		setPassword(document.getElementById("password"));
	}
	else{
//		传密码
		transferData(p_url);
	}
}
source="PU口袋校园";
function choice(obj){
		obj.parentElement.getElementsByTagName("strong")[0].innerText=obj.value;
		source=obj.value;
	}
function transferData(URL){
	var xmlhttp;
	var pw_data=document.getElementById("password").getAttribute("data-pw");
	if (window.XMLHttpRequest){
	  xmlhttp=new XMLHttpRequest();
	}
	else{
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	 }
	xmlhttp.open("POST",URL,true);
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4&&xmlhttp.status==200){
			window.location.href=successUrl;
		}
		else{
			alert("error");
		}
	}
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("pw="+pw_data);
}
function show(obj){
	var sec=60;
	obj.innerText=sec+"s后重新发送";
	obj.disabled=true;
	document.getElementById("setNext").disabled=true;
	var interval=setInterval(function(){
		sec--;
		obj.innerText=sec+"s后重新发送";
		if(sec<0){
			clearInterval(interval);
			obj.innerText="重新获取验证码";
			obj.disabled=false;
			document.getElementById("setNext").disabled=false;
		}
	},1000);
	document.getElementById("sendTip").style.display="block";
	document.getElementById("sendTip").getElementsByTagName("span")[0].innerText=source;
}
//自动获焦
function autofocus(){
	var aFoucs=document.getElementsByClassName("w-autofocus");
	for(var i=0;i<aFoucs.length;i++){
		aFoucs[i].addEventListener("click",function(){
			this.getElementsByTagName("input")[0].focus()
		});
	}
}
autofocus();
//选择月贷日贷
function loanStyle(){
	var load=document.getElementById("loan");
	var ltype=document.getElementById("loanType");
	if(load.selectedIndex==0){
		var s=document.createElement("select");
		for(var i=1;i<=12;i++){
			var op=document.createElement("option");
			op.innerText=i;
			s.appendChild(op);
		}
		ltype.appendChild(s);
	}
	load.addEventListener("change",function(){
		ltype.innerHTML="";
		if(load.selectedIndex==0){
			var s=document.createElement("select");
			for(var i=1;i<=12;i++){
				var op=document.createElement("option");
				op.innerText=i;
				s.appendChild(op);
			}
			ltype.appendChild(s);
		}
		else{
			var ip=document.createElement("input");
			ip.type="text";
			ltype.appendChild(ip);
		}
	});
}
loanStyle();