<template>
  <div class="tab-block">
    <div class="tab-content">
      <div class="page active n-hot" data-hot=".n-hot" data-cid="c_dmLad">
        <div class="list-wrap" style="margin-top: 0px;">
          <div class="item" data-id="1206875" data-bid="dp_wx_home_movie_list">
            <div class="main-block">
              <div class="avatar" sort-flag>
                <div class="default-img-bg">
                  <img
                    src="https://p1.meituan.net/128.180/movie/426f1f3f1b145f763b75a60c7c39c44a535093.jpg"
                    onerror="this.style.visibility='hidden'"
                  >
                </div>
              </div>
              <div class="mb-outline-b content-wrapper">
                <div class="column content">
                  <div class="box-flex movie-title">
                    <div class="title line-ellipsis v3dimax_title">大黄蜂</div>

                    <span class="version v3d imax"></span>
                  </div>

                  <div class="detail column">
                    <div class="score line-ellipsis">
                      <span class="score-suffix">观众评</span>
                      <span class="grade">9.1</span>
                    </div>

                    <div class="actor line-ellipsis">主演: 海莉·斯坦菲尔德,约翰·塞纳,小豪尔赫·兰登伯格</div>

                    <div class="show-info line-ellipsis">今天192家影院放映2103场</div>
                  </div>
                </div>

                <div class="button-block" data-id="1206875">
                  <div class="btn normal">
                    <span class="fix" data-bid="dp_wx_home_movie_btn">购票</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="more"></div>
      </div>
      <div class="page f-hot" data-hot=".f-hot" data-cid="c_3j5p10oz">
        <div class="list-wrap" style="margin-top: 0px;">
          <div class="most-expected">
            <p class="title">近期最受期待</p>
            <div class="most-expected-list"></div>
          </div>
          <div class="coming-list"></div>
        </div>
        <div class="more"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // M
  data() {
    return {
      // 存放新闻数据
      news: []
    };
  },
  methods: {
    // 获取数据的方法
    async getNews() {
      let data = await this.$axios.get("http://localhost:3020");
      console.log(data.data.movieList);
      this.news = this.news.concat(data.data.movieList);
    }
  },
  created() {
    // 触发getNews方法
    this.getNews();
  }
};
</script>
<style scoped>
</style>


