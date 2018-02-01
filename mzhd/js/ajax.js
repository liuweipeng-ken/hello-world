(function(){
	var reg = {
		/*
		*邮箱验证
		*/
		email:function(){
			var email =/^([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])*@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
			var e_value = $(".emailBox .email").val();
			var e_result = email.test(e_value);
			var emailobj = {
				obj_value:e_value,
				obj_result:e_result
			};
			return emailobj;
		}

	}
	// 验证邮箱的正确性
	var judge = {
		emailJudge:function(){
			return  reg.email().obj_result;
		},
		allJudge:function(){
			if( judge.emailJudge() ){
				$(".android").css("pointer-events","auto");
				$(".iOS").css("pointer-events","auto");
			}
		}
	}
	$(".emailBox .email").mouseenter(function(){
		$(".emailBox .email").focus();
	})
	$(".emailBox .email").mouseleave(function(){
		$(".emailBox .email").blur();
	})
	$(".emailBox .email").focus(function() {
		$(".emailBox .email").val("");
	});
	$(".emailBox .email").blur(function(event) {
		var emailResult = judge.emailJudge();
		$(this).attr("placeholder",reg.email().obj_value);
		if( judge.emailJudge() ){
			$(".android").css("pointer-events","auto");
			$(".iOS").css("pointer-events","auto");
		}else if($(".emailBox .email").val() == ''){
			$(this).val("请输入邮箱地址！").css("color","#ccc");
			$(".android").css("pointer-events","none");
			$(".iOS").css("pointer-events","none");
		}else if(!emailResult){
			$(this).val("邮箱格式错误！").css("color","red");
			$(".android").css("pointer-events","none");
			$(".iOS").css("pointer-events","none");
		}else{

		}
	});
	var emailBlurNum = 0;
	$(".emailBox .email").focus(function(event) {
		if(emailBlurNum == 0){
			$(this).val("");
			emailBlurNum=1;
		}else{
			$(this).val($(this).attr("placeholder")).css("color","#a59dcf")
		}
	});
	/*
	获取手机类型；start
	*/
	var phonechose = "android";
	$(".android").click(function(event) {
		phonechose="android";
		regMessage()
	});
	$(".iOS").click(function(event) {
		phonechose="ios";
		regMessage()
	});
	// 验证邮箱
	var regMessage = function(){
		var e_value = reg.email().obj_value;
		var obj = {
				"gameId":205,
				"plat": phonechose,
				"email":e_value
			};
		var str = "http://activity.zloong.com/mzappoint/emailAppoint.do";
		$.ajax({
			async: false,
			dataType: 'json',
		    jsonp:'jsoncallback',
			type: "post",
			url: str,
			data: obj,
			success: function(data) {
				if(data.code==0){
					alertChange.showAlert("恭喜，预约成功！","礼包码将在上线之后发送到您填写的邮箱，请注意查收");
					yyCount();
				}
				else{
					alertChange.showAlert(setErr(Number(data.code)));
				}
			},
			error: function(res){
			}
		})
	}
    var yyCount = function(){
    	$.ajax({
			async: false,
			type: "get",
			url: "http://activity.zloong.com/mzappoint/getTotal.do?gameId=205",
			success: function(data) {
				var len = data.totalNum.toString().length;
				var numberStr = '';
				for(var i = 0; i<(5-len); i++){
					if(i==1 || i==3){
						numberStr+='0,';
					}else{
						numberStr+='0';
					}
				}
				odoo.default({ el:'.js-odoo',value:numberStr+Number(data.totalNum).toLocaleString()});
				if(data.totalNum >= 0 && data.totalNum < 500){
					$(".jpList_ms").animate({width:"0px"},1500);
				}else if(data.totalNum >= 500 && data.totalNum < 1000){
					var el = (data.totalNum-500)/500*175+27;
					$(".jpList_ms").animate({width:el+"px"},1500);	
				}else if(data.totalNum >= 1000 && data.totalNum < 3000){
					var el = (data.totalNum-1000)/2000*181+202;
					$(".jpList_ms").animate({width:el+"px"},1500);
				}
				else if(data.totalNum >= 3000 && data.totalNum < 5000){
					var el = (data.totalNum-3000)/2000*170+383;
					$(".jpList_ms").animate({width:el+"px"},1500);
				}else if(data.totalNum >= 5000 && data.totalNum < 10000){
					var el = (data.totalNum-5000)/5000*175+553;
					$(".jpList_ms").animate({width:el+"px"},1500);
				}else if( data.totalNum >= 10000 ){
					$(".jpList_ms").animate({width:"760px"},1500);
				}
			},
		})
    }
    yyCount();
    var t = setInterval(yyCount,30000);

	 //data 的错误信息；
	var setErr = function(errOneNum){
		var errOneMsg = errCode[errOneNum] || "未知错误";
		return errOneMsg;
	}
	/*
	*alert弹窗
	*/
	var alertChange = {
		showAlert:function(t,t2){
			$(".alert_shade").fadeIn();
			$(".alert_text").text(t);
			$(".alert_text2").text(t2);
		},
		hideAlert:function(){
			$(".alert_shade").fadeOut();
			$(".alert_text").text("");
			$(".alert_text2").text("");
		}
	}
	$(".alert_sure").click(function(event) {
		alertChange.hideAlert();
	});
})()
