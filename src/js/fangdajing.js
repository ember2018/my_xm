var fangdajing = (function () {
    var $count = document.querySelector('.num');
    var $tianjia =  document.querySelector('.goumai');
    return {
        init() {
            this.event();

        },
        event() {
            var _this = this;
            var add = document.querySelector('.add');
            var sub = document.querySelector('.sub');
            var count = Number($count.value);
            add.onclick = function () {
                count ++
                $count.value = count;
            }
            sub.onclick = function () {
                count --;
                $count.value = count;
            }
 
        },


    }
}())