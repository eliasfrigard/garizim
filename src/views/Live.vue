<template>
  <div class="content">
    <Concerts />
  </div>
  <div class="live"></div>
</template>

<script>
import Concerts from '@/components/Concerts.vue'

export default {
  name: 'Live',
  components: {
    Concerts,
  },
}
</script>

<style scoped>
.content {
  background-color: #f7f7f7;
  padding-top: 100px;
}
.live {
  height: 100vh;
  width: 100%;
  background-image: url('/images/Garizim2019-0974_bw.jpg');
  background-size: 130%;
  background-position: top;
}
</style>
