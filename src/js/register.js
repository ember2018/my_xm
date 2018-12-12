

var block = (function () {

    var checkInput = {
        phone(str) {
            var reg = /^1[35789]\d{9}$/;
            return reg.test(str);
        },
        password(str) {
            var reg = /^\w{6,20}$/;
            return reg.test(str);
        },
        proving(str) {
            return false;
        }
    }
    var flag = false;
    var newcode;
    var timer = null;
    return {
        init(ele) {
            // 选择整个表单          
            this.$form = document.querySelector(".registe_bottom");
            //选择滑块框
            this.$lock = document.querySelector(".block");
            //选择小滑块
            this.$kuai = this.$lock.children[0];
            //选择手机框
            this.$phone = document.querySelector(".phone");
            //选择验证框
            this.$phone = document.querySelector(".proving");
            //选择密码框
            this.$phone = document.querySelector(".password");
            //选择所有input
            this.$inputAll = document.querySelectorAll(".input");
            this.$p = document.querySelector(".tip")
            //验证滑块
            this.huakuai();
            this.event();

        },
        event(ele) {


            var _this = this;
            for (let i = 0; i < this.$inputAll.length; i++) {
                _this.$inputAll[i].onblur = function () {

                    if (this.value == '') {
                        this.classList.add("error");
                        _this.$p.innerHTML = "内容为空"
                    }
                    else {
                        var bool = checkInput[this.name](this.value);

                        if (bool) {
                            this.classList.add("success");
                            _this.$p.innerHTML = '';
                        } else {
                            this.classList.add('error');
                            _this.$p.innerHTML = "填写错误"
                        }
                    }





                }


            }
        },
        huakuai(e) {
            var _this = this;
            this.$kuai.onmousedown = function (e) {
                e = e || window.event;
                var x = e.offsetX;
                var maxX = _this.$lock.clientWidth - this.offsetWidth;
                _this.$lock.onmousemove = function (ev) {
                    var left = ev.pageX - x - this.offsetLeft - _this.$form.offsetLeft;
                    if (left > maxX) {
                        left = maxX
                    } else if (left < 0) {
                        left = 0;
                    }
                    _this.$kuai.style.left = left + 'px';
                }
            }
            document.onmouseup = function () {
                _this.$lock.onmousemove = null;
                var timer = setInterval(_ => {
                    var left = parseInt(_this.$kuai.style.left) - 10;
                    if (left <= 0) {
                        left = 0;
                        clearInterval(timer);
                    }
                    _this.$kuai.style.left = left + 'px'
                }, 20)
            }
        }




    }
}())
block.init('.registe_bottom');








