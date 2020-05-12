<template>
  <button :class="['m-btn', btnClass]">
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </button>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'default'
    },
    circle: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    btnClass() {
      return {
        'm-btn-default': this.type === 'default',
        'm-btn-primary': this.type === 'primary',
        'm-btn-circle': this.circle,
        'm-btn-hover': this.hover
      }
    }
  }
}
</script>
<style lang="scss">
@import '../styles/var.scss';
.m-btn {
  color: #fff;
  outline: none;
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 105px;
  padding: 5px;
  cursor: pointer;
  font-size: 15px;
  transition: 0.3s ease-in-out;
  &-default {
    color:#000;
    border-color: #ff443f;
    background-color: #fff;
    &:active,
    &:focus,
    &:hover {
      transform: translateY(-2px);
      background-color: transparent;
      color: #000;
      box-shadow: 0px 0px 5px 0px #fefefea3;
    }
  }
  &-primary {
    border-color: #ff443f;
    background-color: #ff443f;
    &:hover {
      transform: translateY(-2px);
      background-color: transparent;
      color: #000;
      box-shadow: 0px 0px 5px 0px #fefefea3;
    }
  }
  &-circle {
    border-radius: 20px;
  }
}
</style>
