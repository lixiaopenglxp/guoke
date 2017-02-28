(function(){
	    		document.documentElement.style.fontSize=document.documentElement.clientWidth*20/320+'px';

		    	window.onresize=function(){
		    		document.documentElement.style.fontSize=document.documentElement.clientWidth*20/320+'px';    		
		    	};
	    	})();
	    	//banner 
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: 1000,//可选选项，自动滑动
            })
               //选项卡
      var oNav=document.getElementById('nav');
      var aLi=oNav.getElementsByTagName('li');
      for(var i=0;i<aLi.length;i++){
        aLi[i].onclick=function(){
           for(var i=0;i<aLi.length;i++){
            aLi[i].className='';
           }
            
            this.className='active';
        }
      }
       var oNav2=document.getElementById('nav2');
      var aLi2=oNav2.getElementsByTagName('li');
      for(var i=0;i<aLi2.length;i++){
        aLi2[i].onclick=function(){
           for(var i=0;i<aLi2.length;i++){
            aLi2[i].className='';
           }
            
            this.className='active';
        }
      }
