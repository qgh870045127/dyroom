<template>
  <div ref="nav" class="m-nav">
    <div
      ref="navItem"
      class="m-nav-item"
      v-for="(item, index) in menuData"
      :key="item.path"
      :id="item.path"
      @mouseenter="handleEnter"
      @click="handleClick($event, item)"
      @mouseleave="handleLeave($event, index)"
    >
      {{ item.name }}
    </div>
    <i ref="block" class="m-nav-block"></i>
  </div>
</template>
<script>
export default {
  props: {
    menuData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isActived: null
    }
  },
  mounted() {
    this.$refs.navItem.forEach(element => {
      if (this.$route.path == element.id) {
        this.isActived = `${element.offsetLeft +
          Math.ceil(element.clientWidth / 4) +
          7}px`
        this.handleSetPosition({
          opacity: 1,
          width: `${element.clientWidth - 60}px`,
          left: this.isActived
        })
      }
    })
  },
  methods: {
    handleClick(event, item) {
      this.isActived = `${event.target.offsetLeft +
        Math.ceil(event.target.clientWidth / 4) +
        7}px`
      this.$router.push(item.path)
    },
    handleEnter(event) {
      this.handleSetPosition({
        opacity: 1,
        width: `${event.target.clientWidth - 60}px`,
        left: `${event.target.offsetLeft +
          Math.ceil(event.target.clientWidth / 4) +
          7}px`
      })
    },
    handleLeave(event, index) {
      this.handleSetPosition({
        opacity: 1,
        left: this.isActived
      })
    },
    handleSetPosition(object) {
      Object.assign(this.$refs.block.style, object)
    }
  }
}
</script>
<style lang="scss" scoped>
.m-nav {
  display: flex;
  margin: 0px 20px;
  position: relative;
  overflow: hidden;
  height: 100%;
  min-height: 40px;
  align-items: center;
  .m-nav-item {
    cursor: pointer;
    transition: all 0.3s;
    text-align: center;
    min-width: 90px;
    &:hover {
      color: red;
    }
  }
  .m-nav-block {
    position: absolute;
    left: -100px;
    bottom: 0;
    height: 5px;
    background-color: red;
    transition: all 0.5s;
    opacity: 0;
    border-radius: 8px;
  }
}
</style>
