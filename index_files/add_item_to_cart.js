<!-- Shopify_ALL_PAGES_Templates_SINGLE_PIXEL -->
//var log="";
var shopHost = 'winex-us';
var adwordsAccount = 'AW-11122964711';
var mcAccount = '729980585';
var analyticsAccount = 'null';
var addToCartLabel = 'nvmMCNe_mZMYEOfx67cp';
var facebookPixel = '783205623150398';
var googleCurrency = 'USD';
var facebookCurrency = 'USD';
var adscale_currency = 'USD';
var ratesGoogle={"FJD":0.45118,"MXN":0.0556,"STD":5.0E-5,"LVL":1.65319,"SCR":0.07552,"CDF":4.9E-4,"BBD":0.49553,"GTQ":0.12836,"CLP":0.00125,"HNL":0.04061,"UGX":2.7E-4,"ZAR":0.05529,"TND":0.31945,"SLE":0.04424,"CUC":1.0,"BSD":1.00051,"SLL":5.0E-5,"SDG":0.00167,"IQD":6.8E-4,"CUP":0.03774,"GMD":0.01605,"TWD":0.03264,"RSD":0.00937,"DOP":0.01831,"KMF":0.00223,"MYR":0.22532,"FKP":1.24482,"XOF":0.00167,"GEL":0.3992,"BTC":27387.10004,"UYU":0.02566,"MAD":0.09876,"CVE":0.00991,"TOP":0.42442,"AZN":0.58686,"OMR":2.59738,"PGK":0.28406,"KES":0.00746,"SEK":0.09718,"BTN":0.01218,"UAH":0.02709,"GNF":1.2E-4,"ERN":0.06667,"MZN":0.01581,"SVC":0.11435,"ARS":0.00462,"QAR":0.27469,"IRR":2.0E-5,"MRO":0.0028,"CNY":0.14506,"THB":0.0291,"UZS":9.0E-5,"XPF":0.00915,"BDT":0.00942,"LYD":0.20986,"BMD":1.0,"KWD":3.26328,"PHP":0.0179,"RUB":0.01228,"PYG":1.4E-4,"ISK":0.00732,"JMD":0.00654,"COP":2.2E-4,"MKD":0.01781,"USD":1.0,"DIN":0.00937,"DZD":0.00741,"PAB":1.00051,"GGP":1.24482,"SGD":0.74901,"ETB":0.01849,"JEP":1.24482,"KGS":0.01143,"SOS":0.00176,"VEF":0.0,"VUV":0.00849,"LAK":6.0E-5,"BND":0.74941,"ZMK":1.1E-4,"TZA":4.3E-4,"XAF":0.00167,"LRD":0.00613,"XAG":25.07523,"CHF":1.11994,"HRK":0.14671,"ALL":0.00978,"DJF":0.00563,"VES":0.04076,"ZMW":0.05725,"TZS":4.3E-4,"VND":4.0E-5,"XAU":1984.12698,"TRL":0.05154,"AUD":0.6692,"ILS":0.27304,"GHS":0.0851,"GYD":0.00473,"KPW":0.00111,"BOB":0.14479,"KHR":2.5E-4,"MDL":0.05551,"IDR":7.0E-5,"KYD":1.20054,"AMD":0.00258,"BWP":0.07614,"SHP":0.82186,"TRY":0.05154,"LBP":7.0E-5,"TJS":0.09162,"JOD":1.40963,"AED":0.27232,"HKD":0.12739,"RWF":9.0E-4,"EUR":1.10975,"LSL":0.05543,"DKK":0.1474,"ZWD":0.00311,"CAD":0.73113,"BGN":0.56106,"MMK":4.8E-4,"MUR":0.02222,"NOK":0.09571,"SYP":4.0E-4,"IMP":1.24482,"ZWL":0.00311,"ROL":0.22258,"GIP":1.24482,"RON":0.22258,"LKR":0.0031,"NGN":0.00217,"CRC":0.00188,"CZK":0.04675,"PKR":0.00353,"XCD":0.37002,"ANG":0.55513,"HTG":0.00643,"BHD":2.65341,"KZT":0.0022,"SRD":0.02673,"SZL":0.05543,"LTL":0.33867,"SAR":0.26663,"TTD":0.14743,"YER":0.00399,"MVR":0.06514,"AFN":0.01149,"INR":0.01219,"AWG":0.55479,"KRW":7.5E-4,"NPR":0.00761,"JPY":0.00745,"MNT":2.9E-4,"AOA":0.00198,"PLN":0.23822,"GBP":1.24355,"SBD":0.12048,"BYN":0.39638,"HUF":0.00292,"BYR":5.0E-5,"BIF":4.8E-4,"MWK":9.7E-4,"MGA":2.3E-4,"XDR":1.34923,"BZD":0.49636,"BAM":0.56093,"EGP":0.03268,"MOP":0.12376,"NAD":0.05543,"NIO":0.02741,"PEN":0.26581,"NIS":0.27304,"NZD":0.614,"WST":0.367,"TMT":0.28571,"CLF":34.37489,"BRL":0.19804};
var ratesFacebook={"FJD":0.45118,"MXN":0.0556,"STD":5.0E-5,"LVL":1.65319,"SCR":0.07552,"CDF":4.9E-4,"BBD":0.49553,"GTQ":0.12836,"CLP":0.00125,"HNL":0.04061,"UGX":2.7E-4,"ZAR":0.05529,"TND":0.31945,"SLE":0.04424,"CUC":1.0,"BSD":1.00051,"SLL":5.0E-5,"SDG":0.00167,"IQD":6.8E-4,"CUP":0.03774,"GMD":0.01605,"TWD":0.03264,"RSD":0.00937,"DOP":0.01831,"KMF":0.00223,"MYR":0.22532,"FKP":1.24482,"XOF":0.00167,"GEL":0.3992,"BTC":27387.10004,"UYU":0.02566,"MAD":0.09876,"CVE":0.00991,"TOP":0.42442,"AZN":0.58686,"OMR":2.59738,"PGK":0.28406,"KES":0.00746,"SEK":0.09718,"BTN":0.01218,"UAH":0.02709,"GNF":1.2E-4,"ERN":0.06667,"MZN":0.01581,"SVC":0.11435,"ARS":0.00462,"QAR":0.27469,"IRR":2.0E-5,"MRO":0.0028,"CNY":0.14506,"THB":0.0291,"UZS":9.0E-5,"XPF":0.00915,"BDT":0.00942,"LYD":0.20986,"BMD":1.0,"KWD":3.26328,"PHP":0.0179,"RUB":0.01228,"PYG":1.4E-4,"ISK":0.00732,"JMD":0.00654,"COP":2.2E-4,"MKD":0.01781,"USD":1.0,"DIN":0.00937,"DZD":0.00741,"PAB":1.00051,"GGP":1.24482,"SGD":0.74901,"ETB":0.01849,"JEP":1.24482,"KGS":0.01143,"SOS":0.00176,"VEF":0.0,"VUV":0.00849,"LAK":6.0E-5,"BND":0.74941,"ZMK":1.1E-4,"TZA":4.3E-4,"XAF":0.00167,"LRD":0.00613,"XAG":25.07523,"CHF":1.11994,"HRK":0.14671,"ALL":0.00978,"DJF":0.00563,"VES":0.04076,"ZMW":0.05725,"TZS":4.3E-4,"VND":4.0E-5,"XAU":1984.12698,"TRL":0.05154,"AUD":0.6692,"ILS":0.27304,"GHS":0.0851,"GYD":0.00473,"KPW":0.00111,"BOB":0.14479,"KHR":2.5E-4,"MDL":0.05551,"IDR":7.0E-5,"KYD":1.20054,"AMD":0.00258,"BWP":0.07614,"SHP":0.82186,"TRY":0.05154,"LBP":7.0E-5,"TJS":0.09162,"JOD":1.40963,"AED":0.27232,"HKD":0.12739,"RWF":9.0E-4,"EUR":1.10975,"LSL":0.05543,"DKK":0.1474,"ZWD":0.00311,"CAD":0.73113,"BGN":0.56106,"MMK":4.8E-4,"MUR":0.02222,"NOK":0.09571,"SYP":4.0E-4,"IMP":1.24482,"ZWL":0.00311,"ROL":0.22258,"GIP":1.24482,"RON":0.22258,"LKR":0.0031,"NGN":0.00217,"CRC":0.00188,"CZK":0.04675,"PKR":0.00353,"XCD":0.37002,"ANG":0.55513,"HTG":0.00643,"BHD":2.65341,"KZT":0.0022,"SRD":0.02673,"SZL":0.05543,"LTL":0.33867,"SAR":0.26663,"TTD":0.14743,"YER":0.00399,"MVR":0.06514,"AFN":0.01149,"INR":0.01219,"AWG":0.55479,"KRW":7.5E-4,"NPR":0.00761,"JPY":0.00745,"MNT":2.9E-4,"AOA":0.00198,"PLN":0.23822,"GBP":1.24355,"SBD":0.12048,"BYN":0.39638,"HUF":0.00292,"BYR":5.0E-5,"BIF":4.8E-4,"MWK":9.7E-4,"MGA":2.3E-4,"XDR":1.34923,"BZD":0.49636,"BAM":0.56093,"EGP":0.03268,"MOP":0.12376,"NAD":0.05543,"NIO":0.02741,"PEN":0.26581,"NIS":0.27304,"NZD":0.614,"WST":0.367,"TMT":0.28571,"CLF":34.37489,"BRL":0.19804};
var capi=true;

