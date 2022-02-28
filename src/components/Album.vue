<template>
  <div class="wrapper">
    <div class="ui container album-header">
      <h2 class="album-title">NEW MUSIC RELEASED IN MARCH 2022!</h2>
      <p>
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
      <p>
        Garizim is now moving into a new era. We look forward to being together
        again and create new music!
      </p>
    </div>
    <div class="ui container album">
      <div class="left">
        <img src="/images/albumcover.jpg" alt="" class="album-cover" />
      </div>
      <div class="right">
        <h2>Moments in Between</h2>
        <p>1. Our Time Was Not Enough To Grow Old Together</p>
        <p>2. Shabash!</p>
        <p>3. What Thoughts Are Made Of</p>
        <p>4. Moments in Between</p>
        <p>5. Stories from the End</p>
        <br />
        <p>Mixed & Mastered by Lars-Emil Öjeberget</p>
        <p>Recorded at Kråktjärn Studio</p>
        <p>Photo by Sona Hellman</p>
        <br />

        <div class="links">
          <i class="fab fa-youtube fa-lg"></i>
          <i class="fab fa-spotify fa-lg"></i>
          <i class="fab fa-bandcamp fa-lg"></i>
          <i class="fab fa-amazon fa-lg"></i>
          <i class="fab fa-soundcloud fa-lg"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Album',
}
</script>

<style scoped>
.wrapper {
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  line-height: 210%;
  padding: 100px 0 170px 0;
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

.links i {
  font-size: 30px;
  margin: 10px;
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

https://www.youtube.com/watch?v=XOltNwJpiL4&list=OLAK5uy_nsX0XvldTvh6GkeHUagX3twvNEynFNUzI
