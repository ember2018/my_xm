

var register = (function () {

    return {
        init(ele) {
            this.$username = $(".username");
            this.$password1 = $(".password1");
            this.$password2 = $(".password2");    
            this.dneglu = $(".qudenglu");
            this.zhuce = $(".zhuce");
            this.$yan = $(".yan");
            this.$yzm = $(".yzm");
            this.$btn = $(".dl_btn")
            this.$ts5=$(".ts5");
            this.$ts6=$(".ts6");
            this.$ts7=$(".ts7");
            this.$ts8=$(".ts8");
            this.event();

        },
        event(ele) {
        var _this = this;

        this.$username.on("change",function(){

            var phone=_this.$username.val();

            if(!(/^1[34578]\d{9}$/.test(phone))){ 
                _this.$ts5.css({"visibility":"visible"});
                return false;
            }else{
                _this.$ts5.css({"visibility":"hidden"});
        };

        });
        
       this.$password1.on("change",function(){
            var password1=_this.$password1.val();
            if(!/^[^\s]{6,20}$/.test(password1)){
                _this.$ts6.css({"visibility":"visible"});
                return false;
            }else{
                _this.$ts6.css({"visibility":"hidden"});
            }
         });
       

        this.$password2.on("change",function(){
            var password2=_this.$password2.val();
            if(!(_this.$password1.val()==_this.$password2.val())){
                _this.$ts7.css({"visibility":"visible"});
                return false;
            }else{
                _this.$ts7.css({"visibility":"hidden"});
            }
         });

        //  this.$yzm.on("change",function(){
        //     var proving=_this.$yan.val();
            
        //     if(!(_this.$yan.val()==this.$yzm.val())){
        //         _this.$ts8.css({"visibility":"visible"});
        //         return false;
        //     }else{
        //         _this.$ts8.css({"visibility":"hidden"});
        //     }
        //  });

        this.dneglu.on("click",function(){
            _this.zhuce.css({ "display": "none"});
        });





        }

    }
}())
register.init('.zhuce');