<!-- Functions -->
async function getOrderNameFromConfirmation(){
    var oName = null;
    if(typeof(document.getElementById('Intrnl_CO_Container')) != 'undefined'){
        var confSrc = document.getElementById('Intrnl_CO_Container').src;
        if(null != confSrc){

            var res = null;
            try{
                let result = '';
                try{
                    var url = "https://ecommerce-events.adscale.com/ecommerce/" + shopHost + "/getOrderNameFromConfirmation";
                    result = await makeAjaxRequest("POST", url, confSrc);
                }
                catch(e){
                     var url = "/apps/adscale/ecommerce/" + shopHost + "/getOrderNameFromConfirmation";
                     result = await makeAjaxRequest("POST", url, confSrc);
                }

                if(typeof(result)=='string'){
                    res = JSON.parse(result);
                }
                else  if(typeof(result)=='object'){
                    res = result;
                }
            }
            catch(e){
               // console.log(e);
            }
        }

    }


	return res;
}

async function getOrderByName(orderName) {
    console.log('getOrderByName ' + orderName);
    var res = false;
    try {

        let result = '';
        try{
            var url = "https://ecommerce-events.adscale.com/ecommerce/" + shopHost + "/getOrderByName/" + orderName;
            result = await makeAjaxRequest("POST", url);
        }
        catch(e){
            var url = "/apps/adscale/ecommerce/" + shopHost + "/getOrderByName/" + orderName;
            result = await makeAjaxRequest("POST", url);
        }

        if(typeof(result)=='string'){
            res = JSON.parse(result);
        }
        else  if(typeof(result)=='object'){
            res = result;
        }

    } catch (e) {
        //console.log(e);
    }

    return res;
}

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function getAdscaleSuffix (){
    let suffix = localStorage.getItem('adscale_token_suffix');
    if(suffix == null){
        suffix = 0;
    }
    else{
        suffix = Number(suffix)+1;
        if(suffix > 999){
            suffix = 0;
        }
    }
    localStorage.setItem('adscale_token_suffix', suffix);
    return suffix;
}

