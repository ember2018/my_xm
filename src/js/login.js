var login = (function () {
    return {
        init(ele) {
            this.$ele = document.querySelector(ele);
      
        
            this.$login_account = document.querySelector('.login_account');
        
            this.$inputAll = this.$ele.querySelectorAll('input');
            this.$submit = this.$ele.querySelector('.login_btn');           
            this.event();
        },
        event() {
            var _this = this;
        

            for(let i = 0;i < this.$inputAll.length - 1;i++){
                this.$inputAll[i].onblur = function(){
                    var $p = this.parentNode.querySelector('.text');
                    if(this.value == ''){
                        this.setAttribute('class','inputerror');
                        $p.innerHTML = this.getAttribute('empty');
                    }else{
                        this.setAttribute ('class','inputsuccess');
                        $p.innerHTML = '';
                        }
                    }
                }   
            }
        }
}())
login.init('.dl');