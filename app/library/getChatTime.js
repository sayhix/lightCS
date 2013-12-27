Library.getChatTime = sumeru.Library.create(function(exports){	
	
	exports.getTime = function(time){
		var chatTime = new Date(time);				
		var currentTime = new Date();	
		getMinutes = chatTime.getMinutes();
		if(getMinutes === 0){
			getMinutes = getMinutes +"0";			
		}else{			
			if(getMinutes > 0 && getMinutes < 10){			
				getMinutes = "0" + getMinutes;
			}			
		}				
		if(chatTime.getYear() == currentTime.getYear() && chatTime.getMonth() == currentTime.getMonth() && chatTime.getDate() == currentTime.getDate()){			
			return chatTime.getHours()+":"+getMinutes;
		}else{			
			return (chatTime.getMonth()+1)+"-"+chatTime.getDate()+"  "+chatTime.getHours()+":"+getMinutes;
		}
	};
    
    exports.getCTime = function(time){
		var chatTime = new Date(time);				
		var currentTime = new Date();	
		getMinutes = chatTime.getMinutes();
		if(getMinutes === 0){
			getMinutes = getMinutes +"0";			
		}else{			
			if(getMinutes > 0 && getMinutes < 10){			
				getMinutes = "0" + getMinutes;
			}			
		}
        getSeconds = chatTime.getSeconds();
        if(getSeconds === 0){
			getSeconds = getSeconds +"0";			
		}else{			
			if(getSeconds > 0 && getSeconds < 10){			
				getSeconds = "0" + getSeconds;
			}			
		}
        return chatTime.getFullYear() + '-' + (chatTime.getMonth()+1)+"-"+chatTime.getDate()+" "+chatTime.getHours()+":"+getMinutes+":"+getSeconds;
	};
	
	return exports;
});