function createGuid(){
    let suffix = getAdscaleSuffix();
    return (makeid(8) + "-" + makeid(4) + "-" + makeid(4) + "-" + makeid(4) + "-" + makeid(12) + '-' + suffix).toLowerCase();
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i <ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


function getValueForGoogle(value, currency) {
    var ret;
    try {
        ret = value * ratesGoogle[currency];
        ret = Math.round(ret * 100) / 100;
        if (!ret) {
            ret = value;
        }
    } catch (ex) {
        ret = value;
    }
	 return ret;
}

function getValueForFacebook(value, currency) {
    var ret;
    try {
        ret = value * ratesFacebook[currency];
        ret = Math.round(ret * 100) / 100;
        if (!ret) {
            ret = value;
        }
    } catch (ex) {
        ret = value;
    }
	 return ret;
}

function adscaleLoadScript(url, callback){

	//log+="1 adscaleLoadScript " + url + "_NL_";
	var script = document.createElement("script")
	script.type = "text/javascript";

	script.onload = function(){
		callback();
	};
	script.src = url;

	//document.head.appendChild(script);

	try{
		document.getElementsByTagName("head")[0].appendChild(script);
	}
	catch(e){}

	//log+="2 adscaleLoadScript ok_NL_";
}

function clearStorage(prefix){
    try{
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            if(key.startsWith(prefix)){
                localStorage.removeItem(key);
            }
        }
    }
    catch(e){}
}

