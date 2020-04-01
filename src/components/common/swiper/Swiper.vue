<template>
  <div class="hy-swiper">
    <div class="swiper"
         @touchstart="touchStart"
         @touchmove="touchMove"
         @touchend="touchEnd">
        <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
        <slot name="indicator" 
              v-if="showIndicator && slideCount > 1">
              <div v-for="(item,index) in slideCount"
                   :key="index"
                   class="indi-item"
                   :class="{active: index === currentIndex-1}"></div>
        </slot>
    </div>
  </div>
</template>

<script>

  export default {
    name:'Swiper',
    props: {
      interval: {
          type: Number,
          default: 3000
      },
      animDuration: {
          type: Number,
          default: 300
      },
      moveRatio: {
          type: Number,
          default: 0.25
      },
      showIndicator: {
          type: Boolean,
          default: true
    },
},
    data () {
      return {
        slideCount: 0, //元素个数
        totalWidth: 0, //swiper宽度
        swiperStyle: {}, //swiper样式
        currentIndex: 1, //当前的index
        scrolling: false //是否在滚动
      };
    },

    mounted: function(){
        setTimeout(() => {
            //操作dom，在前后添加Slide
            this.handleDom();
            //开启定时器
            // console.log(this.interval)
            this.startTimer();
        }, 400)
    },

    methods: {
        /**
        定时器操作
        */
        startTimer: function () {
            this.playTimer = window.setInterval(() => {
                this.currentIndex++;
                this.scrollContent(-this.currentIndex * this.totalWidth);
            }, this.interval)
        },
        stopTimer: function () {
            window.clearInterval(this.playTimer);
        },
        /*
        滚动到正确位置
        */
        scrollContent: function (currentPosition) {
            //设置启动
            this.scrolling = true;
            //开始滚动画面
            this.swiperStyle.transition = 'transform' + this.animDuration + 'ms';
            this.setTransform(currentPosition);
            //判断滚动位置
            this.checkPosition();
            //滚动完成
            this.scrolling = false
        },
        /*
        校验正确位置
        */
        checkPosition: function() {
            window.setTimeout(() => {
                //校验正确位置
                this.swiperStyle.transition = '0ms';
                if (this.currentIndex >= this.slideCount + 1) {
                    this.currentIndex = 1;
                    this.setTransform(-this.currentIndex * this.totalWidth);
                } else if (this.currentIndex <= 0) {
                    this.currentIndex = this.slideCount;
                    this.setTransform(-this.currentIndex * this.totalWidth);
                }
                //结束移动后回调
                this.$emit('transitionEnd', this.currentIndex-1);
            }, this.animDuration)
        },
        /*
        设置滚动位置
        */
        setTransform: function(positon) {
            this.swiperStyle.transition = `translate3d(${positon}px, 0, 0)`;
            this.swiperStyle['-webkit-transform'] = `translate3d(${positon}px), 0, 0`;
            this.swiperStyle['-ms-transform'] = `translate3d(${positon}px), 0, 0`;
        },
        /*
        操作dom,在dom前后添加slide
        */
        handleDom: function() {
            //获取操作的元素
            let swiperEl = document.querySelector('.swiper');
            let slidesEl = swiperEl.getElementsByClassName('slide');
            //保存个数
            this.slideCount = slidesEl.length;
            //如果大于1个，就在前后添加一个slide
            if (this.slideCount >1) {
                let cloneFirst = slidesEl[0].cloneNode(true);
                let cloneLast = slidesEl[this.slideCount - 1].cloneNode(true);
                swiperEl.insertBefore(cloneLast, slidesEl[0]);
                swiperEl.appendChild(cloneFirst);
                this.totalWidth = swiperEl.offsetwidh;
                this.swiperStyle = swiperEl.style;
            }

            //让swiper元素，显示第一个(目前是显示前面添加的最后一个元素)
            this.setTransform(-this.totalWidth);
        },
        /**
        拖动事件处理
        */
        touchStart: function(e) {
            //如果正在滚动，不可以拖动
            if(this.scrolling) return;
            //停止定时器
            this.stopTimer();
            //保存开始滚动的位置
            this.startX = e.touches[0].pageX;
        },
        touchMove: function (e) {
            //计算出用户拖动的距离
            this.currentX = e.touches[0].pageX;
            this.distance = this.currentX - this.startX;
            let currentPosition = -this.currentIndex * this.totalWidth;
            let moveDistance = this.distance + currentPosition;

            //设置当前位置
            this.setTransform(moveDistance);
        },

        touchEnd: function () {
            //获取移动距离
            let currentMove = Math.abs(this.distance);

            //判断最终距离
            if(this.distance === 0){
                return
            }else if(this.distance > 0 && currentMove > this.totalWidth * this.moveRatio){
                //右边超过移动0.5
                this.currentIndex--
            }else if(this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
                //左边超过移动0.5
                this.currentIndex++
            }
            //移动到正确位置
            this.scrollContent(-this.currentIndex * this.totalWidth);

            //移动完成后重新开启定时器
            this.startTimer();
        },
        /*
            控制上一个，下一个
        */
        previous: function() {
            this.changeItem(-1);
        },
        next: function() {
            this.changeItem(1);
        },

        changeItem: function(num) {
            //移除定时器
            this.stopTimer();
            //修改index和位置
            this.currentIndex += num;
            this.scrollContent(-this.currentIndex * this.totalWidth)
            //添加定时器
            this.startTimer();
        }
    }
  }
</script>
<style>
#hy-swiper {
    overflow: hidden;
    position: relative;
}
.swiper {
    display: flex;
}
.indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
}
.indi-item {
    box-sizing: border-box;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: #fff;
    line-height: 8px;
    text-align: center;
    font-size: 12px;
    margin: 0, 5px;
}
.indi-item.active {
    background-color: rgba(212, 62, 46, 1.0);
}
</style>