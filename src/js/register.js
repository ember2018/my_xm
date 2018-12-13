var checkInput = {
    phone(str) {
        var reg = /^1[35789]\d{9}$/;
        return reg.test(str);
    },
    password(str) {
        var reg = /^\w{6,20}$/;
        return reg.test(str);
    },
    code(str){
        return false;
    }
}
var register = (function () {
    var flag = false;
    var submit_flag = false;
    var newcode;
    //var $form = document.querySelector('.form');
    return {
        init(ele) {
            this.$ele = document.querySelector(ele);
            this.$inputAll = this.$ele.querySelectorAll('input');
            this.$phone = this.$ele.querySelector('#phone');
            this.$code = this.$ele.querySelector('#code');
            this.$getcode = this.$ele.querySelector('#getcode');
            this.$password = this.$ele.querySelector('#password');
            this.$repassword = this.$ele.querySelector('#repassword');
            this.$checkbox = this.$ele.querySelector('#checkbox');
            this.$submit = this.$ele.querySelector('#submit');
            this.event();
        },
        event() {
            var _this = this;
            for (let i = 0; i < this.$inputAll.length - 2; i++) {
                this.$inputAll[i].onblur = function () {
                    var $p = this.parentNode.querySelector('.text');
                    if (this.value == '') {
                        this.setAttribute('class', 'inputerror');
                        $p.innerHTML = this.getAttribute('empty');
                    } else {
                        var bool = checkInput[this.name](this.value);
                        if (bool) {
                            this.setAttribute('class', 'inputsuccess');
                            flag_suc_name = true;
                            $p.innerHTML = '';
                        } else {
                            this.setAttribute('class', 'inputerror');
                            flag_suc_name = false;
                            $p.innerHTML = this.getAttribute('error');
                        }
                    }
                }
                this.$inputAll[i].onfocus = function () {
                    var $p = this.parentNode.querySelector('.text');
                    this.removeAttribute('class', 'inputerror');
                    this.removeAttribute('class', 'inputsuccess');
                    $p.innerHTML = '';
                }
            }
           
          
           
            this.$repassword.onblur = function () {
                var $p = this.parentNode.querySelector('.text');
                if (this.value == '') {
                    this.setAttribute('class', 'inputerror');
                    $p.innerHTML = this.getAttribute('empty');
                } else {
                    if (this.value === _this.$password.value) {
                        this.setAttribute('class', 'inputsuccess');
                        flag_suc_repwd = true;
                    } else {
                        this.setAttribute('class', 'inputerror');
                        flag_suc_repwd = false;
                        $p.innerHTML = this.getAttribute('error');
                    }
                }
            }
        
            this.$checkbox.onclick = function () {
                var $p = this.parentNode.querySelector('.text');
                flag = !flag;
                if (flag) {
                    this.setAttribute('class', 'inputsuccess');
                    flag_suc_box = true;
                    $p.innerHTML = '';
                } else {
                    this.setAttribute('class', 'inputerror');
                    flag_suc_box = false;
                    $p.innerHTML = this.getAttribute('error');
                }
            }
      
         

        }}
}())
register.init('.form_body');