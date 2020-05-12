<template>
  <div class="m-header">
    <div class="m-logo">LOGO</div>
    <m-nav :menuData="menuData"></m-nav>
    <div class="m-search">
      <div>
        <input type="text" placeholder="搜点什么..." />
      </div>
      <div>搜索</div>
    </div>
    <div class="m-userinfo">
      <Button type="primary">播放记录</Button>
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
          name: '菜单1',
          path: '/'
        },
        {
          name: '菜单2',
          path: '/movies'
        },
        {
          name: '菜单3',
          path: '/movies'
        },
        {
          name: '菜单4',
          path: '/movies'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.m-header {
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
    border: 1px solid #ff443f;
    border-radius: 20px;
    overflow: hidden;
    & > :nth-child(1) {
      width: 250px;
      height: 100%;
      line-height: 35px;
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
    }
  }
  .m-userinfo {
      margin-left: auto;
      margin-right: 50px;
  }
}
</style>
