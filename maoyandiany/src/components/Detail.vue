<template>
  <div>
    <header class="navbar">
      <div class="nav-wrap-left" @click="goin">
        <a class="back" href="#" onclick="javascript: window.history.back(); return false">
          <i class="icon-back"></i>
        </a>
      </div>
      <h1 class="nav-header">猫眼电影</h1>
    </header>

    <div class="search-header">
      <div class="input-wrapper">
        <img
          class="search-icon"
          src="//s0.meituan.net/bs/?f=my-canary:/deploy/images/search.png"
          alt
        >
        <input
          v-model="keyword"
          cancel-text="取消"
          placeholder="搜索"
          autofocus
          @input="search"
          class="search-input"
          type="text"
        >
        <img
          class="del-input"
          style="display:none"
          src="//s0.meituan.net/bs/?f=my-canary:/deploy/images/close.png"
          alt
        >
      </div>
      <div class="cancel" onclick="javascript: window.history.back();">取消</div>
    </div>
     <mt-cell v-for="item in result" :key="item.id" @click.native="goto(item.id)">
        <span class="pic"><img :src="item.images.small"/></span>
        <div>
          <h4>{{item.title}}</h4>
          <p>年份：{{item.year}}</p>
          <p>类型：{{item.genres.join()}}</p>
          <p>导演：{{item.directors.map(item=>item.name).join()}}</p>
          <p>主演：{{item.casts.map(item=>item.name).join()}}</p>
        </div>
      </mt-cell>
    </mt-search>
    <!-- <div class="page search-list">
    <mt-search
      v-model="keyword"
      cancel-text="取消"
      placeholder="搜索"
      autofocus
      @input="search"
    >
      <mt-cell v-for="item in result" :key="item.id" @click.native="goto(item.id)">
        <span class="pic"><img :src="item.images.small"/></span>
        <div>
          <h4>{{item.title}}</h4>
          <p>年份：{{item.year}}</p>
          <p>类型：{{item.genres.join()}}</p>
          <p>导演：{{item.directors.map(item=>item.name).join()}}</p>
          <p>主演：{{item.casts.map(item=>item.name).join()}}</p>
        </div>
      </mt-cell>
    </mt-search>
    </div>-->
  </div>
</template>
<script type="text/javascript">
import "../styles/all.css";

export default {
 props:['keyword'],
 data() {
    return {
      // keyword: "",
      timer: null,
      result: []
    };
  },
  methods: {
    goin() {
      console.log(this);
      this.$router.push({ path: "/app/ciname" });
    },
    search() {
      // 海->海王
      clearTimeout(this.timer);

      if (!this.keyword) return;

      this.timer = setTimeout(() => {
        this.$axios
          .get("http://localhost:4010/dbapi/search", {
            params: {
              q: this.keyword
            }
          })
          .then(res => {
            let data = res.data;
            console.log(data);

            this.result = data.subjects;
          });
      }, 1000);
    },
    goto(id) {
      this.$router.push({ path: "/detail/" + id });
      // this.$router.push({name:'Detail',params:{id},query:{keyword:'xxx'}})
    },
    created() {
      console.log(this.keyword);
      // 路由传参：缺点：获取繁琐
      // this.keyword = this.$route.params.keyword;
      this.search();
    }
  }
};
</script>

<style scoped >
.search-list .pic {
  margin-right: 10px;
}
.search-list img {
  height: 80px;
  width: 60px;
}
.search-list .mint-cell-value {
  width: 100%;
  font-size: 12px;
}
.search-list .mint-cell-value p {
  margin: 2px 0;
}
.navbar {
  height: 50.5px;
  color: #fff;
  background: #e54847;
  border-bottom: 1px solid #e54847;
  display: -webkit-box;
  display: -ms-flexbox;
  position: relative;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.navbar .nav-wrap-left {
  height: 50.5px;
  width: 50.5px;
  line-height: 50.5px;
  padding: 0 15px;
}
.nav-wrap-left .icon-backback {
  height: 50px;
  width: 22.5px;
  line-height: 50px;
}
.icon-back {
  display: inline-block;
  width: 22.5px;
  height: 22.5px;
  vertical-align: middle;
  position: relative;
}
.icon-back:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  width: 16px;
  height: 16px;
  border-bottom: 2px solid #fff;
  border-left: 2px solid #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
.nav-header {
  display: block;
  -webkit-box-flex: 1;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 50px;
  margin: 0 52.5px 0 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>