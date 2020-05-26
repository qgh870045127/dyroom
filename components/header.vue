<template>
  <div class="m-header">
    <div class="m-logo">LOGO</div>
    <m-nav class="m-header-nav" :menuData="menuData"></m-nav>
    <div class="m-search">
      <div>
        <input type="text" placeholder="搜点什么..." />
      </div>
      <div>搜索</div>
    </div>
  </div>
</template>
<script>
import mNav from '@/components/nav'
export default {
  components: {
    mNav
  },
  data() {
    return {
      menuData: [
        {
          name: '首页',
          path: '/'
        },
        {
          name: '电影',
          path: '/movies'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.m-header {
  position: sticky;
  top: 0;
  z-index: 99;
  background: #fff;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 9, 18, 0.07);
  display: flex;
  align-items: center;
  .m-logo {
    width: 200px;
    height: 100%;
    background-color: #ff443f;
  }
  .m-search {
    height: 35px;
    display: flex;
    margin-left: 50px;
    line-height: 35px;

    & > :nth-child(1) {
      width: 250px;
      height: 100%;
      border: 1px solid #ff443f;
      border-radius: 20px 0px 0px 20px;
      box-sizing: border-box;
      overflow: hidden;
      input {
        outline: none;
        height: 30px;
        border-color: #fff;
        border-width: 0;
        margin-left: 20px;
        font-size: 15px;
        color: gray;
      }
    }
    & > :nth-child(2) {
      width: 80px;
      height: 100%;
      line-height: 35px;
      text-align: center;
      border-left: none;
      background-color: #ff443f;
      color: #fff;
      cursor: pointer;
      border-radius: 0px 20px 20px 0px;
    }
  }
  .m-userinfo {
    margin-left: auto;
    margin-right: 50px;
  }
}
@media screen and (max-width: 1200px) {
  .m-header {
    height: auto;
    flex-direction: column-reverse;
  }
  .m-logo {
    display: none;
  }
  .m-header-nav {
    width: 100%;
    justify-content: center;
  }
  .m-search {
    padding-top: 20px;
    width: 80% !important;
    justify-content: center;
    margin-left: 0px !important;
  }
}
</style>
