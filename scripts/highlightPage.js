function highlightPage(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	var headers = document.getElementsByTagName("header");
	if(headers.length == 0) return false;
	var navs = headers[0].getElementsByTagName('nav');
	if(navs.length == 0) return false;
	var links = navs[0].getElementsByTagName("a");
	var linkurl;
	for(var i=0;i<links.length; i++){
		linkurl = links[i].getAttribute("herf");
		if(window.location.href.indexOf(linkurl) !=-1){
			links[i].className = "here";
		}
	}
}
addLoadEvent(highlightPage);
