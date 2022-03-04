<template>
  <!--   <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/a">Music</router-link>
    <router-link to="/live">Live</router-link>
    <router-link to="/a">Media</router-link>
    <router-link to="/contact">Contact</router-link>

    <div class="so-me">
      <i class="fab fa-facebook"></i>
      <i class="fab fa-spotify"></i>
      <i class="fab fa-instagram"></i>
    </div>
  </div> -->
  <router-view />
  <!--   <Footer />
 -->
  <div class="player-div">
    <Player
      data-aos="fade-in"
      v-if="playerIsActive"
      class="audio-player"
      @close-player="closePlayer"
    />
  </div>
</template>

<script>
/* import Footer from '@/components/Footer.vue'
 */ import Player from '@/components/Player.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: {
    /*     Footer,
     */ Player,
  },
  data() {
    return {
      playerIsActive: false,
      backgroundImage: '',
    }
  },
  created() {
    AOS.init()

    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const scrollHeight = Number.parseFloat(window.scrollY).toFixed(2)

      if (scrollHeight > 75) this.openPlayer()
    },

    reloadPage() {
      window.location.href = '/'
    },
    closePlayer() {
      document.querySelector('.audio-player').remove()
      this.playerIsActive = false
    },
    openPlayer() {
      const playerDiv = document.querySelector('.player-div')
      const player = document.createElement('Player')

      playerDiv.appendChild(player)

      this.playerIsActive = true
    },
    toTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}

#nav {
  z-index: 10;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 100px;
  padding: 40px 0;
}

#nav a {
  font-weight: bold;
  color: hsla(210, 29%, 24%, 1);
  text-decoration: none;
  font-size: 17px;
  margin: 0 25px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: bold;
}

#nav a:hover {
  color: hsla(210, 29%, 24%, 1);
}

#nav a.router-link-exact-active {
  color: rgb(177, 119, 140);
}

.content {
  -webkit-box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.15);
}

.audio-player {
  -webkit-box-shadow: 0px 1px 20px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 20px 5px rgba(0, 0, 0, 0.1);
}

.so-me {
  position: absolute;
  right: 55px;
}

.so-me i {
  font-size: 28px;
  margin: 0 15px;
}

hr {
  width: 70%;
  opacity: 0.4;
}

h2 {
  text-align: center;
  font-size: 60px;
  line-height: 230%;
  letter-spacing: 5px;
  word-spacing: 1px;

  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom-width: 1px;
  padding-bottom: 3px;
  width: 100%;
}

h3 {
  letter-spacing: 2.5px;
  line-height: 200%;
}
</style>
