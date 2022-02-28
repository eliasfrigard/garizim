<template>
  <div class="spotify">
    <div class="spotify-album">
      <p><b>"Moments in Between" </b>(2022)</p>
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/album/43AwTLyEl1frgfDGzYBc1F?utm_source=generator&theme=0"
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
    <div class="spotify-album">
      <p><b>"See The Birds Are Coming"</b> (2015)</p>
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/album/58uxeZIheVlveheJZUnMoJ?utm_source=generator&theme=0"
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
    <div class="spotify-album">
      <p><b>"Fri"</b> (2012)</p>
      <iframe
        style="border-radius: 12px"
        src="https://open.spotify.com/embed/album/5AaZIiQL4hXPCIfr8BwodF?utm_source=generator&theme=0"
        width="100%"
        height="380"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spotify',
}
</script>

<style scoped>
.spotify {
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  line-height: 210%;

  margin: 50px 0;
  display: flex;
  justify-content: center;
  justify-content: center;
}

.spotify-album {
  margin: 40px;
  text-align: center;
}

.spotify-album p {
  margin: 25px 0;
}
</style>
