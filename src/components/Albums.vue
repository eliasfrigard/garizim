<template>
  <div>
    <Album
      data-aos="fade-in"
      v-for="album in albums"
      :key="album.title"
      :title="album.title"
      :release="album.release"
      :cover="album.cover"
      :engineer="album.engineer"
      :studio="album.studio"
      :label="album.label"
      :mix="album.mix"
      :master="album.master"
      :photos="album.photos"
      :art="album.art"
      :tracks="album.tracks"
      :meta="album.meta"
      :youtube="album.youtube"
      :spotify="album.spotify"
      :apple="album.apple"
      :amazon="album.amazon"
      :soundcloud="album.soundcloud"
      :bandcamp="album.bandcamp"
    />
  </div>
</template>

<script>
import Album from '@/components/Album.vue'
import albums from '/albums.json'

export default {
  name: 'Albums',
  props: {
    identifier: Number,
  },
  components: {
    Album,
  },
  data() {
    return {
      albums: [],
    }
  },
  async created() {
    albums.forEach((album) => {
      if (this.identifier && album.id != this.identifier) return
      this.albums.push(album)
    })
  },
}
</script>

<style scoped></style>
