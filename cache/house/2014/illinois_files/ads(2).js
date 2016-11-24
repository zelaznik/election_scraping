

var detect = navigator.userAgent.toLowerCase();

function checkIt(string) {
	return detect.indexOf(string) >= 0;
}

var naturalImages = new Array; 

naturalImageOnLoad = function() {
	if (this.width >= this.height) {
		// this.originalImageTag.width = this.boxSize;
		this.originalImageTag.height = (this.boxSize * this.height / this.width);
	} else {
		// this.originalImageTag.height = this.boxSize;
		this.originalImageTag.width = (this.boxSize * this.width / this.height);
	}
	this.originalImageTag.style.visibility='visible';
}

function resizeImage(obj, size) {
	if(obj.naturalWidth > 0 && obj.naturalHeight > 0) {
		if (obj.naturalWidth >= obj.naturalHeight) {
			// obj.width = size;
			obj.height = (size * obj.naturalHeight / obj.naturalWidth);
		} else {
			// obj.height = size;
			obj.width = (size * obj.naturalWidth / obj.naturalHeight);
		}
	} else {
		var img = new Image();
		img.onload = naturalImageOnLoad;
		img.originalImageTag = obj;
		img.boxSize = size;
		img.src = obj.src;
		naturalImages.push(img);
	}
	if(!checkIt("msie")) {
		obj.style.visibility='visible';
	}
}
/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable('$version').split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;


                document.write('\n\n\n	\n\n\n	 \n	\n		\n		\n		\n	\n		    		\n	\n\n\n\n\n\n\n		\n		\n	\n				\n			\n			\n				\n			\n				<ins class=\'dcmads\' style=\'display:inline-block;width:300px;height:250px\'\n    data-dcm-placement=\'N5949.150834.TURN/B10612804.141547653\'\n\n    data-dcm-click-tracker=\'http://r.turn.com/r/tpclick/id/%7E51kjqLN-n5tlzCaJ-M_-35QnsdNyCUB7BbKqK8ulqJr8JBilPENZeoH0wB8m-Ioo5zZUlOtbl6-N015oX68AkFBIq-ppknl6C06gLpHQQQHIfcpk1gIweQeYXswuPELQOOuThSZ189gkrYeMmburCvV3JFSAhY9bWQQyX8Rl8i2W_vqVU3It3lyegx2ISpm8-ueSayil_sF_Ed46d4x5NapGfYZQ58GFPfftL6mDNfMEdsNPqoxKQ8YMEShGmdH8iCXBYiNmQ4xFF2O6W5DxcCR5oGkXbAbzj4_ZfqF5EacJrqYvcZLZdHyRD1_YrAMm0__cCoJdsjsQRGfoqQ0_lep980xcNNS0Be81NX6Op0nja8tqWclvwSVqHVjlFQLof5IwAKvmFxfdGJogjDD5fbS2CHEVaaX-_BnORyOPLPlnFZontigIhWI0VunVABjsZpCGT8o_qVvFzCtaRfwyJ1EwsBqPk47TOa2bOhxq0i2-91_dEjvlzc5MTklPZbKE_J8KSym44l4tc68s6aTOE8C2uUz4B7VWpGtp61cspWEPpbQeWBnS8a0gS-3MHBXe9IE2gBfFw7Q7nvs-4dOpJf9iPDY05GFeBLr5WA0AIxNqTQdhy7XdKnJhOjhdc4tDHe-mPgFK-ERStur_5s3qUxjGohGwcJy1mqA912r8pQDKxjv2Lk6PgWIXWmDTm2aNBx6K-t8Hl16BRG5_owY8nJEENFY8Xdx7W1JEHz3Vr1UAhUR0Hdd82GmmqdJDwJff2ySQUh-oL5WU2hnJXU3Jgtq625Vc8GH4hNMveqltrhzNdgHDGqRRQ4R3-wi5RhI5FiUVL2P1Hnteg0DJwQbtJe2NYuXKHVYuCd5jvW4BIm37s65l-5c0uMZPPlwaQdVh0AZAvklHSbbKI24tISevoApQI5I9EN8FafDb_HRvNxSazNHCWEcZQgVxxTpZwT_Q3vKH_jNDLWswDguGR4gsYw/3c/http%3A%2F%2Fclicktrack.pubmatic.com%2FAdServer%2FAdDisplayTrackerServlet%3FclickData%3DJnB1YklkPTI3MTgwJnNpdGVJZD0yNzE4MSZhZElkPTg5ODI1MiZrYWRzaXplaWQ9OSZ0bGRJZD0yMTc1MDE4OCZjYW1wYWlnbklkPTE0OTExJmNyZWF0aXZlSWQ9MCZhZFNlcnZlcklkPTI0MyZpbXBpZD0wRDY1RDlEMi04REQyLTQ2RUUtQTMzMy1FNUQ2NUREN0EyMEMmcGFzc2JhY2s9MA%3D%3D_url%3D/url/\'\n    data-dcm-rendering-mode=\'script\'\n    data-dcm-https-only\n    data-dcm-resettable-device-id=\'\'\n    data-dcm-app-id=\'\'>\n  <scr' + 'ipt src=\'https://www.googletagservices.com/dcm/dcmads.js\'></scr' + 'ipt>\n</ins>\n			\n						\n		\n	\n					\n					\n		\n	\n		<span id="te-clearads-js-8140790303972306054"><scr' + 'ipt type="text/javascript" src="https://choices.truste.com/ca?pid=turn01&aid=turn01&cid=969322365&c=8140790303972306054&w=300&h=250&js=turn0&admarker=dynamic&uid=3621235090380404284"></scr' + 'ipt></span>\n\n		\n		\n\n\n		\n								  \n     \n			        <iframe name="turn_sync_frame" width="0" height="0" frameborder="0" \n                src="http://cdn.turn.com/server/ddc.htm?uid=3621235090380404284&mktid=284&mpid=2591508&fpid=-1&rnd=3700659049685863884&nu=n&sp=n&ctid=1&cyid=2&app=n&et=n&synct=20" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" style="display:none"></iframe>\n    \n			<!-- (c) 2016 Turn Inc. -->\n\n\n')

