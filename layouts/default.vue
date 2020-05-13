<template>
  <div>
    <m-head />
    <nuxt id="container" />
    <m-footer />
  </div>
</template>
<script>
  import mHead from "@/components/header";
  import mFooter from "@/components/footer";
  export default {
    components: {
      mHead,
      mFooter
    }
  }
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
  #container {
    min-height: calc(100vh - 210px);
    max-width: 1200px;
    margin: 0 auto;
  }
</style>
