<template>
  <div>
    <div class="menu">
      <div class="menu-left">
        <ul>
          <li class="menu-item" v-for="(menu,index) in menus" :key="index" :class="{current: index === currentIndex}"
              @click="clickList(index)" ref="menuList">
            <p class="text">{{ menu.name }}</p>
          </li>
        </ul>
      </div>

      <div class="menu-right" ref="itemList">
        <ul>
          <li class="cate" v-for="(menu, index1) in menus" :key="index1">
            <h4 class="cate-title">{{ menu.name }}</h4>
            <ul class="cate-item">
              <li v-for="(item, index2) in menu.sub" :key="index2">
                <router-link class="cate-item-wrapper" :to="{name: 'goods_list'}">
                  <div class="cate-item-img">
                    <img :src="item.image" alt/>
                  </div>
                  <span>{{ item.name }}</span>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="cate-bottom"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data() {
    return {
      menus: [],
      rightLiTops: [],
      scrollY: 0        // 记住右菜单的滚动距离
    }
  },
  created() {
    this.menus = [{"id": 1,"name": "手机数码","pid": 0,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/7f78f93a82e5dbd6eb1ae21c3061e32f.jpg","sub": [{"id": 2,"name": "小米","pid": 1,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/f2efb0888bef8fd157f2f1c8755e6f80.png","sub": []},{"id": 3,"name": "华为","pid": 1,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/953cfabd3bf5c3a482bbe9ac66c8fa21.jpg","sub": []},{"id": 4,"name": "iPhone","pid": 1,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/b87144fdb530687b9558d921e83d48ab.jpg","sub": []},{"id": 5,"name": "vivo","pid": 1,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/670b2f18751fd29970efe26398391274.png","sub": []},{"id": 6,"name": "OPPO","pid": 1,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/a0e3ce31f804d56b14271a16dcbdc10b.png","sub": []},{"id": 7,"name": "魅族","pid": 1,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/6bbf72a71c1bcf6e443d14fefedd103f.jpg","sub": []},{"id": 8,"name": "三星","pid": 1,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/58bfad062b532a1d3c42099f819068cb.png","sub": []},{"id": 9,"name": "女性手机","pid": 1,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/9aeaf37dc32d926285f2fc3427de02df.jpg","sub": []}]},{"id": 10,"name": "家用电器","pid": 0,"image": "http://43.138.107.193:8080/static/api/goods/img/noimg.png","sub": [{"id": 11,"name": "电水壶/热水瓶","pid": 10,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/0a1e8b506b4bbe1a73f16d70b2eece7e.jpg","sub": []},{"id": 12,"name": "电压力锅","pid": 10,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/aa69a3bcffcc52b0e365ca65243ec835.jpg","sub": []},{"id": 13,"name": "电饭煲","pid": 10,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/f1c0cf688bcb91fe32b5c2a7906e6332.jpg","sub": []},{"id": 14,"name": "电磁炉","pid": 10,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/253a5d721e376ecf3b1a5a06baa7a317.jpg","sub": []},{"id": 15,"name": "微波炉","pid": 10,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/890e9fbcac4cd5ff338fea5dc2596540.jpg","sub": []},{"id": 16,"name": "电饼铛","pid": 10,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/ccc6a23166e0a673309cb6759ef160b3.jpg","sub": []},{"id": 17,"name": "豆浆机","pid": 10,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/fd4ba9365e03c0976e8cf22f78a902c2.jpg","sub": []},{"id": 18,"name": "多用途锅","pid": 10,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/9b9f45fc1b08982f025cbe565c7ec008.jpg","sub": []}]},{"id": 19,"name": "电脑办公","pid": 0,"image": "http://43.138.107.193:8080/static/api/goods/img/noimg.png","sub": [{"id": 20,"name": "轻薄本","pid": 19,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/1ed760174279e3970e85217019c1edd0.png","sub": []},{"id": 21,"name": "游戏本","pid": 19,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/5e4130cc28927665799c3379c78a1713.png","sub": []},{"id": 22,"name": "机械键盘","pid": 19,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/e6c8697469c56055223756e39c60542a.jpg","sub": []},{"id": 23,"name": "组装电脑","pid": 19,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/2544453b66d11ff24c626638dcb2565e.jpg","sub": []},{"id": 24,"name": "移动硬盘","pid": 19,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/4a1926d760dfa56abdbd4ce97813acc3.jpg","sub": []},{"id": 25,"name": "显卡","pid": 19,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/167b37c9ea36b8acc5ff9f1ff4a32f86.jpg","sub": []},{"id": 26,"name": "游戏台式机","pid": 19,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/c0fd9e8be4fdb13e72838d21ff22b011.jpg","sub": []},{"id": 27,"name": "家用打印机","pid": 19,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/d98333ee6fddf537ff755a0c90ab93b1.jpg","sub": []},{"id": 28,"name": "吃鸡装备","pid": 19,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/9b042c5255371159de8d62216564a095.jpg","sub": []}]},{"id": 29,"name": "汽车用品","pid": 0,"image": "http://43.138.107.193:8080/static/api/goods/img/noimg.png","sub": [{"id": 30,"name": "机油","pid": 29,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/c90ae170808eaa73e258950be16fbcf4.jpg","sub": []},{"id": 31,"name": "汽车坐垫","pid": 29,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/57f65d64ef5df464e904f37f0141bd69.jpg","sub": []},{"id": 32,"name": "洗车水枪","pid": 29,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/d6b17ebab487aefed848e43f7c754f02.jpg","sub": []},{"id": 33,"name": "行车记录仪","pid": 29,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/b808e009ce547e739dad93bf6dbb2f24.jpg","sub": []},{"id": 34,"name": "轮胎","pid": 29,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/b44b23d989fbf161afa93b8ac3e00a82.jpg","sub": []},{"id": 35,"name": "应急救援","pid": 29,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/b36db7438c1ed9bb962e944688f9fc88.png","sub": []},{"id": 36,"name": "香水","pid": 29,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/b861d4d32236610d7c477c8a0a4bbcb7.jpg","sub": []},{"id": 37,"name": "功能小件","pid": 29,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/5133f9296d5bda3abec8403a3cf6c35e.jpg","sub": []},{"id": 38,"name": "挂件","pid": 29,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/84dbfe924450cd313fe24e15512ba379.jpg","sub": []}]},{"id": 39,"name": "男装","pid": 0,"image": "http://43.138.107.193:8080/static/api/goods/img/noimg.png","sub": [{"id": 40,"name": "夹克","pid": 39,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/d73ec1fab63babbfb39ce44ae35b96c8.jpg","sub": []},{"id": 41,"name": "T恤","pid": 39,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/73c491573c9d3d3d8327704733a71207.jpg","sub": []},{"id": 42,"name": "针织衫","pid": 39,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/d913b18c3d17c1d99486d51435fc3982.jpg","sub": []},{"id": 43,"name": "衬衫","pid": 39,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/aac1ab3e9531db0c9e53d636ccb1125a.jpg","sub": []},{"id": 44,"name": "卫衣","pid": 39,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/f3d61ead06fffccac07c6b13f521a625.jpg","sub": []},{"id": 45,"name": "风衣","pid": 39,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/e6d2db57b8d3c322e8ea93a96702c65e.jpg","sub": []},{"id": 46,"name": "牛仔裤","pid": 39,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/e32f9556f75d5122852021981cb4b621.jpg","sub": []},{"id": 47,"name": "休闲裤","pid": 39,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/5a71d7061e49ad91d7089de45d610778.jpg","sub": []},{"id": 48,"name": "自营男装","pid": 39,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/e47ac280c18965c85a8bcdeb00065257.jpg","sub": []}]},{"id": 49,"name": "女装","pid": 0,"image": "http://43.138.107.193:8080/static/api/goods/img/noimg.png","sub": [{"id": 50,"name": "早春新品","pid": 49,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/1d481ed906b6237e09225babfba7914d.jpg","sub": []},{"id": 51,"name": "连衣裙","pid": 49,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/faddc38fbb14032e8bbad6508c2bf367.jpg","sub": []},{"id": 52,"name": "衬衫","pid": 49,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/cd4de65c042eeb3454fd3f296e630991.jpg","sub": []},{"id": 53,"name": "T恤","pid": 49,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/2cf6814d0c79abb994942edf402e2f60.jpg","sub": []},{"id": 54,"name": "牛仔裤","pid": 49,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/10b01991bf0ece09284ac70730200ec7.jpg","sub": []},{"id": 55,"name": "卫衣","pid": 49,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/b7fc13f5beb1709b643c912913c85bea.jpg","sub": []},{"id": 56,"name": "针织衫","pid": 49,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/eebbe04d1504c918f9117ebe21dac34f.jpg","sub": []},{"id": 57,"name": "牛仔外套","pid": 49,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/7e42c687e645a4c93fbfb5b373029266.jpg","sub": []},{"id": 58,"name": "自营女装","pid": 49,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/9d0e515e86086a29c3d8390d5cb93252.jpg","sub": []}]},{"id": 59,"name": "钟表珠宝","pid": 0,"image": "http://43.138.107.193:8080/static/api/goods/img/noimg.png","sub": [{"id": 60,"name": "瑞表","pid": 59,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/518eef9cb854a3cd4cd348882fab1568.jpg","sub": []},{"id": 61,"name": "国表","pid": 59,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/48a2a5afdebab0e4510349e2fd0f09b9.jpg","sub": []},{"id": 62,"name": "德表","pid": 59,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/cc1749b9554b14692293444bbd0d4bb8.jpg","sub": []},{"id": 63,"name": "日韩表","pid": 59,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/02ce848b272a1d07a6f254a844e56db8.jpg","sub": []},{"id": 64,"name": "儿童手表","pid": 59,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/610569bf2fb1e202c2608a7641ba0643.jpg","sub": []},{"id": 65,"name": "欧美表","pid": 59,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/75966bad4dd9708e1301650b03113c16.jpg","sub": []}]},{"id": 66,"name": "内衣配饰","pid": 0,"image": "http://43.138.107.193:8080/static/api/goods/img/noimg.png","sub": [{"id": 67,"name": "内衣馆","pid": 66,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/b10cb30ca7e99b98fbe11f700a1042db.jpg","sub": []},{"id": 68,"name": "大牌文胸","pid": 66,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/66ea89f35f16bb417f23aed193145c5e.jpg","sub": []},{"id": 69,"name": "自营内衣","pid": 66,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/f190312466ce914bafa0b582e8c98831.jpg","sub": []},{"id": 70,"name": "内衣爆款","pid": 66,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/02bda63c80a27a00d73e11ae2859cd5e.jpg","sub": []},{"id": 71,"name": "女士围巾/披肩","pid": 66,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/050c899cdf899d549b14abd958c02a04.jpg","sub": []},{"id": 72,"name": "配饰馆","pid": 66,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/fd7c742fca0ad155c69157dac9fd9bd5.jpg","sub": []}]},{"id": 73,"name": "箱包手袋","pid": 0,"image": "http://43.138.107.193:8080/static/api/goods/img/noimg.png","sub": [{"id": 74,"name": "拉杆箱","pid": 73,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/d8ad8e6f509a6230fb9dfd8043a1cb61.jpg","sub": []},{"id": 75,"name": "时尚男包","pid": 73,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/9486f8909cf9088b1a89bebc722b1ca2.jpg","sub": []},{"id": 76,"name": "男士腰带","pid": 73,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/450444484bbf37c728d91ec4997c8d80.jpg","sub": []},{"id": 77,"name": "男包上新","pid": 73,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/7f78f93a82e5dbd6eb1ae21c3061e32f.jpg","sub": []},{"id": 78,"name": "自营女包","pid": 73,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/52d0c6bd9d566da302e5e6b7f882f543.jpg","sub": []},{"id": 79,"name": "新款双肩包","pid": 73,"image": "http://43.138.107.193:8080/static/uploads/goods/category_image/2019/05/15/12fdd667b2e683519f6720ff57753410.jpg","sub": []}]}]
  },
  watch: {
    menus() {
      // $nextTick用来在下次DOM更新循环结束之后执行延迟回调
      this.$nextTick(() => {
        this._initBScroll()      // 初始化better-scroll
        this._initRightHeight()  // 初始化右边菜单的高度
      })
    }
  },
  computed: {
    currentIndex() {
      // 当 scrollY 发生改变时，修改左菜单的激活项
      const {scrollY, rightLiTops} = this
      // 从右菜单中查找元素，返回元素索引
      return rightLiTops.findIndex((top, index) => {
        if (index === rightLiTops.length - 2) {
          return true
        }
        if (scrollY >= top && scrollY < rightLiTops[index + 1]) {
          this._initLeftScroll(index)
          return true
        }
      })
    }
  },
  methods: {
    // 单击左菜单中的某一项后，将右菜单切换到对应项下面
    clickList(index) {
      this.scrollY = this.rightLiTops[index]
      this.rightBscroll.scrollTo(0, -this.scrollY)
    },
    // 初始化better-scroll
    _initBScroll() {
      this.leftBscroll = new BScroll('.menu-left', {
        click: true,
        mouseWheel: true
      })
      this.rightBscroll = new BScroll('.menu-right', {
        click: true,
        mouseWheel: true,
        probeType: 3  // 实时派发 scroll 事件
      })
      this.rightBscroll.on('scroll', (pos) => {
        this.scrollY = Math.abs(pos.y)
      })
    },
    // 初始化右边菜单的高度
    _initRightHeight() {
      let itemArray = []
      let top = 0
      itemArray.push(top)
      let allList = this.$refs.itemList.getElementsByClassName('cate')
      // 将 allList 转换为普通数组进行遍历，记录每个元素的高度
      Array.prototype.slice.call(allList).forEach(li => {
        top += li.clientHeight
        itemArray.push(top)
      })
      let bottom = this.$refs.itemList.getElementsByClassName('cate-bottom')[0]
      bottom.style.height = this.$refs.itemList.clientHeight / 1.2 + 'px'
      this.rightLiTops = itemArray
    },
    // 右菜单滚动时，左菜单联动
    _initLeftScroll(index) {
      let menu = this.$refs.menuList
      let el = menu[index]
      // scrollToElement(el, time, offsetX, offsetY, easing)
      this.leftBscroll.scrollToElement(el, 300, 0, -100)
    }
  }
}
</script>

<style lang="less" scoped>
ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

.menu {
  display: flex;
  position: absolute;
  text-align: center;
  top: 40px;
  bottom: 50px;
  width: 100%;
  overflow: hidden;

  .menu-left {
    flex: 0 0 80px;
    width: 80px;
    background: #c5ddf6;

    .menu-item {
      height: 54px;
      width: 100%;

      .text {
        width: 100%;
        line-height: 54px;
        margin-bottom: 0;
      }
    }

    .current {
      width: 100%;
      background: #fff;

      .text {
        color: #3bafd2;
        font-weight: 700;
      }
    }
  }

  .menu-right {
    flex: 1;
    background: #fff;

    .cate {
      height: 100%;

      .cate-title {
        margin: 0;
        text-align: left;
        font-size: 14px;
        color: #333;
        font-weight: bold;
        padding: 10px;
      }

      .cate-item {
        padding: 7px 10px 10px;
        display: flex;
        overflow: hidden;
        flex-flow: row wrap;

        li {
          width: 33.3%;

          .cate-item-wrapper {
            .cate-item-img {
              width: 100%;

              img {
                width: 70px;
                height: 70px;
              }
            }

            span {
              display: inline-block;
              font-size: 14px;
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
