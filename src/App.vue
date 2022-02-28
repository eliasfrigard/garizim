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
      v-if="playerIsActive"
      class="audio-player"
      @close-player="closePlayer"
    />
  </div>
</template>

<script>
/* import Footer from '@/components/Footer.vue'
 */ import Player from '@/components/Player.vue'

export default {
  name: 'App',
  components: {
    /*     Footer,
     */ Player,
  },
  data() {
    return {
      playerIsActive: false,
    }
  },
  created() {
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
      console.log('open')
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

.so-me {
  position: absolute;
  right: 55px;
}

.so-me i {
  font-size: 28px;
  margin: 0 15px;
}
</style>