function isNullOrEmpty(s) {
    if(typeof(s)=='undefined'){
        return true;
    }

    if(s == null || s=='' || s=='null' || s.length==0 || s=='undefined'){
        return true;
    }
    return false;
}
function findGetParameter(parameterName) {
    //log+="findGetParameter " + parameterName+ "_NL_";
    var result = null,tmp = [];
    location.search.substr(1).split("&").forEach(function (item) {
		tmp = item.split("=");
		if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
    return result;
}


function setCookieForAdScale(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";";
}

function setAdScaleParamsAsCookies(){
    var adscaleParams = '';
    let _allParams = new URLSearchParams(window.location.search);
    let _keys = _allParams.keys();
    for (let _key of _keys){
        if(_key.startsWith('adscale_')){
            adscaleParams += '_delim_' + _key + '=' + _allParams.get(_key);
        }
        else if(_key.includes('hov') && _key.includes('zMx')){
            adscaleParams += '_delim_adscale_sms=' + _allParams.get(_key);
        }
        else if(_key.includes('nXf') && _key.includes('kYt')){
            adscaleParams += '_delim_adscale_email=' + _allParams.get(_key);
        }
    }
    if(!isNullOrEmpty(adscaleParams)){
        setCookieForAdScale('_adscale_params',adscaleParams,30);
    }

}

function manipulate(s){
	var _s = '';
	if(typeof(s)!='undefined' && !isNullOrEmpty(s)){
        for(let i=0;i<s.length;i++){
            _s += String.fromCharCode(s.charCodeAt(i) + 5)
        }
	}
	return _s;
}

async function setAdScaleToken(){
    let p1 = typeof(_adscale_fbp)!='undefined'?_adscale_fbp:'';
    let p2 = typeof(_adscale_fbc)!='undefined'?_adscale_fbc:'';
    let p3 = typeof(_adscale_gclid)!='undefined'?_adscale_gclid:'';
    let p4 = typeof(_adscale_fbclid)!='undefined'?_adscale_fbclid:'';
    let p5 = typeof(_adscale_campaign)!='undefined'?_adscale_campaign:'';

    if(isNullOrEmpty(p2) && !isNullOrEmpty(p4)){
        p2 = p4;
    }

    if(typeof(_adscale_params)!='undefined'){
        p5 += _adscale_params;
    }
    if(!isNullOrEmpty(p1) || !isNullOrEmpty(p2) || !isNullOrEmpty(p3) || !isNullOrEmpty(p5)){
        let cartToken = localStorage.getItem('adscale_cart_token');
        if(null != cartToken){
            let adscale_token = manipulate(p1) + '_delim_' + manipulate(p2) + '_delim_' + manipulate(p3) + '_delim_' + manipulate(p5);
            if(localStorage.getItem('adscale_token_' + cartToken)==null || localStorage.getItem('adscale_token_' + cartToken) != adscale_token){

                var _data = {
                            cart_token: cartToken,
                            adscale_token: adscale_token
                          };
                let result = '';
                try{
                    var url = "https://ecommerce-events.adscale.com/ecommerce/" + shopHost + "/token";
                    result = await makeAjaxRequest("POST", url, _data);
                }
                catch(e){
                    var url = "/apps/adscale/ecommerce/" + shopHost + "/token";
                    result = await makeAjaxRequest("POST", url, _data);
                }
                try{
                    if(typeof(result)=='string'){
                        res = JSON.parse(result).result;
                    }
                    else  if(typeof(result)=='object'){
                        res = result.result;
                    }

                    clearStorage('adscale_token_');
                    localStorage.setItem('adscale_token_' + cartToken, adscale_token);
                }
                catch(e){

                }

        	}
        }

    }
}


var __adscale_gclid=findGetParameter('gclid');//p3
if(typeof(__adscale_gclid)!='undefined' && !isNullOrEmpty(__adscale_gclid)){
    document.cookie = "_adscale_gclid=" + __adscale_gclid + ";";
}

var __adscale_fbclid=findGetParameter('fbclid');//p4 (p2)
if(typeof(__adscale_fbclid)!='undefined' && !isNullOrEmpty(__adscale_fbclid)){
    document.cookie = "_adscale_fbclid=" + __adscale_fbclid + ";";
}


var _adscale = findGetParameter('adscale');
if(!isNullOrEmpty(_adscale)){
    let __adscale_campaign = findGetParameter('utm_campaign');//p5
    if(typeof(__adscale_campaign)!='undefined' && !isNullOrEmpty(__adscale_campaign)){
        document.cookie = "_adscale_campaign=" + __adscale_campaign + "###" + Date.now() +  ";";
    }
}

try{
    setAdScaleParamsAsCookies();
}
catch(e){}

var _adscale_fbp = getCookie('_fbp');//p1
var _adscale_fbc = getCookie('_fbc');//p2
var _adscale_gclid = getCookie('_adscale_gclid');
var _adscale_fbclid = getCookie('_adscale_fbclid');
var _adscale_campaign = getCookie('_adscale_campaign');
var _adscale_params = getCookie('_adscale_params');

function registerAddToCartConversion(cart) {

    var item_price = cart.items[0].price / 100;
     console.log('Add To Cart ' + cart.items[0].product_id + ' (' + item_price + ')');
	<!-- Event snippet for add_item_to_cart conversion page -->
	var item_price_google = getValueForGoogle(item_price, adscale_currency);
	gtag('event', 'conversion', {
		'send_to': adwordsAccount + '/' + addToCartLabel,
		'aw_merchant_id': mcAccount,
		'source':'adscale',
		'value': 0.0,
		'id': '' + cart.items[0].product_id,
		'currency': googleCurrency,
		'event_callback': function(data) {
			//var image = new Image(1,1);
			//image.src = 'https://ecommerce-events.adscale.com/WriteShopifyLog?shop=' + shopHost + '&log=ADD_TO_CART_OK='+data;
		}
	});

    gtag('event','add_to_cart', {
       'send_to': adwordsAccount,
       'aw_merchant_id': mcAccount,
       'source':'adscale',
       'items': [
        {
            'value': item_price_google,
            'id': '' + cart.items[0].product_id,
            'currency': googleCurrency,
            'google_business_vertical': 'retail'
        }
      ]
    });

    let eventId = createGuid();
    <!--FB_ATC_START-->
	if(!isNullOrEmpty(facebookPixel)){
	    var item_price_facebook = getValueForFacebook(item_price, adscale_currency);
		fbq('trackSingle', facebookPixel, 'AddToCart', {
			content_name: '' + cart.items[0].title, 
			content_ids: ['' + cart.items[0].product_id],
			content_type: 'product',
			value: item_price_facebook,
			currency: facebookCurrency
		},{eventID: eventId});
	}
	<!--FB_ATC_END-->

	<!--FB_CAPI_START-->
        capiEvent(eventId, 'AddToCart', cart.items[0].product_id, item_price_facebook, facebookCurrency);
    <!--FB_CAPI_END-->

    adscaleEventATC();
}


console.log('--- adscale script init start --- ');
<!--Facebook INIT Call -->
if(!isNullOrEmpty(facebookPixel)){
	try{
		!function(f,b,e,v,n,t,s)
		{if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
		if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
		n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];
		s.parentNode.insertBefore(t,s)}(window,document,'script', 'https://connect.facebook.net/en_US/fbevents.js');

		fbq('init', facebookPixel);
		<!--FB_PAGE_VIEW_START-->
		fbq('trackSingle', facebookPixel, 'PageView');
        <!--FB_PAGE_VIEW_END-->
		//var image = new Image(1,1);
		//image.src = 'https://ecommerce-events.adscale.com/WriteShopifyLog?shop=' + shopHost + '&log=FACEBOOK_CALLED';
	}catch(e){
		//var image = new Image(1,1);
		//image.src = 'https://ecommerce-events.adscale.com/WriteShopifyLog?shop=' + shopHost + '&log=FACEBOOK_ERROR';
	}
}


<!-- Google INIT -->
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
if (typeof(jQuery) != 'undefined' && typeof(jQuery.getScript) != 'undefined') {
	adscaleEventVisit();
	jQuery.getScript("https://www.googletagmanager.com/gtag/js?id=" + adwordsAccount);
	if(!isNullOrEmpty(analyticsAccount)){
		jQuery.getScript("https://www.googletagmanager.com/gtag/js?id=" + analyticsAccount);
	}
} else {
    adscaleLoadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js", function() {
        adscaleEventVisit();
        jQuery.getScript("https://www.googletagmanager.com/gtag/js?id=" + adwordsAccount);
        if(!isNullOrEmpty(analyticsAccount)){
            jQuery.getScript("https://www.googletagmanager.com/gtag/js?id=" + analyticsAccount);
        }
    });
}


