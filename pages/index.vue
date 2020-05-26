<template>
  <div class="index">
    <movie-list type="电影" :info="info"></movie-list>
  </div>
</template>

<script>
import movieList from '@/components/movieList'
export default {
  components: {
    movieList
  },
  data() {
    return {
      info: []
    }
  },
  created() {
    this.$axios
      .get('/index/moviesList', {
        params: {
          row: 100
        }
      })
      .then(res => {
        this.info = res.data.result
      })
  }
}
</script>

<style lang="scss"></style>
