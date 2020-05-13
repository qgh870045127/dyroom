<template>
  <div class="m">
    <div class="title">
      <h2>{{ type }}</h2>
      <span></span>
    </div>
    <div class="mContent">
      <div class="box" v-for="(item, index) in info" :key="index">
        <div class="imgBox">
          <img :src="item.img" alt />
          <span></span>
        </div>
        <div class="messageBox">
          <div class="txtBox">
            <p>{{ item.title }}</p>
            <p>{{ item.enTitle }}</p>
          </div>
          <div class="grade">
            {{ item.rate }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: String,
    info: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="scss" scoped>
.m {
  padding-top: 10px;
}
.m .title h2 {
  font-size: 20px;
  padding-bottom: 5px;
}

.m .title span {
  display: block;
  width: 70px;
  height: 6px;
  background-color: #0399df;
  border-radius: 5px;
}

@media screen and (max-width:1200px) {
  .m .mContent {
    display: flex !important;
    flex-wrap: wrap;
    justify-content: center;
  }
}
.m .mContent .box {
  display: inline-block;
  width: 165px;
  background-color: #fff;
  margin: 10px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.2);
  }
}

.m .mContent .box .imgBox {
  width: 100%;
  height: 160px;
  position: relative;
}

.m .mContent .box .imgBox img {
  width: 100%;
  height: 100%;
}
.m .mContent .box .imgBox span {
  display: block;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 0;
  border-bottom: 30px solid #fff;
  border-right: 180px solid transparent;
}

.m .mContent .box .messageBox {
  padding: 0 20px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
}
.m .mContent .box .messageBox .txtBox :nth-child(1) {
  margin: 5px 0;
  font-size: 18px;
}

.m .mContent .box .messageBox .txtBox :nth-child(2) {
  margin: 5px 0;
  font-size: 16px;
  color: #ccc;
  font-weight: 400;
}

.m .mContent .box .messageBox .grade {
  font-size: 30px;
  color: #f7b14f;
}</style
>>
