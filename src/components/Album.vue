<template>
  <div class="wrapper">
    <div class="ui container album">
      <div class="left">
        <img :src="cover" alt="" class="album-cover" />
      </div>
      <div class="right">
        <div id="title">
          <h2>{{ title }}</h2>
          <p id="year">({{ release }})</p>
        </div>
        <p v-for="(track, index) in tracks" :key="index">
          {{ index + 1 }}. {{ track }}
        </p>
        <p id="meta" v-if="meta">{{ meta }}</p>
        <br />
        <p>Mixed by {{ mix }}</p>
        <p>Mastered by {{ master }}</p>
        <p>Recorded by {{ engineer }} / {{ studio }}</p>
        <p>Photos by {{ photos }}</p>
        <br />

        <div class="links">
          <a v-if="youtube" :href="youtube" target="_blank"
            ><i class="fab fa-youtube fa-lg"></i
          ></a>
          <a v-if="spotify" :href="spotify" target="_blank"
            ><i class="fab fa-spotify fa-lg"></i
          ></a>
          <a v-if="apple" :href="apple" target="_blank"
            ><i class="fab fa-apple fa-lg"></i
          ></a>
          <a v-if="amazon" :href="amazon" target="_blank"
            ><i class="fab fa-amazon fa-lg"></i
          ></a>
          <a v-if="soundcloud" :href="soundcloud" target="_blank"
            ><i class="fab fa-soundcloud fa-lg"></i
          ></a>
          <a v-if="bandcamp" :href="bandcamp" target="_blank"
            ><i class="fab fa-bandcamp fa-lg"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Album',
  props: {
    title: String,
    release: String,
    cover: String,
    engineer: String,
    studio: String,
    label: String,
    mix: String,
    master: String,
    photos: String,
    art: String,
    tracks: Array,
    meta: String,
    youtube: String,
    spotify: String,
    apple: String,
    amazon: String,
    soundcloud: String,
    bandcamp: String,
  },
}
</script>

<style scoped>
.wrapper {
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  line-height: 210%;
  margin: 100px 0;
}

.album {
  display: flex;
  justify-content: space-between;
  height: 619.84px;
}

.left {
  width: 55%;
}
.right {
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.right {
  padding-left: 50px;
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 22px;
  margin: 0;
}

p {
  font-size: 14px;
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
  font-size: 30px;
  margin: 0 10px;
  transition: all 200 ease;
}

.links i:hover {
  transform: scale(1.15);
  color: rgba(177, 119, 140, 1);
}

.links i:hover {
  cursor: pointer;
}

#meta {
  opacity: 0.8;
  font-style: italic;
}

#title {
  display: flex;
  align-items: flex-end;
  margin-bottom: 10px;
}

#title p {
  margin-left: 10px;
  font-size: 16px;
  opacity: 0.8;
  margin-bottom: 1px;
}
</style>
