<template>
  <div class="ui container videos">
    <div class="main-video" data-aos="fade-in">
      <p class="video-title">{{ mainVideo.title }}</p>
      <p class="video-meta">{{ mainVideo.meta }}</p>
      <iframe
        :id="mainVideo.id"
        width="1120"
        height="630"
        :src="mainVideo.link"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <div class="video-container">
      <div
        v-for="video in videoArray"
        :key="video.link"
        class="video-wrapper"
        data-aos="fade-in"
      >
        <p class="video-title">{{ video.title }}</p>
        <p class="video-meta">{{ video.meta }}</p>
        <iframe
          class="video-frame"
          :height="312.2"
          :width="555"
          :src="video.link"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import videos from '/videos.json'

export default {
  name: 'Videos',
  data() {
    return {
      videoArray: [],
      mainVideo: {},
    }
  },
  async created() {
    videos.forEach((video, index) => {
      if (index === 0) return

      this.videoArray.push(video)
    })

    // Grab main vid.
    this.mainVideo = videos[0]
  },
}
</script>

<style scoped>
.videos {
  margin: 100px 0 150px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#mainVid {
  width: 100%;
}

.video-wrapper {
  flex-wrap: wrap;
  overflow: hidden;
  margin-top: 30px;
}

.video-container {
  font-family: 'Lato', sans-serif;
  text-align: center;
  letter-spacing: 0.5px;
  word-spacing: 2px;

  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.video-title {
  font-size: 18px;
  font-weight: bold;
  margin: 5px 0;
}

.video-meta {
  margin: 7px 0 25px 0;
}

.main-video {
  font-family: 'Lato', sans-serif;
  text-align: center;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  margin-bottom: 24px;
}

.main-video .video-title {
  font-size: 20px;
}

.main-video .video-meta {
  font-size: 16px;
}
</style>
