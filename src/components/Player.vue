<template>
  <div class="player">
    <!--  -->
    <div class="audio-controls">
      <button id="prev" name="previous" class="action-btn" @click="prevSong">
        <i class="fas fa-backward"></i>
      </button>

      <button
        id="pause"
        name="pause"
        class="action-btn-big"
        v-if="isPlaying"
        @click="pauseAudio"
      >
        <i class="fas fa-pause"></i>
      </button>

      <button
        id="play"
        name="play"
        class="action-btn-big"
        v-else
        @click="playAudio"
      >
        <i class="fas fa-play"></i>
      </button>

      <button id="next" name="next" class="action-btn" @click="nextSong">
        <i class="fas fa-forward"></i>
      </button>
    </div>

    <!--  -->
    <div class="music-info" v-if="!mobile">
      <h4 class="music-title">{{ currentSong.title }}</h4>
      <div class="music-progress-container" @click="setProgress">
        <div class="music-progress"></div>
      </div>
    </div>

    <!--  -->
    <div class="window-controls">
      <div
        class="volume-controls"
        @mouseover="openVolumeControl"
        @mouseout="closeVolumeControl"
      >
        <input
          type="range"
          class="volume-range"
          name=""
          id=""
          min="0"
          max="100"
          value="80"
          @change="changeVolume"
        />

        <button
          class="action-btn"
          name="volume up"
          v-if="volumeValue > 50"
          @click="muteAudio"
        >
          <i class="fas fa-volume-up"></i>
        </button>

        <button
          class="action-btn"
          name="volume down"
          v-else-if="volumeValue > 0"
          @click="muteAudio"
        >
          <i class="fas fa-volume-down"></i>
        </button>

        <button class="action-btn" name="mute" v-else @click="unmuteAudio">
          <i class="fas fa-volume-mute"></i>
        </button>
      </div>

      <button
        class="action-btn"
        name="close playlist"
        v-if="listIsOpen"
        @click="closeList"
      >
        <i class="fas fa-chevron-down"></i>
      </button>

      <button class="action-btn" name="open playlist" v-else @click="openList">
        <i class="fas fa-chevron-up"></i>
      </button>

      <button
        class="action-btn"
        name="close player"
        @click="$emit('close-player')"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>

    <div class="song-container">
      <div class="ui container song-list">
        <h2 id="songlist-header">Songlist</h2>
        <table class="song-table">
          <tr>
            <th class="id-header">#</th>
            <th>Title</th>
            <th>Album</th>
            <th class="artist-header">Artist</th>
            <!--             <th class="composer-header">Composer</th>
 -->
            <th class="length-header">Length</th>
          </tr>
          <tr
            class="data-row"
            v-for="(song, index) in songList"
            :key="index"
            :id="index"
            @click="changeTrack(index)"
          >
            <td class="song-id">{{ index + 1 }}</td>
            <td class="song-title">{{ song.title }}</td>
            <td class="song-album">{{ song.album }}</td>
            <td class="song-artist">{{ song.artist }}</td>
            <!--             <td class="song-composer">{{ song.composer }}</td>
 -->
            <td class="song-length">{{ song.length }}</td>
          </tr>
        </table>

        <div class="song-table-mobile">
          <div
            v-for="(song, index) in songList"
            :key="index"
            @click="changeTrack(index)"
          >
            <p class="mobile-song-title">{{ song.title }}</p>
            <p class="mobile-song-meta">{{ song.length }}, {{ song.album }}</p>
          </div>
        </div>
        <div class="mobile-progress" v-if="mobile">
          <div class="music-progress-container" @click="setProgress">
            <div class="music-progress"></div>
          </div>
        </div>
      </div>
    </div>

    <!--  -->
    <audio
      :src="currentSong.link"
      class="music-audio"
      @timeupdate="updateProgress"
      @ended="nextSong"
      :volume="volume"
    ></audio>
  </div>
</template>

<script>
import songs from '/songs.json'

