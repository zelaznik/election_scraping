atwpjp([460],{830:function(t,e,n){function o(t){return/(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(t)}function r(t){var e=new Array;t:for(var n=0;n<t.length;n++){for(var a=0;a<e.length;a++)if(e[a]==t[n])continue t;e[e.length]=t[n]}return e}function s(t){var e,n=window.onkeydown||function(){},a=function(e){t(e),n(e)};j.msi?(e=document.onkeydown,document.onkeydown=function(){a(),null!==e&&e()}):(e=window.onkeydown,window.onkeydown=function(t){a(t),null!==e&&e()})}function c(t){if(p(t)){var e=C(!0),n=M();m(t),x(t,e[0]-n),y(t,e[1]-n)}}function u(t,e){t&&t.value&&t.value.length>e&&(t.value=t.value.substring(0,e))}function l(t,e,n){return t.length>e&&(t=t.slice(0,e-1),n&&t[t.length-1]!=n&&t.push(n)),t}function d(t){if(t._e)return!0;for(var e in t)if("_e"!=e&&t.hasOwnProperty(e))return delete t._e,!1;return t._e=1,!0}function p(t){return"string"==typeof t&&(t=document.getElementById(t)),t}function h(t,e,n,a){return"<div "+(1===n?"class":"id")+'="'+t+'"'+(0===e?' style="display:none"':"")+(a?a:"")+">"}function f(t,e,n){t=p(t),t&&t.style&&(t.style[e]=n)}function g(t,e,n){n||f(t,"display","none"),e&&f(t,"visibility","hidden")}function m(t,e,n){n||f(t,"display","block"),e&&f(t,"visibility","visible")}function A(t,e){t=p(t),t&&(t.className?-1==t.className.indexOf(e)&&(t.className+=" "+e):t.className=e)}function v(t,e){if(t=p(t)){if(!t.className)return;-1!=t.className.indexOf(e)&&(t.className=t.className.split(e).join(" "))}}function w(t,e){return t=p(t),t?t.className?-1!=t.className.indexOf(e):!1:void 0}function b(t,e){return t=p(t),t&&t.parentNode&&(t.parentNode.className||"").indexOf(e)>-1}function x(t,e){f(t,"width",e+"px")}function y(t,e){f(t,"height",e+"px")}function _(t){return t=p(t),t?"block"==t.style.display:!1}function C(t){var e=X.documentElement,n=X.body,a=0,o=0,i=0,r=0;return t&&(window.innerHeight&&window.scrollMaxY?(a=n.scrollWidth,o=window.innerHeight+window.scrollMaxY):n.scrollHeight>n.offsetHeight?(a=n.scrollWidth,o=n.scrollHeight):(a=n.offsetWidth,o=n.offsetHeight)),window.self&&window.self.innerHeight?(i=window.self.innerWidth,r=window.self.innerHeight):e&&e.clientHeight?(i=e.clientWidth,r=e.clientHeight):n&&(n.clientWidth||n.clientHeight)?(i=n.clientWidth,r=n.clientHeight):n&&(i=n.clientWidth,r=n.clientHeight),[t!==!0||i>a?i:a,t!==!0||r>o?r:o]}function k(){var t=X.documentElement,e=X.body;return"number"==typeof window.pageYOffset?[window.pageXOffset,window.pageYOffset]:e&&(e.scrollLeft||e.scrollTop)?[e.scrollLeft,e.scrollTop]:t&&(t.scrollLeft||t.scrollTop)?[t.scrollLeft,t.scrollTop]:[0,0]}function E(t){var e=document.documentElement,n=0,a=0,o=0,i=0;do o=/fixed/.test(t.style.position),i|=o,n+=t.offsetTop||0,a+=t.offsetLeft||0,o&&t&&(n+=t.scrollTop,a+=t.scrollLeft),t=t.offsetParent;while(t);return!j.ie6&&e.scrollTop&&i&&(n+=e.scrollTop,a+=e.scrollLeft),[a,n]}function M(){if(q)return q;try{var t=document,e=t.ce("div"),n=t.ce("div"),a=t.getElementsByTagName("body")[0],o=e.style;o.width="50px",o.height="50px",o.overflow="hidden",o.position="absolute",o.top="-200px",o.left="-200px",n.style.height="100px",a.appendChild(e),e.appendChild(n);var i=n.innerWidth;e.style.overflow="scroll";var r=n.innerWidth;e.removeChild(n),a.removeChild(e),q=i&&r?i-r:20}catch(s){q=20}return q}function S(t){t&&(t.cancelBubble=!0,t.preventDefault&&t.preventDefault())}var R,D,I=n(785),O=n(86),N=n(831),z=(n(87),n(9)),B=n(110),T=n(832),U=n(784),j=n(10),V=n(77),P=n(833),L=n(835),Q=n(836),F=O(),H=n(837),G=n(114),Y=n(838),K=function(t){t||(t=window.event||event),t.keyCode?_ate.maf.key=t.keyCode:t.which&&(_ate.maf.key=t.which)},J=function(t){t||(t=window.event||event),t.keyCode?_ate.maf.key=t.keyCode:t.which&&(_ate.maf.key=t.which)},W=function(){9===_ate.maf.key?_ate.maf.key=null:(_ate.maf.key=null,addthis_close())},Z=function(t,e){return e||(e=window.event||event||{}),T(e),addthis_sendto(t)};_ate.maf=_ate.maf||{};var q=j.msi?20:void 0;if(!window._atw){var X=(Q.getPopServices(),document);!function(){var t,e=document.compatMode,n=1;e&&("BackCompat"===e?n=2:"CSS1Compat"===e&&(n=0),j.mode=n,j.msi&&(j.mod=n,2!=n&&!j.ie6||window.addthis_do_ab||(t=window.onscroll?window.onscroll:function(){},window.onscroll=function(){_atw&&_atw.fpf(),t()})))}(),window._atw={ver:300,show:1,uus:function(){_atw.uusf||(_ate.track.cev("uus",1),_atw.uusf=1)},ujq:function(){return!j.ie6&&!j.ie7&&!j.ie8&&"function"==typeof window.jQuery},css:{},conf:{},data:{auth:{},contacts:{all:{},origin:{}}},fe:null,plo:[],pla:function(){for(;_atw.plo.length>0;){var t=_atw.plo.pop();addthis_open(t[1],t[2],t[3],t[4],t[5],t[6])}},gps:function(t){_atw.evar();var e=window.addthis_options;t(e?e.replace(",more","").split(","):[])},ibt:function(){if(_atw.bti)return _atw.bti;var t=(window.addthis_product||"men").substr(0,3),e="bkm"==t||"bmt"==t||"fct"==t||"fxe"==t;return e&&(_atw.bti=e),e},lfy:0,fpf:function(){if(j.ie6||j.msi&&2==j.mod){var t=document,e=t.documentElement,n=t.body,a=p(_atw.did),o=p("at16p"),i=e&&"undefined"!=typeof e.scrollTop,r=n&&"undefined"!=typeof n.scrollTop,s=!1,c=p("atie6ifh"),u=i&&r?Math.max(e.scrollTop,n.scrollTop):i?e.scrollTop:n.scrollTop;if(u+=10,u!=_atw.lfy){if(_atw.lfy=u,o&&(o.style.top=u+"px"),a&&a.className&&a.className.indexOf("mmborder")>-1){var l=0,d=C();l=o&&""!=o.style.marginTop?o.style.marginTop.split("px").shift():Math.max(0,d[1]/2-222.5),a.style.top=u-10+l+"px",s=!0}c&&j.ie6&&(c.style.top=(s?0:290)+u+"px")}}},rev:"$Rev$",lang:function(t,e){var a;if(a=P(!1,e,t),a===!1){var o=n(839);a=o[e]}return a},rss:{aol:"AOL",bloglines:"Bloglines",google:"Google Reader",mymsn:"My MSN",netvibes:"Netvibes",newsisfree:"Newsisfree",pageflakes:"Pageflakes",yahoo:"Yahoo"},emb:{dashboard:"Dashboard",windows:"Windows"},list:U(H.list),ibm:function(){var t=(_atw.conf||{}).product||window.addthis_product||"";return w(_atw.did,"mmborder")||t.indexOf("bkm")>-1},ics:function(t,e){var n,a,o,i;if(_atw.custom_list)return _atw.custom_list[t];if(e.services_custom){_atw.custom_list={},n=e.services_custom;for(o in n)a=n[o],_atw.custom_list[a.code]=a,t===a.code&&(i=a);return i}return!1},sag:function(){_ate.as(_atw.ibm()?"bkmore":"more")},hkd:function(t){"undefined"==typeof t&&(t=window.event),t&&27==t.keyCode&&(_atw.clb(),S(t))},filt:function(t,e,n,a,o,i){var r,s,c=0,u=a||"ati_",l=o||"at16nms",d=i||"div",h=""!=t?t.replace(/\W+/g,"").replace(/ /g,"").toLowerCase():"";g(l),n&&m(n);for(r in e)if("string"==typeof e[r]){var f=p(u+r.replace("@","_")),A=r.toLowerCase(),v=e[r].toLowerCase(),w=0;(A.indexOf(t)>-1||A.indexOf(h)>-1||v.indexOf(h)>-1||v.indexOf(t)>-1)&&(w=1,c++),!s&&f&&(s=f.parentNode),w?m(f):g(f)}if(c&&s){c=0;var b=s.getElementsByTagName(d);for(r in b)b[r].style&&"block"==b[r].style.display&&c++}0===c&&(m(l),n&&g(n)),""==t.replace(/ /g,"")&&n&&g(n)},div:null,xwa:function(){null!==_atw.cwa&&clearTimeout(_atw.cwa)},cwa:null,xhwa:function(){null!==_atw.hwa&&clearTimeout(_atw.hwa)},hwa:null,ost:!1,get:function(t){return"string"==typeof t&&(t=document.getElementById(t)),t},did:"at15s",rhv:function(t){t&&t.className&&(t.className=t.className.replace("athov",""))},shv:function(t){t&&-1==t.className.indexOf("athov")&&(t.className+=" athov")},addImg:function(t){if(t=t.getElementsByTagName("div")[0],t&&!(t.getElementsByTagName("img").length>0)){a=_ate;var e=document.createElement("img");e.align="left",e.src="//s7.addthis.com/images/60x60_at_"+(a.bro.ffx?"firefox_toolbar.jpg":a.bro.msi?"ie_toolbar.gif":a.bro.chr?"ch_extension.gif":"sf_extension.gif"),t.insertBefore(e,t.firstChild)}},eok:function(t){var e=_atw.ver>=200,n=p("at_"+(e?"success":"send")),a=e?p("at_promo"):n;if(g("at_sending"),e)t?_atw.err(_atw.lang(F,48),null,"at_error"):addthis_do_ab?(_atw.ppr=!0,_atw.cle(),a&&!_ate.dbm&&(_atw.addImg(a),m(a)),m(n)):(a&&!_ate.dbm&&(_atw.addImg(a),m(a)),m(n),g("at_captcha"),_atw.cle());else{var o=_atw.lang(F,13);-1==o.indexOf("&")&&(n.value=o)}_atw.cwa=setTimeout(_atw.clo,1200),_ate.gat&&_ate.gat("email",null,_atw.conf,_atw.share)},roe:function(t){g("at_sending"),_atw.cle(),_atw.ver>=200&&_atw.err(_atw.lang(F,46).replace('href="#"','href="'+t+'"'),null,"at_error")},ert:function(t,e,n){n||(n="at_error");var a=p(n);a.innerHTML=t||_atw.lang(F,33),m(a),e&&(e.style.borderColor="#dd0000")},err:function(t,e,n){var a=_atw.ver>=200;null===_atw.fe&&e&&(_atw.fe=e,e.focus(),a?(e.style.outlineStyle="none",e.style.outlineWidth="0px"):alert(t)),a&&setTimeout(function(){_atw.ert(t,e,n)},50)},mck:0,cef:function(){var t=_atw.mck<2||_atw.ibm();return addthis_do_ab?t?_ate.com("cef"):_ate.com("cle"):t?_atw.clb():_ate.as("more"),!1},cle:function(){var t=_atw.ver>=200?"":"15",e=p("at_msg"+t),n=p("at_to"+t);e&&(e.value=addthis_email_note||_atw.conf.ui_email_note||""),n&&(n.value=_atw.conf.ui_email_to||""),g("at16pit")},rse:function(t){var e=_atw.ver,n="at_from"+(200>e?"15":""),a="at_to"+(200>e?"15":""),o=p(a),i="at_"+(200>e?"send":"success"),r=_atw.lang(F,11),s=function(t){t=p(t),t&&(t.style.borderColor=t.style.outlineWidth=t.style.outlineStyle="")};200>e&&-1==r.indexOf("&")&&(p(i).value=r),o&&", "==o.value.substr(o.value.length-2)&&(o.value=o.value.substr(0,o.value.length-2)),s("at_ab_user"),s("at_ab_pass"),g("at_ab_error"),g("at_error"),g("at16eatdr"),g("at_captcha"),t||(s(n),s(a),g(i),g("at_promo"))},lml:u,clo:function(){var t=p(_atw.did),e=(_atw.ver,document.gn("embed"));if(t&&(g(t),j.ie6&&g("atie6cmifh"),g("at_pspromo",1)),e&&_atw.conf&&_atw.conf.ui_hide_embed)for(i=0;i<e.length;i++)e[i].addthis_hidden&&(e[i].style.visibility="visible");return _atw.sta&&"compact"==_atw.sta&&(_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:_atw.sta}),_atw.sta=null),!1},hash:window.location.hash,psp:function(){if((j.msi||j.ffx||j.chr||j.saf||_atc.sjp)&&!j.ipa&&!_atw.addthis_popup_mode){if(_atw.mck<1){var t=(p("at15ptc"),p(_atw.did));p("at15s_brand");if(g("at_hover"),!(_ate.sau||{}).gat){var e=(document.getElementById("at_testpromo_bg")||{}).style;e&&(e.background="url(//s7.addthis.com/images/btn_"+(j.saf?"saf_dl120.gif":j.chr?"ch_dl120.gif":j.msi?"ie_dl129x51.jpg":"ff_dl120.jpg")+")",j.saf?(e.width="120px",e.height="47px"):j.msi&&(e.marginBottom="-12px"))}m("at_pspromo",1),m(t),c("at16lb")}else _atw.clb();j.msi&&"BackCompat"==document.compatMode?g("atic_auth",!0,!0):g("atic_auth"),v("at15s","at-menu-auth")}},clb:function(){return _atw.mck=0,_atw.addthis_popup_mode?window.close():window.addthis_do_ab?_ate.com("clb"):(g("at_complete"),g("at16lb"),g("at_promo"),g("at_pspromo",1),g("at16p"),g("at15s"),v("at15s_head","at15s_head_success"),g("atie6ifh"),g("atie6cmifh"),g("at15s"),(_ate.maf||{}).pre&&_ate.maf.pre.focus()),_atw.sta&&"compact"!==_atw.sta&&(_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:_atw.sta}),_atw.sta=null),!1},sho:function(t,e){var n=(_ate,_atw.ver),a=n>=200||"bkemail"==t||_atw.ibm(),o="at16lb",i="at_hover",r="at_feed",s="at_share",u="at16psf",l=p("at16pit"),d=p(_atw.did),h=p("atie6ifh"),f=p("at16p"),w=p("at_to"),b=p("at"+(a?16:15)+"ptc"),_=!1,k=!1;if(g(s),g(r),g(u,1),g("at_copylink",1),g("at16abifc"),g("at_error"),g(i),a&&(g(d),g(l,1),g("at_promo"),g("at_success"),g("at_pspromo",1),v("at15s_head","at15s_head_success")),"feed"==t)g(s),A(r,"atused"),m(r),b.innerHTML=addthis_caption_feed,_=!0;else if("share"==t||""===t||"bkmore"==t)"bkmore"==t?(_=k=!0,A(_atw.did,"mmborder")):(t="share",d.style.display="",v(_atw.did,"mmborder")),g(f),_atw.conf.ui_use_vertical_menu&&g("at15s_head"),m(i),j.ipa&&c("at16lb"),b&&(b.innerHTML=addthis_caption_share);else{if(_atw.mck++,"link"==t){b&&(b.innerHTML="Permalink");var E=document.createElement("iframe");E.src=e,E.frameBorder="0",E.height="353px",E.width="295px",p("at_copylink").innerHTML="",p("at_copylink").appendChild(E),m("at_copylink",1)}else if("more"!==t){if("bkemail"==t||_atw.ibm()?(A(_atw.did,"mmborder"),g("at_use_addr"),g(l,1),k=!0):a&&m("at_use_addr"),-1==t.indexOf("email")&&(t="email"),_atw.rse(),n>=200&&(m("at16abifc"),window._atab&&(_atab.plda(),_atw.ppr&&(_atw.ppr=!1,_atw.conf.ui_use_addressbook&&(_atab.opp(),_atab.opp())))),n>=200&&(g(s),k||m(l,1),window._atab)){var S=_atab.ipo();l&&(l.innerHTML="&"+(S?"l":"r")+"aquo;")}b.innerHTML=addthis_caption_email,"emailab"==t&&_atab.opp()}else g("at_captcha"),m(s),m(u,1),b&&(b.innerHTML=addthis_caption_share);_=!0}if(_&&n>=200||k){var R="bkmore"==t||"link"==t;if(m(o),addthis_do_ab)f.style.marginTop=0,f.style.marginLeft=0,f.style.top=0,f.style.left=0;else{var D=C(!0),I=C(),O=M();x(o,D[0]-O),y(o,D[1]-O),!R||a?f.style.marginTop=Math.max(0,I[1]/2-222.5)+"px":d.style.display=""}if(!R&&(j.ie6&&m(h),m(f),window.addthis_do_ab||_atw.fpf(),"more"==t)){x(f,300),x("at16abifc",300);var N=p("at16filt");N&&"none"!=N.style.display&&N.focus()}"email"==t&&w&&w.focus()}if(_atw.show-->0){var z=_atw.conf.services_compact_org||"",B=z.split(",").length,T=0,U=0,V=window.addthis_ssh;V&&_atw.csl&&(V=V.split(_atw.csl).shift().replace(/,$/,"")),V||_atw.crs||!z||z===addthis_options_default?V&&V!==_atw.crs&&(T=window.addthis_ssh):U=B,_ate.ed.fire("addthis-internal.compact",window.addthis||{},{svc:t,cmo:U,cso:T,crs:_atw.crs,pco:_atw.conf.product||addthis_product})}},dut:function(t,e){var n=(t||"").toLowerCase(),a=(e||"").toLowerCase();return addthis_url=t,addthis_title=e,(""===n||"[url]"===n||"<data:post.url/>"===n)&&(addthis_url=location.href),(""===a||"[title]"===a||"<data:post.title/>"===a)&&(addthis_title=document.title),[addthis_url,addthis_title]},menu:function(t,e,a,o){var i=_ate,c=document,u=(a||_atw.share.url||"").toLowerCase(),d=((o||_atw.share.title||"").toLowerCase(),V(),n(840));if("feed"==e&&u.length&&(_atw.share.url="feed://"+(a||_atw.share.url)),_atw.ost){var m=p("at15s_brand"),x=p("at16_brand"),y=_atw.conf.ui_cobrand,_=p("at15ptc"),M=_atw.conf.ui_header_color,S=_atw.conf.ui_header_background;m&&(m.innerHTML=y),x&&(x.innerHTML=y),_&&(_.innerHTML=window.addthis_caption_share),f("at15s_head","backgroundColor",S),f("at16pt","backgroundColor",S),f("at16ptx","color",M),f("at16pt","color",M),f("at16ptc","color",M),f("at15s_brand","color",M),f("at16ptc","color",M),_atw.conf.ui_use_close_control?(A("at15s_brand","at15s_brandx"),v("at15sptx","at15dn")):(v("at15s_brand","at15s_brandx"),A("at15sptx","at15dn"))}else{if(s(_atw.hkd),!_atc.ostm){if(!window.addthis_product||0!==window.addthis_product.indexOf("f"))for(it in window.addthis_conf)_atc[it]=window.addthis_conf[it];for(it in window.addthis_config)"product"!=it&&"services_compact"!=it&&(_atw.conf[it]=window.addthis_config[it]);_atc.ostm=1}_atw.ti=1;var R,I,O,z,T="</div>",U=(window.addthis_feed||(_atw.share.url?_atw.share.url.indexOf("feed://")>-1:!1)||_atw.hf,_atw.conf.ui_header_background),P=""!=U?' style="background-color:'+U+'"':"",L=_atw.conf.ui_header_color,Q=(window.addthis_ssh?addthis_ssh.split(","):[],""!=L?' style="color:'+L+'"':""),H=window.addthis_caption_share,q=(_atw.conf.services_exclude||"").replace(/\s/g,"").replace(/\*/,""),X=_atw.conf.product||window.addthis_product,$=_ate.cookie.rck("_atfrom"),tt={},et="";if(q)for(var nt=q.split(","),at=0;at<nt.length;at++)tt[nt[at]]=1;_atw.excluded=tt;var ot=(_atw.conf.services_compact||addthis_options_default).replace(/\s/g,"").replace(/\*/,"");""===V()&&-1==X.indexOf("ffext")&&-1==X.indexOf("fxe")&&(ot=ot.replace(/^email(?:,)|,email/g,"")),ot=ot.split(",");for(var it=0;it<ot.length;it++)if(it<ot.length-1&&"more"===ot[it]){var rt=ot.splice(it,1);ot.push(rt[0]);break}ot=r(ot),H==_atw.lang(F,1)&&"feed"==e&&(H=_atw.lang(F,14));var st=_atw.list,ct=_atw.conf.services_expanded||[],ut=0;if(_atw.conf.services_expanded)ct=ct.replace(/ /g,"").split(",");else for(var R in st)"string"!=typeof R||tt[R]||ct.push(R);for(ct.sort(function(t,e){if("string"==typeof st[t]&&"string"==typeof st[e]){var n=(st[t]||"").toLowerCase(),a=(st[e]||"").toLowerCase();return(n>a?1:n==a?0:-1)||0}return 0}),it=0;it<ct.length;it++)R=ct[it],z=_atw.css[R],O=st[R],"string"!=typeof O||tt[R]||ut++;var lt=!j.ipa&&_atw.conf.ui_use_vertical_menu;lt&&(D=D.replace('id="','class="atm-f'+(j.msi&&j.mod?" atm-f-iemode2":"")+'" id="'));var dt=h("at15s_head",1,0,P)+'<span id="at15ptc"'+Q+">"+addthis_caption_share+"</span><span "+(_atw.conf.ui_use_close_control?'class="at15s_brandx" ':"")+'id="at15s_brand"'+Q+">"+_atw.conf.ui_cobrand+'</span><a id="at15sptx" '+(_atw.conf.ui_use_close_control?"":'class="at15dn" ')+'href="#" onclick="return _atw.clb()"'+Q+' onkeydown="if(!e){var e = window.event||event;}if(e.keyCode){_ate.maf.key=e.keyCode;}else{if(e.which){_ate.maf.key=e.which;}}if(_ate.maf.key==9){ addthis_close(); _ate.maf.sib.tabIndex=9001;_ate.maf.sib.focus();}else{/*alert(_ate.maf.key)*/} _ate.maf.key=null" tabindex="9000" >X</a>'+T,pt=i.bro.msi,ht=i.bro.chr,ft=i.bro.saf,gt=pt?"Internet&nbsp;Explorer":ht?"Chrome":ft?"Safari":"Firefox",mt=function(t){return"http://"+_atd+(ft?"tools/safari?":pt?"tools/internet-explorer?":"landing?"+(ht?"to=chrome&amp;":"to=ffext&amp;"))+"utm_source=ps&amp;utm_medium="+(t?t:"link")+"&amp;utm_content=AT"+(pt?"IE":ht?"CH":ft?"SF":"FF")+"&amp;utm_campaign=ATSP"+(pt?"I":ht?"C":ft?"S":"F")+"4_DL"},At=h("at_pspromo",0);if((i.sau||{}).gat){var vt="?utm_source=Promo&utm_medium=link&utm_campaign=at_ra&utm_content=ATPS"+(i.bro.ffx?"FF":i.bro.msi?"IE":i.bro.chr?"CR":"SF")+"_DL";At+='<div style="float:left; text-align:center; margin:20px 0 0 -1px; width:150px"><span style="font-size:12px; color:#4c4c4c; font-weight:normal; line-heig">Know what your users are<br>sharing, in real time.</span>',At+='<a href="http://www.addthis.com/analytics'+vt+'" target="_blank"><img src="//s7.addthis.com/static/t00/ata_60.png" style="border:none; display:block;margin:15px 0 0 0" /></a>',At+=T}else At+='<div style="position:absolute;display:block;border:0">    <div id="at_testpromo" style="display:block"><div class="at-promo-single" align="center">    <h4>'+_atw.lang(F,42).replace("Firefox",gt)+'</h4>    <div align="center"><a target="_blank" href="'+mt("img")+'">      <div id="at_testpromo_bg" class="at-promo-single-dl-'+(ft?"sa":ht?"ch":pt?"ie":"ff")+'" border="0" alt="'+_atw.lang(F,43)+'"></div></a>'+(i.bro.ie6||i.bro.ie7||i.bro.ff2?"":(_atw.ver<300?"<br>":"")+'<a target="_blank" href="http://'+_atd+'pages/toolbar-preferences" style="'+(pt&&2==i.bro.mod&&lt?"position:absolute;left:35px;top:125px":"padding-top:10px")+';font-size:10px">'+_atw.lang(F,44)+"</a>")+"</div></div>    </div></div>";At+=T;for(var wt,bt,xt="ja,fr,he,it,af,ga,el,tl,ro,ru,ms,mk,az,zh,sq,te,be,ta,uk,ml,eu,se,su,aze,gre,tra,fre,gdh,jpn,mac,mak,msa,may,ron,rum,rus,tam,tgl,ukr,zho",yt=(window.addthis_ssh||"").split(","),_t={},Ct=[],it=0;it<yt.length;it++)_t[yt[it]]=1;ot=j.ipa?l(ot,7,"more"):lt?l(ot,8,"more"):l(ot,12,"more");for(var it=0;it<ot.length;it++){R=ot[it],z=_atw.css[R];var kt=N(),Et=R.split("_").shift(),Mt=_t[Et]||_t[R];if(R in _atw.list){if(O=_atw.list[R],tt[R]||"string"!=typeof O)continue;if(I=z?Y(R,z):G({code:R,alt:O,title:O}),!I)continue;if("email"!==R||""!==V()||X.indexOf("ffext")>-1||X.indexOf("fxe")>-1){if(lt)wt=d.a(I,d.span(_atw.list[R]+("more"===R&&-1===xt.indexOf(kt)?" ("+ut+")":"")).css("at-label",Mt?" at_bold":"","at-size-16")).id("atic_"+R).href("#"),bt=wt.element,bt.addEventListener?(bt.addEventListener("keypress",K,!1),bt.addEventListener("keydown",J,!1),bt.addEventListener("blur",W,!1),bt.addEventListener("click",B(Z,null,R),!1)):bt.attachEvent&&(bt.attachEvent("onkeypress",K),bt.attachEvent("onkeydown",J),bt.attachEvent("onblur",W),bt.attachEvent("onclick",B(Z,null,R)));else{if("link"===R&&j.ie9)continue;wt=d.a(I,d.span(_atw.list[R]+("more"===R&&-1===xt.indexOf(kt)?" ("+ut+")":"")).css("at-label")).id("atic_"+R).href("#").css("at_item "+(j.ipa?"addthis_16x16_style ":"")+(Mt?" at_bold":"")+" at_col"+it%2).attr("onclick","return addthis_sendto('"+R+"');").attr("onmouseover",i.bro.ffx&&2!=i.bro.mode||i.bro.ipa?"":"_atw.shv(this)").attr("onmouseout",i.bro.ffx&&2!=i.bro.mode||i.bro.ipa?"":"_atw.rhv(this)").attr("tabindex",it+2)}Ct.push(wt),0===it&&(_ate.maf.firstCompact="atic_"+R)}}}Ct.push(d.div().style("clear:both;"));var St=D.replace("mm","hm"),Rt=d.div().id("at20mc").style("z-index:1000000;position:static").css(j.ipa?"ipad":"").html(et).element,Dt=d.div(Ct).id("at_hover").css(lt?"atm-s":"").style("display:none;"),It=d.div(d.div().html(dt).element.firstChild,d.div().html(At).element.firstChild,Dt,d.div().html(St).element.firstChild);lt?It.css("atm-i"):It.id(_atw.did+"_inner");var Ot=d.div(It).id(_atw.did).css((j.ie6?_atw.did+(lt?"atm":"")+"ie6":j.msi&&j.mod&&!lt?"atiemode2":"")+(lt?" atm":"")).attr("onmouseover","_atw.xwa()").attr("onmouseout","if (this.className.indexOf('border')==-1) addthis_close()").style("z-index:1000000;position:absolute;display:none;visibility:hidden;top:0px;left:0px;").element;Rt.appendChild(Ot),c.body.appendChild(Rt);var it=p("at_from");it&&(it.value=addthis_do_ab?addthis_efrom||$||"":$||_atw.conf.ui_email_from||"")}_atw.xwa(),_atw.dut(a,o);var Nt,zt,Bt,Tt=16;t.getElementsByTagName&&(Nt=t.getElementsByTagName("img"),zt=t.getElementsByTagName("span")),Bt=b(t,"addthis_counter")&&zt&&zt[0],Nt&&Nt[0]?(t=Nt[0],Tt=0):Bt||w(t,"addthis_button")&&zt&&zt[0]?(t=zt[0],Tt=0):(i.bro.saf||i.bro.chr)&&t.childNodes&&1==t.childNodes.length&&3==t.childNodes[0].nodeType&&(Tt=0);var Ut=offLeft=void 0;if(Ut="undefined"!=typeof(window.addthis_config||{}).ui_offset_top?(window.addthis_config||{}).ui_offset_top||0:_atw.conf.ui_offset_top||0,"undefined"!=typeof(window.addthis_config||{}).ui_offset_left?offLeft=(window.addthis_config||{}).ui_offset_left||0:offLeft=_atw.conf.ui_offset_left||0,_atw.sho(e,a),"email"!=e&&"feed"!=e&&"more"!=e&&"bkemail"!=e&&("email"!=e||!w(_atw.did,"mmborder"))){var jt=(E(t),void 0!=offLeft?offLeft:_atw.conf.ui_offset_left),Vt=void 0!=Ut?Ut:_atw.conf.ui_offset_top,Pt=0,Lt=0,Qt=C(),Ft=k(),Ht=p(_atw.did)||{style:0},Gt=Ht.style,Yt=j.ie6?p("atie6cmifh").style:null,Kt=_atw.conf.ui_hover_direction||0,Jt=_atw.conf.ui_compact_direction||-1,Wt="bkmore"==e||w(_atw.did,"mmborder"),Zt=-1!=Jt&&1&Jt,qt=-1!=Jt&&2&Jt,Xt=-1!=Jt&&4&Jt,$t=-1!=Jt&&8&Jt;if(0===Gt)return _atw.ost=!0,!1;Gt.display="";var te=Ht.clientWidth,ee=Ht.clientHeight;if(Wt){var ne=p("at16p");Pt=Qt[0]/2-te/2,Lt=ne&&""!=ne.style.marginTop?ne.style.marginTop:Math.max(0,Qt[1]/2-222.5)+"px",Lt=Lt.split("px").shift()-8}else{var ae=t.getBoundingClientRect(),oe=window.scrollY||document.documentElement.scrollTop,ie=window.scrollX||document.documentElement.scrollLeft,re=window.innerHeight||document.documentElement.clientHeight;(0===ae.height||0===ae.width)&&(ae=t.parentElement.getBoundingClientRect());var se=ae.top>.66*re,ce=-1!==Kt&&!$t,ue=se&&ce;if(Xt||1===Kt||ue){var le=Ht.getBoundingClientRect(),de=le.bottom-le.top;Pt=ie+ae.left,Lt=oe+ae.top-de}else Pt=ie+ae.left,Lt=oe+ae.bottom;var pe=Pt-Ft[0]+te+20>Qt[0];(Zt||!qt&&pe)&&(Pt=Pt-te+(t.clientWidth||50))}if((Bt&&((t.parentNode.parentNode.parentNode.parentNode||{}).className||"").indexOf("bar_vertical")>-1||!Bt&&((t.parentNode.parentNode.parentNode||{}).className||"").indexOf("bar_vertical")>-1)&&(Lt+=Ft[1]+(Bt?16:0)),_atw.conf.ui_hide_embed){var he=Pt+te,fe=Lt+ee,ge=c.gn("embed"),me=0,Ae=0,ve=0;for(it=0;it<ge.length;it++)me=E(ge[it]),Ae=me[0],ve=me[1],Pt<Ae+ge[it].clientWidth&&Lt<ve+ge[it].clientHeight&&he>Ae&&fe>ve&&"hidden"!=ge[it].style.visibility&&(ge[it].addthis_hidden=!0,ge[it].style.visibility="hidden")}v("at15s_head","at15s_head_success"),g("at_pspromo",1);var we=_ate.util.parent(t,".addthis_bar"),be=_ate.util.parent(t,".addthis_toolbox"),xe=function(t){return window.getComputedStyle&&null!=t&&t!=document?"fixed"===window.getComputedStyle(t).position:!1};Pt+=parseInt(jt,10),Lt+=parseInt(Vt,10),Gt.left=Pt+"px",xe(be)||xe(we)?Gt.top=Lt+Ft[1]+"px":Gt.top=Lt+"px",Gt.visibility="visible",Yt&&(Yt.left=Gt.left,Yt.top=Gt.top),Wt&&_atw.fpf()}_ate.maf.key="9",_ate.maf&&_ate.maf.sib&&(_ate.maf.sib.tabIndex="1000");try{p("at_hover").getElementsByTagName("a")[0].focus()}catch(ge){}_atw.ost=!0},cpmh:function(t){if(t&&t.origin&&".addthis.com"==t.origin.substr(t.origin.length-12)){var e=p("at16recapframe");switch(t.data){case"reclb":e&&e.parentNode.removeChild(e),_atw.clb();break;case"rerse":g("at_error");break;case"ncr":_atw.err(_atw.lang(F,51),p("at16recapframe")),_atw.cle();break;case"cpe":_atw.err(_atw.lang(F,52),p("at16recapframe")),_atw.cle();break;case"eok":e&&e.parentNode.removeChild(e),_atw.eok()}}},evar:function(){try{var t,e,n=function(t,e,n){return(void 0===t[e]||""===t[e])&&(t[e]=n),t[e]},a=V(),i=_atw.ibt();(!_atw.conf||d(_atw.conf))&&(_atw.conf=window.addthis_config||{});var r=_atw.conf.services_custom;if(_atw.share=_atw.share||window.addthis_share||{},(_ate.bro.xp||_ate.bro.mob)&&delete _atw.list.mailto,n(_atw.conf,"ui_use_vertical_menu",!0),vertical=!j.ipa&&_atw.conf.ui_use_vertical_menu,n(window,"addthis_feed",""),n(window,"addthis_wpl"),_atw.hf=addthis_feed.length>0,n(window,"addthis_caption_email",_atw.lang(F,3)),n(window,"addthis_caption",_atw.lang(F,1)),n(window,"addthis_use_addressbook",!1),n(window,"addthis_do_ab",!1),n(window,"addthis_product","men-"+_atw.ver),_atw.list.settings=_atw.lang(F,47)+"...",_atw.list.more=_atw.lang(F,2),_atw.list.email=_atw.lang(F,4),_atw.list.favorites=_atw.lang(F,5),_atw.list.print=_atw.lang(F,22),n(window,"addthis_popup",!1),n(window,"addthis_popup_mode",!1),n(window,"addthis_url",""),n(window,"addthis_append_data",!a||"addthis"==a.toLowerCase()),n(window,"addthis_brand",""),n(window,"addthis_title",""),n(window,"addthis_content",""),n(window,"addthis_email_note",_atc.enote?_atc.enote:""),n(window,"addthis_email_from",""),n(window,"addthis_email_to",""),n(window,"addthis_use_personalization",!0),n(window,"addthis_options_default",Q.getPopServices().split(",").slice(0,11).join(",")+",more"),n(window,"addthis_options_rank",Q.getPopServices()),n(window,"addthis_options",addthis_options_default),n(window,"addthis_exclude",""),n(window,"addthis_ssh",""),n(window,"addthis_logo",""),n(window,"addthis_logo_background",""),n(window,"addthis_logo_color",""),n(window,"addthis_header_background",""),n(window,"addthis_header_color",""),n(window,"addthis_caption_share",addthis_caption),n(window,"addthis_caption_feed",_atw.lang(F,14)),n(window,"addthis_hide_embed",!1),n(window,"addthis_share",{}),j.ipa&&(addthis_exclude&&-1==addthis_exclude.indexOf("print")&&(addthis_exclude+=","),addthis_exclude+="print"),n(_atw.share,"type","link"),n(_atw.share,"url",addthis_url),n(_atw.share,"title",addthis_title),n(_atw.share,"description",""),n(_atw.share,"swfurl",""),n(_atw.share,"modules",{}),n(_atw.share,"feed",addthis_feed),n(_atw.share,"screenshot",""),n(_atw.share,"author",""),n(_atw.share,"email_template",window.addthis_email_template||""),n(_atw.share,"email_vars",window.addthis_email_vars?"string"==typeof addthis_email_vars?_ate.util.fromKV(addthis_email_vars):addthis_email_vars:{}),n(_atw.conf,"ui_cobrand",addthis_brand),n(_atw.conf,"ui_disable",!1),n(_atw.conf,"ui_508_compliant",!1),n(_atw.conf,"ui_window_panes",!1),n(_atw.conf,"ui_close_control",!_atw.conf.ui_cobrand&&(_atw.conf.ui_click||_atw.ver>=200)),n(_atw.conf,"ui_click",_atw.conf.ui_window_panes),n(_atw.conf,"ui_email_note",addthis_email_note),n(_atw.conf,"ui_email_from",_ate.cookie.rck("_atfrom")||addthis_email_from||""),n(_atw.conf,"ui_email_to",addthis_email_to),n(_atw.conf,"ui_hover_direction",0),n(_atw.conf,"ui_compact_direction",-1),n(_atw.conf,"ui_delay",window.addthis_hover_delay),n(_atw.conf,"ui_hide_embed",addthis_hide_embed),n(_atw.conf,"ui_header_color",addthis_header_color),n(_atw.conf,"ui_header_background",addthis_header_background),n(_atw.conf,"ui_icons",!0),n(_atw.conf,"ui_use_embeddable_services_beta",!1),n(_atw.conf,"ui_use_embeddable_services",_atw.conf.ui_use_embeddable_services_beta),n(_atw.conf,"ui_use_mailto",!1),n(_atw.conf,"ui_use_addressbook",addthis_use_addressbook||i),n(_atw.conf,"ui_use_close_control",_atw.conf.ui_close_control),n(_atw.conf,"ui_open_windows",!1),n(_atw.conf,"ui_show_promo",!0),n(_atw.conf,"data_ga_tracker",null),n(_atw.conf,"data_ga_property",null),n(_atw.conf,"data_omniture_collector",""),n(_atw.conf,"pubid",window.addthis_pub),n(_atw.conf,"username",_atw.conf.pubid),n(_atw.conf,"product",addthis_product),n(_atw.conf,"data_track_clickback",addthis_append_data||_atw.conf.data_track_linkback||_ate.track.ctp(_atw.conf.product)),n(_atw.conf,"services_custom",[]),n(_atw.conf,"services_localize",F),n(_atw.conf,"services_expanded",""),n(_atw.conf,"services_compact_org",_atw.conf.services_compact),n(_atw.conf,"services_exclude",addthis_exclude),_atw.conf.services_exclude=_atw.conf.services_exclude.replace(/\s/g,""),n("_atw.conf, services_exclude_natural",_atw.conf.services_exclude),_atw.conf.parentServices&&z(_atw.conf.parentServices,function(t){_atw.conf.services_exclude+=(_atw.conf.services_exclude.length>1?",":"")+t}),0==_atw.conf.ui_show_promo&&(_ate.dbm=1),_atw.conf.ui_use_embeddable_services||_atw.share.swfurl||_atw.share.swfurl_secure||_atw.share.iframeurl||(!_atw.share.url||_atw.share.url==window.location.href)&&(_ate.share.links.iframe_src||_ate.share.links.video_src))for(e in _atw.emb)_atw.list[e]=_atw.emb[e];else for(e in _atw.emb)_atw.share.modules[e]&&(_atw.list[e]=_atw.emb[e]);if(r)for(_atw.custom_list=_atw.custom_list||{},r instanceof Array||(r=[r]),t=0;t<r.length;t++){var s=r[t];s.name&&s.icon&&s.url&&o(s.url)&&(s.code=s.url=s.url.replace(/ /g,""),0===s.code.indexOf("http")&&(s.code=s.code.substr(0===s.code.indexOf("https")?8:7)),s.code=s.code.split("?").shift().split("/").shift().toLowerCase(),_atw.custom_list[s.code]=s,_atw.list[s.code]=s.name,_atw.css[s.code]={"background-image":"url("+s.icon+")","background-repeat":"no-repeat","background-position":"top left","background-color":"transparent !important","background-size":"16px"},r[t]=s)}else r=[];var c=_ate.share.services.init(_atw.conf)||{};_atw.crs=c.crs,_atw.csl=c.csl,_atw.conf.services_compact=(c.conf||{}).services_compact,n(_atw.conf,"services_compact",addthis_options)}catch(u){window.console&&console.log("evar",u)}return!1}},function(){var t=n(841).getMixin({campaign:"AddThis compact menu"}),e=n(34).isBrandingReduced();D=h("at15pf")+t.generateBranding(e).element.innerHTML+"</div>",R=(h("at15pf")+'<a class="at-privacy-info" target="_blank" href="'+L+' ">'+P("Privacy",24)+"</a>"+t.generateBranding(e).element.innerHTML+"</div>").replace(/15/g,"16").replace(/compact/,"expanded")}(),_ate.menu=n(843)(),addthis.menu=_ate.menu.open,addthis.menu.close=_ate.menu.close,_ate.ao=function(t,e,n,a,o,i,r){if(t===document.body)return _ate.menu.open(t,o,i,r);if(j.iph||j.dro||j.wph)return!0;if(_atw.ver>=250&&(o&&!d(o)&&(_atw.conf=o),i&&!d(i)&&(_atw.share=i)),!_atw.evar()){n&&_ate.usu(n);var s=_atw.dut(n,a);_atw.share||(_atw.share={}),n&&(_atw.share.url=s[0]),a&&(_atw.share.title=s[1]);var c=((n||_atw.share.url||"").toLowerCase(),(a||_atw.share.title||"").toLowerCase(),V(),_atw.conf.ui_delay);if(c&&""===e){if(c=Math.min(500,Math.max(50,c)),_atw.xhwa(),_atw.hwa=null,"hwe"!=t)return _atw.hwe=t,void(_atw.hwa=setTimeout(function(){_ate.ao("hwe",e,n||_atw.share.url,a||_atw.share.title||"")},c));t=_atw.hwe,_atw.hwe=null}return _atw.conf.ui_window_panes===!0?_ate.as("email"==e||"link"==e?e:"more",_atw.conf,_atw.share):"link"==e?_atw.menu(t,e,_atr+"static/link.html#inl=true&url="+_euc(n)+"&ats="+_euc(I(addthis_share))+"&atc="+_euc(I(addthis_config)),a):_atw.menu(t,e,n,a),(!_atw.sta||"expanded"==_atw.sta&&"email"==e)&&("more"==e?e="expanded":e||(e="compact"),!_atw.sta||"email"!=e&&"link"!=e||_ate.ed.fire("addthis.menu.close",window.addthis||{},{pane:_atw.sta}),_atw.sta=e,_ate.ed.fire("addthis.menu.open",window.addthis||{},{element:t,pane:e,url:n,title:a,conf:o,share:i})),!1}},_ate.ac=function(){_atw.xhwa(),_("at_pspromo")||(clearTimeout(_atw.cwa),_atw.cwa=setTimeout(_atw.clo,_atc.cwait))},_ate.as=function(t,e,n){var a,o=U(n),i=U(e);return n=_ate.util.extend(o||{},_atw.share||{}),e=_ate.util.extend(i||{},_atw.conf||{}),a=_ate.util.extend(n,e),_ate.share.cleanly(t,a),!1};for(;_ate.plo&&_ate.plo.length>0;){var $=_ate.plo.pop(),tt=$[0];switch(tt){case"open":addthis_open($[1],$[2],$[3],$[4],$[5],$[6]),_atw.plo.push($);break;case"cout":break;case"send":var et,nt;$.length>2&&(et=$[2],nt=$[3]),addthis_sendto($[1],et,nt);break;case"span":var at=p($[1]);at&&(_atw.evar(),at.innerHTML='<a href="'+_ate.share.genurl("")+"\" onmouseover=\"return addthis_open(this, 'share', '"+$[2]+"', '"+($[3]||"").replace(/'/g,"\\'")+'\')" onmouseout="addthis_close()" onclick="return addthis_to()" class="snap_noshots"><img src="'+_atr+'static/btn/v2/lg-bookmark-en.gif" width="125" height="16" style="border:none;padding:0px" alt="AddThis" /></a>');break;case"deco":_atw.evar(),$[1]($[2],$[3],$[4],$[5]);break;case"pref":_atw.gps($[1])}}_ate.ed.fire("addthis.menu.ready",{atw:_atw}),window.postMessage&&(window.attachEvent?window.attachEvent("onmessage",_atw.cpmh):window.addEventListener("message",_atw.cpmh,!1))}},835:function(t,e,n){t.exports="//www.addthis.com/privacy"},839:function(t,e){"use strict";var n=[["en"],"Bookmark &amp; Share","More...","Email a Friend","Email","Favorites","Multiple emails? Use commas.","To","From","Note","Privacy Policy: We never share your personal information.","Send","Please enter a valid email address.","Message sent!","Subscribe to Feed","Select from these web-based feed readers:","Please don't ask me again; send me directly to my favorite feed reader.","Done","Get your own button!","email address","optional","255 character limit","Print","What's this?","Privacy","Use Address Book","Cancel","Sign in to use your contacts","Username","Password","Remember me","Sign In","Select address book","Error signing in.","Please limit to 5 recipients.","Find a service","No matching services.","Share again.","Sign Out","Getting contacts","Suggest a service","Share successful!","Make sharing easier with AddThis for Firefox.","Download","Don't show these","Sending message...",'We hate spam too! Please <a id="at16ecmc" href="#" onclick="_atw.rse();_atw.cef();return true" target="_blank">click here</a>  to confirm you are a real-live person.',"Settings","Sorry, we couldn't send this email. Please try again in a few minutes.","Please help us prevent spam.","Type the two words:","Please enter a valid response.","Sorry, your response was incorrect. ","Sign in to customize","Subject","Send this email with different services","Type the moving letters","Sign in and make sharing easier","Watch a video","Successfully signed in!","Closing window in XXX seconds...","Customize","Account","Send Email","Feedback","Share an idea, report a bug, or just let us know what you think.","Need help?","Send Feedback","All Available Services","My Favorite Services","Reset services to default","Add","Remove","Save Changes","Personalize AddThis by selecting up to 10 of your favorite places to share.","","","Make sharing easier with the AddThis Toolbar","To stop receiving any emails from AddThis please visit","Sent","Your feedback is very important to us.","Thanks for using AddThis.","Hi","Connect social accounts to activate Instant Share for Twitter and Facebook.","Watch the video","All accounts can be used to sign in and access the rest.","Connect another account","We'd be sorry to see you go, but you can delete your account at any time.","Delete Account","Disconnect","Re-order this list using arrows","Share","Please enter a shorter note.","We weren't able to send your email.","Ok","Oops!","Follow","Thanks for sharing","Thanks for following","Recommended for you","Share to [x]","Follow on [x]","Enter your email address","Your email address","By clicking the button above, you agree to the information above being sent to AddThis US servers.","{count, plural, one{# SHARE} other{# SHARES}}","Whois Lookup","HTML Validator","Email App","Save","Copy Link","Top Services","Load More","By sending, I affirm I am permitted to send this email."];t.exports=n}});