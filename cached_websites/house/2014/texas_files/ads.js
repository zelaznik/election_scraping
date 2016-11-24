$(window).error(function(e){
    e.preventDefault();
});
// PRESET GOOGLE ADS 
	var gptadslots=[];
	var googletag = googletag || {};
	googletag.cmd = googletag.cmd || [];
	(function(){ var gads = document.createElement('script');
		gads.async = true; gads.type = 'text/javascript';
		var useSSL = 'https:' == document.location.protocol;
		gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
		var node = document.getElementsByTagName('script')[0];
		node.parentNode.insertBefore(gads, node);
	})();

// DART code
var dartCCKey = "ccaud";
var dartCC = "";
if (typeof(ccauds) != 'undefined')
{
for (var cci = 0; cci < ccauds.Profile.Audiences.Audience.length; cci++)
{
if (cci > 0) dartCC += ",";
dartCC += ccauds.Profile.Audiences.Audience[cci].id;
}
}

//WINDOW SISE
var initialViewportWidth = document.documentElement.clientWidth,
	adFlexHorizontal = $('.ad-slot.flex.format-horizontal'),
	adFlexVertical = $('.ad-slot.flex.format-vertical');
	
var horizontal_ads = new Array("x05", "x03", "x06");
	
function setAdSize(ad_type){
	//Horizontal Flex Ad Conditionals
	var ad_size = new Array();
	if ($.inArray(ad_type, horizontal_ads) != -1) {
		if (initialViewportWidth < 728) {
			ad_size = [[320,50]];
		}
		else if (initialViewportWidth >= 728 && initialViewportWidth < 970) {
			ad_size = [[728,90]];
			}
		else if (initialViewportWidth >= 970) {
			ad_size = [[728,90],[970,90],[970,250]]; 
		}
	}else{
	//Vertical Flex Ad Conditionals
	    if (initialViewportWidth < 992) {
			ad_size = [[300, 250]];
	    } else if (initialViewportWidth >= 992) {
			ad_size = [[300,250],[300,600],[300,1050]]; 
	    }
	}
	
	return ad_size;	
}


//loop all ADs struct and generate AD slots and calls
function load_ad(adstruct_all_ads){
	var _temp = adstruct_all_ads;
	var _temp1 =_temp.replace(/"\[\[/g, '[[');
	var _temp1 =_temp1.replace(/\]]\"/g, ']]');
	var jsonStruct = $.parseJSON(_temp1);
	
	googletag.cmd.push(function(){
		$.each(jsonStruct, function(i, item){
         var n=i; 
			var mod_id = item["MODULEID"];
			var ad_tile = item["TILE"];
			var ad_dcat = item["DCCAT"];
			var ad_isflex = item["ISFLEX"];
			var ad_size = item["SZ"];
			var ad_pos = item["POS"];
			var ad_pg = item["PG"];
			
			//get ad size
			var _ad_size = setAdSize(i);
			
			//if not story and not x02, then load ads	
			if (i != 'x02' && (PP_pagekey != 'politico-opinionstory' || PP_pagekey != 'politico-story' || PP_pagekey != 'politico-opinionstorytest' || PP_pagekey != 'politico-storytest')) {
				gptadslots[i]=googletag.defineSlot('/6326/politico/' + ad_pg, _ad_size, mod_id.toString()).setTargeting('tile', [ad_tile]).setTargeting('pos', [ad_pos]).addService(googletag.pubads()); 
			}
			
		});
		googletag.pubads().setTargeting(dartCCKey, [dartCC]);
		googletag.pubads().enableAsyncRendering();
		//googletag.pubads().collapseEmptyDivs();
		googletag.enableServices();
	});
}

