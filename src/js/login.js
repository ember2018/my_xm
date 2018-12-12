var login = (function () {
    return{
        init(ele){
            this.$username = $(".username");
            this.$password = $(".password"); 
            this.dl = $(".dl");
            this.zhuce = $(".tiao_zhuce");
            this.$ts1 = $(".ts1");
            this.$ts2 = $(".ts2");
           
            this.event();
            
        },
        event(){
            var _this = this;

            this.$username.on("change",function(){

                var phone=_this.$username.val();
    
                if(!(/^1[34578]\d{9}$/.test(phone))){ 
                    _this.$ts1.css({"visibility":"visible"});
                    return false;
                }else{
                    _this.$ts1.css({"visibility":"hidden"});
            };
    
            });
   


            this.zhuce.on("click",function(){
                _this.dl.css({ "display": "none"});
            });  

        },
    

 
    }

}())
login.init('.dl');