export default {
  name: 'Player',
  props: [],
  data() {
    return {
      songList: [],
      currentSong: '',
      currentSongIndex: 0,
      isPlaying: false,
      volumeValue: 80,
      prevVolume: '',
      muted: false,
      listIsOpen: false,
    }
  },
  async created() {
    songs.forEach((song) => {
      this.songList.push(song)
    })
  },
  watch: {
    currentSong: function () {
      const allSongs = document.querySelectorAll(`.data-row`)

      allSongs.forEach((song) => {
        const title = song.querySelector('.song-title').textContent

        if (this.currentSong.title === title) {
          song.classList.add('is-active')
        } else {
          song.classList.remove('is-active')
        }
      })
    },
  },
  mounted() {
    this.currentSong = this.songList[0]
  },
  computed: {
    volume() {
      return this.volumeValue / 100
    },
    mobile() {
      return screen.width < 992
    },
  },
  methods: {
    openVolumeControl() {
      if (screen.width > 992) {
        document.querySelector('.volume-range').style.display = 'block'
      }
    },
    closeVolumeControl() {
      document.querySelector('.volume-range').style.display = 'none'
    },
    changeVolume(e) {
      this.volumeValue = e.srcElement.value
    },
    muteAudio() {
      this.volumeValue = 0
    },
    unmuteAudio() {
      const currentValue = document.querySelector('.volume-range').value
      this.volumeValue = currentValue
    },
    playAudio() {
      const audio = document.querySelector('.music-audio')

      audio.play()

      this.isPlaying = true
    },
    pauseAudio() {
      document.querySelector('.music-audio').pause()
      this.isPlaying = false
    },
    async loadAndPlayAudio() {
      const audio = document.querySelector('.music-audio')

      this.isPlaying = true

      await audio.load()
      await audio.play()
    },
    updateProgress(e) {
      const progress = document.querySelector('.music-progress')
      const { duration, currentTime } = e.srcElement
      const progressPercent = (currentTime / duration) * 100

      progress.style.width = `${progressPercent}%`
    },
    setProgress(e) {
      const progressContainerWidth = document.querySelector(
        '.music-progress-container'
      ).clientWidth
      const clickPosition = e.offsetX

      const audio = document.querySelector('.music-audio')
      const audioDuration = audio.duration

      audio.currentTime =
        (clickPosition / progressContainerWidth) * audioDuration
    },
    nextSong() {
      this.currentSongIndex++

      if (this.currentSongIndex > this.songList.length - 1) {
        this.currentSongIndex = 0
      }

      this.currentSong = this.songList[this.currentSongIndex]

      document.querySelector('.music-audio')

      this.loadAndPlayAudio()
    },
    prevSong() {
      this.currentSongIndex--

      if (this.currentSongIndex < 0) {
        this.currentSongIndex = this.songList.length - 1
      }

      this.currentSong = this.songList[this.currentSongIndex]

      this.loadAndPlayAudio()
    },
    changeTrack(index) {
      this.currentSongIndex = index

      this.currentSong = this.songList[index]

      this.loadAndPlayAudio()
    },
    openList() {
      const list = document.querySelector('.song-container')
      list.style.display = 'flex'

      this.listIsOpen = true
    },
    closeList() {
      const list = document.querySelector('.song-container')
      list.style.display = 'none'

      this.listIsOpen = false
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.player {
  font-family: 'Lato', sans-serif;

  position: fixed;
  height: 75px;
  width: 100vw;
  padding: 0 50px;
  background-color: #e8eae9;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.audio-controls,
.window-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 170px;
}

.action-btn {
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  color: rgb(40, 40, 40);
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  margin: 0 20px;
}

.action-btn-big {
  background-color: transparent;
  border: 0;
  font-size: 30px;
  color: rgb(40, 40, 40);
  cursor: pointer;
  padding: 10px;
  margin: 0 10px;
}

.action-btn:focus {
  outline: 0;
}

.music-info {
  width: calc(100% - 500px);
}

.music-title {
  text-align: center;
  font-size: 16px;
  color: rgb(40, 40, 40);
  letter-spacing: 1px;
}

.music-progress-container {
  background: rgb(141, 183, 222);
  border-radius: 5px;
  cursor: pointer;
  margin: 10px 0;
  height: 5px;
  width: 100%;
}

.music-progress {
  background-color: rgb(177, 119, 140);
  border-radius: 5px;
  height: 100%;
  width: 0%;
  transition: width 0.1s linear;
}

.song-container {
  position: fixed;
  bottom: 75px;
  left: 0;
  width: 100%;
  display: none;
  background-color: #e8eae9;
  padding: 30px;
  color: rgb(0, 0, 0);
}

.song-table {
  width: 100%;
  text-align: left;
}

table {
  border-collapse: collapse;
}

th {
  font-family: 'Lato', sans-serif;
  letter-spacing: 3px;
  font-size: 18px;
}

td {
  letter-spacing: 1px;
  font-size: 16px;
}

.data-row:hover,
.song-table-mobile div:hover {
  background-color: rgb(141, 183, 222, 0.2);
  cursor: pointer;
}

.is-active {
  background-color: rgb(141, 183, 222, 0.4);
}

th,
td {
  height: 20px;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.song-table tr:last-child td {
  border-bottom: 0;
}

.volume-controls {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.volume-controls:hover {
  cursor: pointer;
}

.volume-range {
  display: none;
  transform: rotate(-90deg);
  position: fixed;
  bottom: 110px;
  right: 120px;
  color: #ec3c01;
  z-index: 1;
}

.music-info {
  display: block;
}

.mobile-progress {
  display: none;
}

#songlist-header {
  font-size: 30px;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.song-table-mobile {
  display: none;
}

@media screen and (max-width: 992px) {
  .audio-controls {
    width: 35%;
  }

  .window-controls {
    width: 35%;
  }

  .volume-range {
    display: none;
  }

  .mobile-progress {
    display: block;
    width: 100%;
  }

  .song-container {
    justify-content: center;
    width: 100%;
    margin: 0;
    padding: 25px 5px;
  }

  .mobile-progress .music-progress-container {
    height: 10px;
    margin: 20px 0 0;
  }

  .music-info,
  .id-header,
  .song-id,
  .artist-header,
  .song-artist,
  .song-composer,
  .song-length,
  .composer-header,
  .length-header,
  .song-table {
    display: none;
  }

  .song-table-mobile {
    display: block;
  }

  .song-container {
    scroll: none; /* 
    height: calc(100vh - 75px);
    align-items: flex-end; */
  }

  .song-table-mobile div {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 15px;
  }

  .mobile-song-title {
    letter-spacing: 0.5px;
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }

  .mobile-song-meta {
    letter-spacing: 1px;
    font-size: 16px;
    opacity: 0.8;
    margin: 0;
    margin-top: 7px;
  }

  .song-table-mobile div:last-child {
    border-bottom: 0;
  }

  h2 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    /*     text-align: left;
    padding-left: 15px; */
  }
}
</style>
