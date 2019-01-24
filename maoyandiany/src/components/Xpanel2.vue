<template>
  <div class="page f-hot active" data-hot=".f-hot" data-cid="c_3j5p10oz">
    <div class="list-wrap" style="margin-top: 0px;">
      <div class="most-expected">
        <p class="title">近期最受期待</p>
        <div class="most-expected-list">
          <router-link :to="`/detail/${index}/${'app'}`" v-for="(n,index) in news" :key="index">
            <div class="expected-item" data-id="344869">
              <div class="poster default-img-bg">
                <img :src="n.img|capitalize2" onerror="this.style.visibility='hidden'">
                <span class="wish-bg"></span>
                <span class="wish">
                  <span class="wish-num" v-text="n.wish"></span>人想看
                </span>
              </div>
              <h5 class="name line-ellipsis" v-text="n.nm"></h5>
              <p class="date" v-text="n.comingTitle"></p>
            </div>
          </router-link>
        </div>
      </div>

      <div class="coming-list">
        <router-link :to="`/detail/${index}/${'app'}`" v-for="(n,index) in movie" :key="index">
          <div>
            <p class="group-date" v-text="n.comingTitle"></p>
            <div class="item" data-id="1203740" data-bid="dp_wx_home_movie_list">
              <div class="main-block">
                <div class="avatar" sort-flag>
                  <div class="default-img-bg">
                    <img
                      :src="n.img|capitalize3"
                      onerror="this.style.visibility='hidden'"
                    >
                  </div>
                </div>
                <div class="mb-outline-b content-wrapper">
                  <div class="column content">
                    <div class="box-flex movie-title">
                      <div class="title line-ellipsis" v-text="n.nm"></div>
                    </div>

                    <div class="detail column">
                      <div class="wantsee line-ellipsis">
                        <span class="person">115473</span>
                        <span class="p-suffix">人想看</span>
                      </div>

                      <div class="actor line-ellipsis" v-text="n.star"></div>

                      <div class="actor line-ellipsis" v-text="n.rt"></div>
                    </div>
                  </div>

                  <div class="button-block" data-id="1203740">
                    <div class="btn pre" data-id="1203740">
                      <span class="fix" data-bid="dp_wx_home_movie_btn">预售</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 存放第一条数据
      news: [],
      //存第二条数据
      movie: []
    };
  },
  methods: {
    // 获取数据的方法

    async getNews() {
      var data = await this.$axios.get(
        "http://localhost:4008/movie/ajax/mostExpected?ci=1&limit=10&offset=0&token="
      );
      // console.log(data);
      this.news = data.data.coming;
    },
    async getMovie() {
      var data2 = await this.$axios.get(
        "http://localhost:4008/movie/ajax/comingList?ci=1&token=&limit=10"
      );
      console.log(data2);
      this.movie = data2.data.coming;
    }
  },

  //过滤器
  filters: {
    capitalize2: function(value) {
      return value.replace("w.h", "170.230");
    },
    capitalize3: function(value) {
      return value.replace("w.h", "128.180");
    }
  },
  created() {
    // 触发getNews方法

    this.getNews();
    this.getMovie();
  }
};
</script>
<style scoped>
/* .list-wrap{
  padding-top: 100px
} */
.most-expected {
  padding: 12px 0 12px 15px;
  background-color: #fff;
  margin-bottom: 10px;
}
.most-expected .title {
  margin: 0 0 12px;
  font-size: 14px;
  color: #333;
}
.most-expected-list {
  overflow: scroll;
  white-space: nowrap;
}
.expected-item {
  display: inline-block;
  width: 85px;
  overflow: hidden;
  margin-right: 10px;
}
.expected-item .poster {
  width: 85px;
  height: 115px;
  position: relative;
  margin-bottom: 6px;
}

.expected-item .name {
  margin: 0 0 3px;
  font-size: 13px;
  color: #222;
}

.line-ellipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.expected-item .date {
  margin: 0;
  font-size: 12px;
  color: #999;
}
.expected-item .poster .wish-bg {
  display: inline-block;
  width: 100%;
  height: 35px;
  position: absolute;
  bottom: 0;
  background-image: -webkit-linear-gradient(top, rgba(77, 77, 77, 0), #000);
  background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
}
.expected-item .poster .wish {
  position: absolute;
  left: 4px;
  bottom: 2px;
  color: #faaf00;
  font-size: 11px;
  font-weight: 600;
}
.expected-item .poster .wish {
  position: absolute;
  left: 4px;
  bottom: 2px;
  color: #faaf00;
  font-size: 11px;
  font-weight: 600;
}
.expected-item .poster img {
  height: 100%;
}

/* 第二块 */
.coming-list .group-date {
    padding: 12px 15px 0;
    margin: 0;
    font-size: 14px;
    color: #333;
}
.list-wrap .item {
    padding-left: 15px;
    background-color: #fff;
}
.main-block {
    position: relative;
    width: 100%;
}
.avatar {
    width: 64px;
    height: 90px;
    position: relative;
    margin-top: 12px;
    float: left;
}
.content-wrapper {
    padding: 12px 14px 12px 0;
    margin-left: 74px;
    height: 90px;
    max-height: 90px;
    position: relative;
}
.default-img-bg {
    background-color: #e1e1e1;
    background-size: 100% 100%;
}
.content {
    padding-right: 5px;
    margin-right: 48px;
    overflow: hidden;
}
.button-block {
    font-size: 12px;
    position: absolute;
    right: 14px;
    top: 0;
    bottom: 0;
    height: 27px;
    margin: auto;
}
.movie-title {
    max-height: 24px;
    margin-bottom: 7px;
    line-height: 24px;
    overflow: hidden;
}
.detail {
    box-sizing: border-box;
    line-height: 1;
    overflow: hidden;
}
.title {
    font-size: 17px;
    color: #333;
    font-weight: 700;
    padding-right: 5px;
    flex-shrink: 1;
}
.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.footerTab, a, div {
    -webkit-tap-highlight-color: transparent;
}
.detail .wantsee .person {
    color: #faaf00;
    font-size: 15px;
    font-weight: 600;
}
.detail .wantsee .p-suffix {
    font-size: 13px;
    margin-left: -2px;
    display: inline-block;
    color: #666;
}
.button-block .btn {
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    box-sizing: border-box;
    background-color: #f03d37;
    color: #fff;
    border-radius: 4px;
    white-space: nowrap;
    font-size: 12px;
    cursor: pointer;
}
.item .button-block .btn.pre {
    background-color: #3c9fe6;
}
.detail .actor, .item .detail .score, .tab-content .list-wrap .item .detail .show-date, .tab-content .list-wrap .item .detail .show-info {
    font-size: 13px;
    color: #666;
}
.item .detail>div+div {
    margin-top: 6px;
    line-height: 15px;
}

.line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
</style>

