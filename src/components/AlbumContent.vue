<template>
  <div class="wrapper">
    <div class="ui container album-header">
      <h3 class="album-title" data-aos="fade-in">
        NEW MUSIC RELEASED IN MARCH 2022!
      </h3>
      <p data-aos="fade-in">
        During four days in the summer of 2018, Garizim recorded some new music
        together. It feels like a very long time ago. The plan was to release
        the our new creation as soon as possible, but something happened, and
        everything was on hold for a while. Finally, it is time to share this
        new & old music to the world, to our friends and listeners. Our new EP
        "Moments in Between" contains five tracks with original music composed
        by Garizim. You can find the "Moments in Between" on digital streaming
        platforms such as Spotify/Tidal/Apple music, as well as here on our
        website.
      </p>
      <p data-aos="fade-in">
        Garizim is now moving into a new era. We look forward to being together
        again and create new music!
      </p>
    </div>
    <Albums identifier="1" />
  </div>
</template>

<script>
import Albums from '@/components/Albums.vue'

export default {
  name: 'AlbumContent',
  components: {
    Albums,
  },
}
</script>

<style scoped>
.wrapper {
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  line-height: 210%;
  padding: 100px 0 100px 0;
}

.album {
  display: flex;
  justify-content: space-between;
  height: 557.86px;
}

.left,
.right {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.right {
  padding-top: 25px;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 22px;
}

p {
  font-size: 16px;
}

.album-cover {
  height: 100%;
  width: 100%;
}

.links {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.links i {
  color: rgba(177, 119, 140, 0.8);
  font-size: 34px;
  margin: 10px;
  transition: all 200 ease;
}

.links i:hover {
  transform: scale(1.15);
  color: rgba(177, 119, 140, 1);
}

.links i:hover {
  cursor: pointer;
}

.album-title {
  font-size: 40px;
  margin: 40px 0;
}

.album-header {
  margin: 60px 0;
  text-align: center;
  line-height: 210%;
}

.album-header p {
  font-size: 16px;
  line-height: 230%;
}
</style>
