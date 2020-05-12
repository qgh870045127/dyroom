<template>
  <div class="m-nav">
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
          4}px`
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
        4}px`
      this.$router.push(item.path)
    },
    handleEnter(event) {
      this.handleSetPosition({
        opacity: 1,
        width: `${event.target.clientWidth - 60}px`,
        left: `${event.target.offsetLeft +
          Math.ceil(event.target.clientWidth / 4) +
          4}px`
      })
    },
    handleLeave(event, index) {
      if (this.isActived) {
        this.handleSetPosition({
          opacity: 1,
          left: this.isActived
        })
        return
      }
      this.handleSetPosition({
        opacity: 0,
        left: index + 1 > this.menuData.length / 2 ? '100%' : '-100px'
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
  align-items: center;
  .m-nav-item {
    cursor: pointer;
    padding: 0px 30px;
    transition: all 0.3s;
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