<!-- Global site tag (gtag.js) - Google Ads: AW-11122964711 -->
gtag('js', new Date());

gtag('config', adwordsAccount);

if(!isNullOrEmpty(analyticsAccount)){
    gtag('config', analyticsAccount);
}

console.log('--- adscale script init end --- ');
<!-- View Page -->
gtag('event', 'page_view',{'send_to': adwordsAccount});


<!-- View Product -->
var adscale_product_id = null;

if(__st&&__st.rtyp&&__st.rtyp=='product'&&__st.rid){
	adscale_product_id = ''+__st.rid;
}
else if(document.getElementsByClassName("product-recommendations")&&document.getElementsByClassName("product-recommendations").length==1){
   adscale_product_id = document.getElementsByClassName("product-recommendations")[0].getAttribute("data-product-id");
}

if (typeof(adscale_product_id) != 'undefined') {
    if (!isNullOrEmpty(adscale_product_id)) {
        let eventId = createGuid();
        <!--FB_VIEW_CONTENT_START-->
        if(!isNullOrEmpty(facebookPixel)){
            fbq('trackSingle', facebookPixel, 'ViewContent', {
                'content_ids': [adscale_product_id],
                'content_type': 'product'
            },{eventID: eventId});
        }
        <!--FB_VIEW_CONTENT_END-->
        gtag('event','view_item', {
          'send_to': adwordsAccount,
          'source':'adscale',
          'items': [
            {
                'id': adscale_product_id,
                'google_business_vertical': 'retail'
            }
          ]
        });

        <!--FB_CAPI_START-->
            capiEvent(eventId, 'ViewContent', adscale_product_id);
        <!--FB_CAPI_END-->
    }
}



