function getbreakingnews(context){
	var bnmessage = '';
	var bndom = '<div class="global-breaking"><div class="global-breaking-inner"><div class="breaking-news"><div class="breaking-group"></div></div></div></div>';
	var linkUrl = "";
	var share = true;
	var headline = "";
	var shortlink = "";
	var bn_links = true;
	
		$.getJSON("/feeds/electioncentral_breaking.json"+cacheBuster(120),function(data){
		if(data){
			var _BNGroup = "";
				for (var raceNum in data) {
		            $(data[raceNum]).each(function(iRec, thisBN) {
					   
					    var _BNtimestamp = thisBN.timestamp;//'yyyy-mm-dd HH:mm;ss'
					    var dateParts = _BNtimestamp.split('_');
					    var timeParts = dateParts[1].split('-');
					    dateParts = dateParts[0].split('-');
						var _minutes = timeParts[1].length == 1 ? '0'+ timeParts[1] : timeParts[1];
   						var _hours = timeParts[0] % 12 || 12;
   						var _ampm = timeParts[0] >= 12 ? 'PM' : 'AM';
						var BNTimeStampDisplay = _hours+':'+_minutes+' '+_ampm + ' ET';
						var date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2], timeParts[0], timeParts[1]);
						var BNTimeStamp =Math.round(date.getTime() / 1000);
						var currentTimeStamp = Math.round(new Date().getTime() / 1000); 
						var __delta=(currentTimeStamp-BNTimeStamp)/60; 
						var isExpired = (thisBN.expired=='X' || __delta>30)?true:false;
						
						if(!isExpired){
							//write BN
							var _text = thisBN.text;
					   		var _link = thisBN.url;
							var _hashtags = thisBN.hashtags;
							if (_text.length > 0){
								 if (_link.length >0){
								 	var _bnHrefAndText = '<a href="'+_link+'">'+_text+'</a>';
									var _bnHrefTwitter = '<ul class="breaking-social"><li class="twitter"><a href="https://twitter.com/intent/tweet?text=' + escape(_text) +'&amp;url='+_link+'&amp;hashtags='+_hashtags+'" target="_blank"><b aria-hidden="true" class="icon icon-twitter"></b> Share on Twitter</a></li></ul>';
									//var _bnHrefTwitter = '';
								 }else{
								 	var _bnHrefAndText =_text;
									var _bnHrefTwitter = '';
								 }
								_BNGroup = _BNGroup + '<article class="breaking-item"><header class="breaking-header"><h6>'+_bnHrefAndText+'</h6><p class="timestamp" data-time="'+BNTimeStamp+'">'+BNTimeStampDisplay+'</p></header>'+_bnHrefTwitter+'</article>';
							}
						}
		            });
			    }
				 $(".breaking-group").append(_BNGroup);
 			 	 $("ul.breaking-social li.twitter a").on('click', function(){ window.open(this.href, 'Share', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600'); return false; });

				 breakingNewsActivate();
		}
	});	
}
//GLOBAL CACHEBUSTING HELPER
function cacheBuster(secondsToCache) {
	var returnedString = "";
	var newDate = new Date();
	var seconds = Math.ceil(newDate.getUTCSeconds()/secondsToCache)
	var dateTime = newDate.getUTCFullYear().toString() + newDate.getUTCMonth().toString() + newDate.getUTCDate().toString();
	if (secondsToCache <= 3600){dateTime += newDate.getUTCHours().toString();
		if(secondsToCache > 60){dateTime += Math.ceil(newDate.getUTCMinutes()/(secondsToCache/60))*secondsToCache;}
		else{dateTime += newDate.getUTCMinutes().toString();}}
	dateTime += seconds.toString();
	returnedString = "?cachebuster=" + dateTime;
	return returnedString;
}



$(document).ready(function(){ 
	var isproc = false;
	isproc = get_cookie("elcentpro");
	var ispro = false;
	ispro = geturlcookie('p');//check url
	try {
		if (!isproc) {//check cookie
			
			if (ispro) {
				set_cookie('elcentpro', 'true', 1);
				showproheader();
			}
		}
		else {
			//we have cookie
			var isUrl = isValidRef();
			if ((isproc && isUrl) || ispro) {
				showproheader();
			}
			else {
				delete_cookie('elcentpro');
				hideproheader();
			}
			
		}
	$('div.global-header-inner').show();	
	}catch (e){
		$('div.global-header-inner').show();
	}	
	
});


function get_cookie(c_name){
	if (document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=");
		if (c_start!=-1){
			c_start=c_start + c_name.length+1;
			c_end=document.cookie.indexOf(";",c_start);
			if (c_end==-1) c_end=document.cookie.length;
			return true;
		}
	}
	return false;
}

function isValidRef(){
	var isValid=false;
	if (document.referrer.indexOf('politicopro.com') > 0 || document.referrer.indexOf('-election/results') > 0 || document.referrer.indexOf('-election/schedule') > 0 || document.referrer.indexOf('-election//schedule') > 0 || document.referrer.indexOf('-election/primary') > 0 || document.referrer.indexOf('-election/special') > 0 || document.referrer.indexOf('/polls/') > 0) {
		var isValid=true;
	}
	return isValid;
}
function geturlcookie(p_name) {
    p_name = p_name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + p_name + "=([^&#]*)"),
     results = regex.exec(location.search);
    return results == null ? false : true;
}
function set_cookie(c_name,value,expiredays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : "; expires="+exdate.toUTCString()+"; path=/; domain="+_c_domain);
}
function delete_cookie( c_name ) {
	document.cookie = c_name + '= false; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain='+_c_domain; 
}
function showproheader(){
	$('body').addClass('theme-pro');
	$('h1.branding-primary').html('').html('<a href="https://www.politicopro.com/" title="Home"><b aria-hidden="true" class="icon icon-politico"></b><b aria-hidden="true" class="icon icon-pro"></b> <span class="icon-text">POLITICO Pro</span></a>');
	$('#swappable-nav').removeClass('nav-politico').addClass('nav-pro').html('<a href="https://www.politicopro.com/campaigns/">Campaign Pro</a>');
	$('div.global-header-inner').show();
}
function hideproheader(){
	$('body').removeClass('theme-pro');
	$('h1.branding-primary').html('').html('<a href="http://www.politico.com/" title="Home"><b aria-hidden="true" class="icon icon-politico"></b> <span class="icon-text">POLITICO</span></a>');
	$('#swappable-nav').removeClass('nav-pro').addClass('nav-politico').html('<a href="http://www.politico.com/">POLITICO.com</a>');
	$('div.global-header-inner').show();
}
				