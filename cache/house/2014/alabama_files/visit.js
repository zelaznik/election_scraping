try{window.parent._dv_win['dvCallback_1479949198793424']($dv,window,'b005d58624624179bbf2d29e2d9b6bde','tps10239.doubleverify.com');}catch(e){try{var image=window.document.createElement('img');image.src=window.location.protocol+'//tps30.doubleverify.com/visit.jpg?ctx=818052&cmp=1619415&dvtagver=6.1.src&dvp_cbError='+encodeURIComponent(e.message)}catch(e){}}$dv.pubSub.subscribe('ImpressionServed', $uid, 'RTN_LatencyTemp', function () {try {var beforeVisitCall = '';var templateStartTime = parent.getCurrentTime();var dv_win = parent.window._dv_win;if (dv_win && dv_win.t2tTimestampData) {if (dv_win.t2tTimestampData.length >= 2) {beforeVisitCall = dv_win.t2tTimestampData[1].beforeVisitCall;}}var latency = 0;if (beforeVisitCall != '' && templateStartTime != '') {latency = templateStartTime - beforeVisitCall;}if(latency > 1000 && latency < 90000) {$dv.registerEventCall($uid, { dvp_ltncy: latency });}} catch (e) {};});    	$dv.pubSub.subscribe ('ImpressionServed', $uid, 'SendAdEntitiesForBSBAConsolidation', function() {
            'use strict';
            var stringifyFunc = null;
			if(window.JSON){
				stringifyFunc = window.JSON.stringify;
			} else {
				if(window.parent && window.parent.JSON){
					stringifyFunc = window.parent.JSON.stringify;
				}
			}
			if(!stringifyFunc){
				return;
			}
            var targetWin;
            var tag = $dv.tags[$uid];
            var bsmsg = {
                action : 'notifyBrandShieldAdEntityInformation',
                bsAdEntityInformation : {
                    comparisonItems : [{name : 'cmp', value : 3352560},{name : 'plmt', value : 3352561}], verboseReporting : false  }
            };
            var bsstring = stringifyFunc(bsmsg);

            var findAndSend = function(){
                if(!targetWin) {
                    if (tag) {
                        targetWin = tag.t2tIframeWindow;
                        if (!targetWin) {
                            var t2tIframeId = tag.t2tIframeId;
                            //get t2t window and post the AdEntities to it.
                            if (t2tIframeId) {
                                var iFrame = window.parent.getElementById(t2tIframeId);
                                if (iFrame) {
                                    targetWin = iFrame.contentWindow;
                                }
                            }
                        }
                    }
                }

                if(targetWin){
                    targetWin.postMessage(bsstring, '*');
                }
            };

            findAndSend();
            setTimeout(findAndSend, 100);
            setTimeout(findAndSend, 500);
        });var impId = 'b005d58624624179bbf2d29e2d9b6bde';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {var ifu = '';var alu = 'http://ad.doubleclick.net/ddm/clk/291583327;106680815;k';var lbl='';var d=null,e=dvObj==window.$dv,h=e?parent:window,k=dvObj.tags[impId].protocol+"//"+(dvObj.tags[impId].ServerPublicDns||dvObj.tags[impId].serverPublicDns)+"/"+(e?"event":"bsevent")+".gif?impid="+impId,l=0,m=0,n=[],p=[],q=10;function r(a,c){function b(b){return f=function(g){g.preventDefault();if(!u[c<<q*b]&&(rhe(c,c<<q*b),u[c<<q*b]=!0,a)){events=i[b];for(g=0;g<events.length;g++)a.removeEventListener?a.removeEventListener(events[g],f):a.detachEvent?a.detachEvent("on"+events[g],f):a["on"+events[g]]=f}}}var i=[["click"],["focus"],"input change keyup textInput keypress paste".split(" ")],u=[];u[c]=!1;if(a)for(var j=0;j<i.length;j++){events=i[j];for(var o=0;o<events.length;o++)a.addEventListener?a.addEventListener(events[o],b(j),!0):a.attachEvent?a.attachEvent("on"+events[o],b(j)):a["on"+events[o]]=b(j)}}window.rhe=function(a,c){void 0==c&&(c=a);var b="",i="";"number"===typeof a&&void 0==n[a]&&(n[a]=!0,l+=a,b="&"+lbl+"heas="+l);"number"===typeof c&&void 0==p[c]&&(p[c]=!0,m+=c,i="&dvp_hease="+m);dvObj.domUtilities.addImage(k+"&"+lbl+"hea=1"+b+i,dvObj.tags[impId].tagElement.parentNode)};h.rhe=rhe;function s(a,c){var b=document.createElement(a);b.id=(c||a)+"-"+impId;b.style.visibility="hidden";b.style.position="absolute";b.style.display="none";return b}function t(a){var c=v;Object.defineProperty(c,a,{get:function(){return this.getAttribute(a)},set:function(b){this.setAttribute(a,b);"createEvent"in document?(b=document.createEvent("HTMLEvents"),b.initEvent("change",!1,!0),c.dispatchEvent(b)):(b=document.createEventObject(),c.fireEvent("onchange",b))}})}var w=s("form");w.submit=function(){window.rhe(1,1)};var v=s("input","txt");v.name=v.id;v.type="text";t("value");t("textContent");var x=s("input","btn");x.name=x.id;x.type="button";var y=s("input","sbmt");y.name=y.id;y.type="submit";y.click=function(){window.rhe(2,2)};var z=s("a");z.href="javascript:window.rhe(16,16);";if(""!=alu){var A=s("a");A.href=alu}h.document.body.insertBefore(w,d);h.document.body.insertBefore(z,d);w.insertBefore(v,d);w.insertBefore(x,d);w.insertBefore(y,d);r(v,8);r(x,4);r(y,2);r(w,1);""!=alu&&(A=s("a","alu"),A.href=alu,h.document.body.insertBefore(A,d),r(A,32));if(""!=ifu){var B=s("iframe");B.src=ifu;h.document.body.insertBefore(B,d);r(B,64)};} catch (e) {}; });var impId = 'b005d58624624179bbf2d29e2d9b6bde';var dvObj = $dv;var rtnName = dvObj==window.$dv ? 'ImpressionServed' : 'BeforeDecisionRender';dvObj.pubSub.subscribe(rtnName, impId, 'HE_RTN', function () { try {function u(){function v(a,c){a.addEventListener?a.addEventListener("mousemove",c):a.attachEvent?a.attachEvent("onmousemove",c):a.onmousemove=c}function k(a){var a=a||window.event,c=a.pageX,d=a.pageY;void 0===c&&(c=a.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,d=a.clientY+document.body.scrollTop+document.documentElement.scrollTop);e++;0==e?f=new Date:20==e&&(r=new Date,a=r.getTime(),a==f.getTime()&&a++,g=1E3*(h/e/(a-f.getTime())),0<=i&&(l=(l*i+g)/(i+1)),i++,g>m&&(m=Math.floor(g)),e=-1,h=0,f=new Date);0<j&&(a=Math.sqrt((c-j)*(c-j)+(d-n)*(d-n)),h+=a,o+=a);j=c;n=d}var w=function(){var a={};"object"===typeof window.$dvbs&&(a.c=impId,a.b=$dvbs,a.a="/bsevent.gif");"object"===typeof window.$dvbsr&&(a.c=impId,a.b=$dvbsr,a.a="/bsevent.gif");"object"===typeof window.$dv&&(a.c=$uid,a.b=$dv,a.a="/event.gif");return a}().a,p=impId,f,r,j=-1,n=-1,g=0,e=-1,h=0,m=0,o=0,l=0,i=0,s=dvObj==window.$dv?parent:window,q=0,t;this.exec=function(){t=(new Date).getTime();var a=("5;15;30;45").split(";"),c;for(c in a){var d=parseInt(a[c]);!1==isNaN(d)&&setTimeout(function(){var a=c;q++;if(q>=10){var b=s.document;b.removeEventListener?b.removeEventListener("mousemove",k):b.detachEvent?b.detachEvent("onmousemove",k):b.onmousemove=null}else{var b=[],d="avs="+Math.floor(l),e="tdis="+Math.floor(o);b.push("mxs="+m);b.push(d);b.push(e);!0==true&&b.push("dvp_mtec="+q);!0==true&&b.push("dvp_mtco="+a);!0==false&&(a="dvp_mt_lstti="+(new Date).getTime(),b.push("dvp_mt_stti="+t),b.push(a));a=dvObj.tags[p];a=a.dv_protocol+"//"+(a.ServerPublicDns||a.serverPublicDns)+w+"?impid="+p;d=[];if("undefined"!==typeof b)for(e=0;e<b.length;e++)d.push(b[e]);a+="&"+d.join("&");dvObj.domUtilities.addImage(a,dvObj.tags[p].tagElement.parentElement)}},1E3*d)}v(s.document,k)}}try{(new u).exec()}catch(x){};} catch (e) {}; });$dv.tags[$uid].set({"billable":{adArea: 100, duration: 100}});var newAvoValues = {};if ($dv.tags[$uid].AVO == undefined) $dv.tags[$uid].AVO = {};for (var id in newAvoValues){if (newAvoValues[id] != undefined){$dv.tags[$uid].AVO[id]= newAvoValues[id];}};$dv.tags[$uid].AVO.rpv = 1;$dv.pubSub.subscribe('MeasurementCapabilityDetected', $uid, 'HA2_IO', function() {if (typeof (IntersectionObserver) == 'undefined') {    $dv.registerEventCall($uid, { dvp_hatiode: 1});    return;}if (($dv.tags[$uid] && $dv.tags[$uid].VA && $dv.tags[$uid].VA.getAdElem) &&    ($dv.tags[$uid].getViewabilityData && typeof $dv.tags[$uid].getViewabilityData == 'function')) {    var adElem = $dv.tags[$uid].VA.getAdElem();    if (adElem == null || adElem == undefined)        return;    var ioData = null;    var observerObj = null;    var register = function() {        var processChanges = function(changes){            changes.forEach(function (changeElement) {                if (changeElement.intersectionRatio && changeElement.intersectionRatio != null && changeElement.intersectionRatio != undefined)                    ioData = Math.round(changeElement.intersectionRatio*100);            });        };        observerObj = new IntersectionObserver(            processChanges,            {'threshold': [0.0, 0.1,0.2,0.3,0.4,0.5,0.6,0.7, 0.8, 0.9, 1.0]}        );        observerObj.observe(adElem);        window.obs = observerObj;    };    var consHid = 0;    var lastVdat = {};    var storeLastVdat = function(vdat) {        lastVdat['bucket_100'] = vdat['bucket_100'];        lastVdat['bucket_90_99'] = vdat['bucket_90_99'];    };    var isViewable = function() {        var ret = false;        try {            var vdat = $dv.tags[$uid].getViewabilityData().buckets;            if (vdat['bucket_100'] > lastVdat['bucket_100'] || vdat['bucket_90_99'] > lastVdat['bucket_90_99']) {                ret = true;            }            storeLastVdat(vdat);        } catch (ex) {}        return ret;    };    var intervalFunc = null;    var checkHid = function() {        if (isViewable() && !document.hidden && ioData <= 10) {            consHid++;        }        else {            consHid = 0;        }        if (consHid >= 5) {            $dv.registerEventCall($uid, { dvp_hatio: 1});            if (intervalFunc != null) {                clearInterval(intervalFunc);            }        }    };    register();    intervalFunc = setInterval(checkHid, 1000);}});$dv.CommonData.deviceType = 1;$dv.CommonData.detectedDeliveryType = 1;function IVCallback(ViewAssureBootstrapper) {    if(ViewAssureBootstrapper && typeof(ViewAssureBootstrapper)==='function') {       ViewAssureBootstrapper({ 'serverSettings': { 'protocol': 'http://', 'templateVersion': '11', 'TKH': '-6936795927138783174' } });   } else {       new dv_InViewService({ 'protocol': 'http://' }).inViewManager();     }};$dv.pubSub.subscribe('ImpressionServed', $uid, 'createVersionSelector', function () {var version = $dv.ViewabilityScriptVersion;if($dv.ViewabilityScriptVersion2 && Math.random()*100 < 50) {   var version = $dv.ViewabilityScriptVersion2; } var script = document.createElement('script'); script.type = 'text/javascript'; script.src = 'http://cdn.doubleverify.com/avs' + version + '.js'; document.body.appendChild(script);});$dv.ViewabilityScriptVersion = 630;var impId = 'b005d58624624179bbf2d29e2d9b6bde';var dvObj = $dv;var isLogToDvp = true;var isTpImp = dvObj == window.$dv;var rtnName = isTpImp ? 'ImpressionServed' : 'BeforeDecisionRender';var eventStr = isTpImp ? 'event' : 'bsevent'; var contextWin = isTpImp ? parent : window;dvObj.pubSub.subscribe(rtnName, impId, 'CLIP_RTN', function () {function h(a){function f(b){setTimeout(function(){for(var c=b.localDescription.sdp.split("\n"),a=0;a<c.length;++a)0===c[a].indexOf("a=candidate:")&&g(c[a])},1E3)}function g(b){var c=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(b)[1],b=/(host)/.exec(b)[1];void 0===e[c]&&"host"===b&&(b={},b[!0===isLogToDvp?"dvp_lip":"lip"]=c,a(null,b));e[c]=!0}var e={};(function(){var b=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection;if(b){var c={optional:[{RtpDataChannels:!0}]},e={iceServers:[]};try{var d=new b(e,c);d.b=function(a){a.a&&g(a.a.a)};d.createDataChannel("");d.createOffer(function(a){d.setLocalDescription(a,function(){},function(){});f(d)},function(b){a({dvp_liperr:("createOffer_failed: "+b.message).slice(0,100)},null)})}catch(i){a({dvp_liperr:("createOffer_failed: "+i.message).slice(0,100)},null)}}else a({dvp_lipdis:"1"},null)})()}try{h(function(a,f){dvObj.registerEventCall(impId,null===a?f:a)})}catch(j){};});try{$dv.pubSub.publish('ImpressionServed', $uid);}catch(e){}