if(localStorage.getItem('cart_value')==null){
	localStorage.setItem('cart_value', 0);
}
try{
    if (typeof(jQuery) != 'undefined' && typeof(jQuery.getScript) != 'undefined') {
        writeAddToCartConversion();
    }
    else{
        adscaleLoadScript("https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js", function() {
            writeAddToCartConversion();
        });

    }

}
catch(e){
	//log+="error: " + e + "_NL_";
}
//var image = new Image(1,1);
//image.src = 'https://ecommerce-events.adscale.com/WriteShopifyLog?shop=' + shopHost + '&log='+log;

function writeAddToCartConversion(){
    jQuery.getJSON('/cart.js', {initiator:"adscale"}, function(cart) {

        let cartToken = localStorage.getItem('adscale_cart_token');
        if(cartToken==null || cartToken != cart.token){
            localStorage.setItem('adscale_cart_token', cart.token);
        }

        if(localStorage.getItem('cart_value')<cart.total_price){

            registerAddToCartConversion(cart);

            localStorage.setItem('cart_value', cart.total_price);
        }
        if(localStorage.getItem('cart_value')>cart.total_price){
            //registerRemoveFromCartConversion();
            localStorage.setItem('cart_value', cart.total_price);
        }
    });
}


try{
    setAdScaleToken();
}
catch(e){}