//call this onClick only to load onclick
function post_ad(ad_type){
	var _temp = adstruct_all_ads;
	var _temp1 = _temp.replace(/"\[\[/g, '[[');
	var _temp1 = _temp1.replace(/\]]\"/g, ']]');
	
	var jsonStruct = $.parseJSON(_temp1);
	var mod_id = jsonStruct[ad_type]["MODULEID"];
	var ad_tile = jsonStruct[ad_type]["TILE"];
	var ad_dcat = jsonStruct[ad_type]["DCCAT"];
	var ad_isflex = jsonStruct[ad_type]["ISFLEX"];
	var ad_size = jsonStruct[ad_type]["SZ"];
	var ad_pos = jsonStruct[ad_type]["POS"];
	var ad_pg = jsonStruct[ad_type]["PG"];
	
	var _ad_size = setAdSize(ad_size);
	if (typeof gptadslots[ad_type] == 'undefined') {
		gptadslots[ad_type] = googletag.defineSlot('/6326/politico/' + ad_pg, _ad_size, mod_id.toString()).setTargeting('tile', [ad_tile]).setTargeting('pos', [ad_pos]).addService(googletag.pubads());
	}	
	googletag.cmd.push(function() { googletag.display(mod_id); });	
	setTimeout(function() { 	
		addAdStyle(mod_id);//add class after ad loads
	 }, 2500);
	
}


//$(document).ajaxStop(function() {--doesn't work
$(document).ready(function(){
	$(window).error(function(e){
	    e.preventDefault();
	});
	
	//story only
	setTimeout(function() { 	
	if (PP_pagekey == 'politico-story' || PP_pagekey == 'politico-opinionstory' || PP_pagekey == 'politico-storytest' || PP_pagekey == 'politico-opinionstorytest') {
		$('#superComments').on('collapseActiveTrue', function(){
			post_ad('x02');
		});
		
		//check if there is Story specifc sponsored after 7th and show ad x01
		var p7SponsoredContent = "";
		try {
			p7SponsoredContent = $("div#SidebarSponsoredContent.p7Story").text().trim();
		} 
		catch (e) {}
		//no Sponsored Content or Story specific sponsored after parag 7, show ad_type ad
		if (p7SponsoredContent!=='') {
			post_ad('x01');
		}
	}}, 2800);
		
	setTimeout(function() { 	
		$.each($('.ad-slot'), function(){
			addAdStyle(this.id);
		});	
	 }, 2500);
	 
});


function addAdStyle(mod_id_ad){
		var _ifr_w = $('#' + mod_id_ad.toString()).width();
		var _class_loaded_h = '';
		var _subX = mod_id_ad.split("_");
		
		//Vertical Flex Ad Conditionals - only run for vertical ADs
		if ($.inArray(_subX[1].toString(), horizontal_ads) == -1) {
			var _ifr_h = $('#' + mod_id_ad.toString()).height();
			
			if (initialViewportWidth < 992) {
				_class_loaded_h = 'ad-loaded-250h';
			}
			else 
				if (initialViewportWidth >= 992) {
					if (_ifr_h == '250') {
						_class_loaded_h = 'ad-loaded-250h';
					}
					else 
						if (_ifr_h == '600') {
							_class_loaded_h = 'ad-loaded-600h';
						}
						else 
							if (_ifr_h == '1050') {
								_class_loaded_h = 'ad-loaded-1050h';
							}
				}
			if (_class_loaded_h != 'undefined') {
				$('#' + mod_id_ad).addClass(_class_loaded_h + ' is-loaded');
			}
		}
		else {
			//Horizontal Flex Ad Conditionals
			if (initialViewportWidth < 728) {
				var _class_loaded_w = 'ad-loaded-320w';
			}
			else 
				if (initialViewportWidth >= 728 && initialViewportWidth < 970) {
					//loop adstruct_all_ads, get iframe of loaded ad, get width, set class
					if (_ifr_w == '728') {
						var _class_loaded_w = 'ad-loaded-728w';
					}
					else 
						if (_ifr_w == '320') {
							var _class_loaded_w = 'ad-loaded-320w';
						}
				}
				else 
					if (initialViewportWidth >= 970) {
						if (_ifr_w == '728') {
							var _class_loaded_w = 'ad-loaded-728w';
						}
						else 
							if (_ifr_w == '320') {
								var _class_loaded_w = 'ad-loaded-320w';
							}
							else 
								if (_ifr_w == '970') {
									var _class_loaded_w = 'ad-loaded-970w';
								}
						
					}
			if (_class_loaded_w != 'undefined') {
				$('#' + mod_id_ad.toString() + '.ad-slot.flex.format-horizontal').addClass(_class_loaded_w + ' is-loaded');
			}
			
		}
}