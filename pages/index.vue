<template>
  <div class="index">
    <movie-list type="电影" :info="info"></movie-list>
  </div>
</template>

<script>
import movieList from '@/components/movieList'
export default {
  components:{
    movieList
  },
  data(){
    return {
      info:[]
    }
  },
  created(){
      this.info = new Array(10).fill({
          img:require('../assets/bg.jpg'),
          title:'蜘蛛侠',
          enTitle:'蜘蛛侠',
          rate:'7'
        })
  }
}
</script>

<style lang="scss"></style>