async function capiEvent(eventId, eventName, product_id, product_price, currency){

    console.log('capiEvent ' + eventName + ': ' + product_id);
    let res = false;
    try{

        let cartToken = localStorage.getItem('adscale_cart_token');
        let adscale_token = localStorage.getItem('adscale_token_' + cartToken);
        if(isNullOrEmpty(adscale_token)){
            setAdScaleToken();
            cartToken = localStorage.getItem('adscale_cart_token');
            adscale_token = localStorage.getItem('adscale_token_' + cartToken);
        }

        var _data = {
                          event_id: eventId,
                          event_name: eventName,
                          product_id: product_id,
                          product_price: product_price,
                          currency: currency,
                          adscale_token: adscale_token,
                          url:window.location.href
                      };

        let result = '';
        try{
            var url = "https://ecommerce-events.adscale.com/ecommerce/" + shopHost + "/capi";
            result = await makeAjaxRequest("POST", url, _data);
        }
        catch(e){
            var url = "/apps/adscale/ecommerce/" + shopHost + "/capi";
            result = await makeAjaxRequest("POST", url, _data);
        }
        if(typeof(result)=='string'){
            res = JSON.parse(result).result;
        }
        else  if(typeof(result)=='object'){
            res = result.result;
        }
    }
    catch(e){
        //console.log(e);
    }

    return res;

}


function adscaleEventVisit(){
    try{
        adscaleEvent('adscale_visit');
    }
    catch(e){}
}

function adscaleEventATC(){
    try{
        adscaleEvent('adscale_addToCart');
    }
    catch(e){}
}

async function adscaleEvent(type){

    let _today = new Date();
    let today = _today.toISOString().substring(0, 10);

    let lastVisit = localStorage.getItem(type);
    if(null != lastVisit && lastVisit == today){
        return;
    }
    console.log('adscaleEvent: ' + type);
    let res = false;
    try{

        var _data = {
            type: type,
            cart: localStorage.getItem('adscale_cart_token'),
        };
        let result = '';
        try{
            var url = "https://ecommerce-events.adscale.com/ecommerce/" + shopHost + "/capi";
            result = await makeAjaxRequest("POST", url, _data);
        }
        catch(e){
            var url = "/apps/adscale/ecommerce/" + shopHost + "/capi";
            result = await makeAjaxRequest("POST", url, _data);
        }
        if(typeof(result)=='string'){
            res = JSON.parse(result).result;
        }
        else  if(typeof(result)=='object'){
            res = result.result;
        }
    }
    catch(e){
       //console.log(e);
    }

    return res;

}

function makeAjaxRequest(method, url, jsonData) {

    try{
        if(typeof jsonData == 'object'){
            jsonData = JSON.stringify(jsonData);
        }
    }
    catch(e){}
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, true);

        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

        xhr.setRequestHeader("Access-Control-Allow-Origin", '*');
        xhr.setRequestHeader("Access-Control-Allow-Credentials", true);

        if(!isNullOrEmpty(jsonData)){
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.send(jsonData);
        }
        else{
            xhr.send();
        }
    });
}

//popup.js
