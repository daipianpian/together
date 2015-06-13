
function change() {
	var pic = document.getElementById("preview"),
	    file = document.getElementById("f");

	var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();

     if(ext!='png'&&ext!='jpg'&&ext!='jpeg'){
         alert("请输入正确的文件格式！"); 
		 return;
     }
	 var isIE = navigator.userAgent.match(/MSIE/)!= null,
		 isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;

	 if(isIE) {
		file.select();
		var reallocalpath = document.selection.createRange().text;

		// IE6ä¯ÀÀÆ÷ÉèÖÃimgµÄsrcÎª±¾µØÂ·¾¶¿ÉÒÔÖ±½ÓÏÔÊ¾Í¼Æ¬
         if (isIE6) {
			pic.src = reallocalpath;
		 }else {
			// ·ÇIE6°æ±¾µÄIEÓÉÓÚ°²È«ÎÊÌâÖ±½ÓÉèÖÃimgµÄsrcÎÞ·¨ÏÔÊ¾±¾µØÍ¼Æ¬£¬µ«ÊÇ¿ÉÒÔÍ¨¹ýÂË¾µÀ´ÊµÏÖ
             pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
             // ÉèÖÃimgµÄsrcÎªbase64±àÂëµÄÍ¸Ã÷Í¼Æ¬ È¡ÏûÏÔÊ¾ä¯ÀÀÆ÷Ä¬ÈÏÍ¼Æ¬
             pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		 }
	 }else {
		html5Reader(file);
	 }
}

 function html5Reader(file){
     var file = file.files[0];
     var reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = function(e){
         var pic = document.getElementById("preview");
         pic.src=this.result;
     }
 }