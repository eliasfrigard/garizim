<template>
  <div class="splash"></div>
  <div class="fake"></div>
  <div class="content-wrapper">
    <div class="ui container videos">
      <h2 class="content-title" data-aos="fade-in">VIDEOS</h2>
      <Videos />
    </div>
    <div class="ui container albums">
      <h2 class="content-title" data-aos="fade-in">ALBUMS</h2>
      <p>
        During four days in the summer of 2018, Garizim recorded some new music
        together. It feels like a very long time ago. The plan was to release
        the our new creation as soon as possible, but something happened, and
        everything was on hold for a while. Finally, it is time to share this
        new & old music to the world, to our friends and listeners. Our latest
        EP "Moments in Between" contains five tracks with original music
        composed by Garizim. You can find "Moments in Between" on digital
        streaming platforms such as Spotify / Tidal / Apple Music, as well as
        here on our website.
      </p>
      <Albums />
    </div>
  </div>
</template>

<script>
import Albums from '@/components/Albums.vue'
import Videos from '@/components/Videos.vue'

export default {
  name: 'Music',
  components: {
    Albums,
    Videos,
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #e8eae9;
}

.content-wrapper {
  padding: 10px 0;
  width: 100%;
  background-color: #e8eae9;
}

.splash,
.fake {
  width: 100%;
  height: 100vh;
}

.fake {
  background-color: transparent;
}
.splash {
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  background-image: url('/images/webp/garizim_press_web.webp');
  background-size: cover;
}

.albums {
  margin: 100px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.videos {
  margin-top: 50px;
}

h2 {
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  padding-bottom: 3px;
  width: 100%;
}

p {
  font-family: 'Lato', sans-serif;

  text-align: center;
  font-size: 16px;
  line-height: 230%;
  letter-spacing: 0.5px;
  word-spacing: 1px;
  margin-top: 50px;
}
</style>
