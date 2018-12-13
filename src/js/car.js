var shopCar = (function () {
    
    return {
        init(ele) {
          
            this.$check1 = document.querySelector('.danxuan');
            this.$js = document.querySelector('.jisuankuang');
            this.$shopCar = document.querySelector('.zhong_sp');
            this.$thing = document.querySelector(".kykul")
            this.$things = this.$thing.querySelectorAll("li")
            this.$jia = document.querySelector('.jia');
            this.$jian = document.querySelector('.jian');
            this.$count = document.querySelector('.num');

            this.event();
        },
        event() {
            
            var _this = this;

              

            var count = Number(this.$count.value);

            _this.$jia.onclick = function () {
                count ++
                _this.$count.value = count;
            }
            _this.$jian.onclick = function () {
                count --;
                _this.$count.value = count;
            }
        
            this.$thing.onclick  =function(){
                _this.insertData();
            }
            
            
            // console.log(this.$things.length)
        },
        
        insertData(){
            console.log(1);
            var li = document.createElement('li');
            li.innerHTML = ` 

            <input type="checkbox" class="danxuan fl" checked/>
            <img src="../images/li4.jpg" alt="" class="tu fl"/>


            <div class="neirong fl">
                Beauty Buffet Scentio Q10牛奶洗面奶 100克/支 深层清洁
                <p><img src="../images/77.png" alt="" />支持7天无忧退货</p>
            </div>

            <div class="jiner fl">
                <del class="yuanjia">98.00</del>
                <div class="xianjia">39.00</div>
            </div>


            <div class="jj fl">
                <button class="jian fl">-</button>
                <input type="text" value="1" class="num fl"/>
                <button class="jia fl">+</button>
            </div>


            <div class="xi fl">
                <p class="xiaoji">78.00</p>
                <p class="sui"><i class="fa fa-question-circle-o" aria-hidden="true"></i>预计税费：￥7.53</p>
            </div>

            <div class="sch">
                <p class="shanchu">删除</p>
            </div>

        `
        this.$shopCar.appendChild(li);
        }
    }

}())
shopCar.init();
