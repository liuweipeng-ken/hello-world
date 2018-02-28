<!DOCTYPE html>
<!-- saved from url=(0029)http://mcvip.bbn.com.cn/d.jsp -->
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">  
      
        <title id="title">梦幻诛仙手游下载</title>  
        <meta name="viewport" content="width=device-width, initial-scale=1">  
   <script src="https://mhzx.zloong.com/js/jquery-1.11.1.js"></script> 
        <style type="text/css">  
            * {  
                margin: 0;  
                padding: 0;  
            }  
      
            img {  
                max-width: 100%;  
                height: auto;  
            }  
      
            .test {  
                height: 600px;  
                max-width: 600px;  
                font-size: 40px;  
            }  
        </style>  
    <style id="style-1-cropbar-clipper">/* Copyright 2014 Evernote Corporation. All rights reserved. */
.en-markup-crop-options {
    top: 18px !important;
    left: 50% !important;
    margin-left: -100px !important;
    width: 200px !important;
    border: 2px rgba(255,255,255,.38) solid !important;
    border-radius: 4px !important;
}

.en-markup-crop-options div div:first-of-type {
    margin-left: 0px !important;
}
</style></head>  
    <body>  
      
      
    <script>  
        function is_weixin() {  
            var ua = navigator.userAgent.toLowerCase();  
            if (ua.match(/MicroMessenger/i) == "micromessenger" || navigator.userAgent.indexOf("MQQBrowser")>-1) {   
			    
                if (ua.match(/iphone/i) == "iphone" || ua.match(/ipad/i) == "ipad") {  
					//alert('请进入App Store搜索下载梦幻诛仙手游');
					window.location.href="https://itunes.apple.com/app/id1320823304";
				
					
					//window.location.href="http://mp.weixin.qq.com/mp/redirect?url=https%3A%2F%2Fitunes.apple.com%2Fapp%2Fid1320823304";
                    return true;  
                }  
                else {
                	window.location.href = "https://play.google.com/store/apps/details?id=com.zloong.eu.mhzx";  
                      return true;
                }   
            } else {  
                if (ua.match(/iphone/i) == "iphone" || ua.match(/ipad/i) == "ipad") {  
                	
                //	alert('请进入APP Store搜索我爱竞彩进行安装');
			window.location.href="https://itunes.apple.com/app/id1320823304";
						
                    return false;  
                }  
                else {  
                    window.location.href = "https://play.google.com/store/apps/details?id=com.zloong.eu.mhzx";  
                    return false;  
                }     
            }  
        }  
      
        var isWeixin = is_weixin();  
        var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight : document.documentElement.clientHeight;  
        var weixinTip = $('<div id="weixinTip"><p><img src="/static/images/live_weixin.png" alt="点右上角菜单->在浏览器中打开"/></p></div>');  
        
        if (isWeixin) {  
            $("#title").html("请点右上角菜单->在浏览器中打开");  
            $("body").append(weixinTip);  
      
        }  
        $("#weixinTip").css({  
            "position": "fixed",  
            "left": "0",  
            "top": "0",  
            "height": winHeight,  
            "width": "100%",  
            "z-index": "1000",  
            "background-color": "rgba(0,0,0,0.8)",  
            "filter": "alpha(opacity=80)",  
        });  
        $("#weixinTip p").css({  
            "text-align": "center",  
            "margin-top": "10%",  
            "padding-left": "5%",  
            "padding-right": "5%"  
        });  
    </script></body></html>