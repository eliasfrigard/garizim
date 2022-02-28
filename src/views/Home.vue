<template>
  <div class="home"></div>
  <div class="title">
    <h1 id="band-title">Garizim</h1>
  </div>
  <div class="ui container content">
    <div id="welcome" class="ui container">
      <h2 class="welcome-title">GARIZIM - MODERN FOLK</h2>
      <p>
        Garizim is a colorful live experience taking the listener on musical
        journeys. With the unique line-up of hurdy-gurdy, saxophones and double
        bass, the young Swedish trio creates a highly contemporary musical
        expression in the borderland of composition and improvisation where
        folk, indie and jazz meets.
      </p>

      <p>
        Starting at a young age in 2010 - Garizim became known as a young
        progressive folk trio and toured extensively in Sweden. The band got
        nominated as the Best Newcomer of the Year at the Swedish Folk & World
        music awards in 2012. The album ”See The Birds Are Coming” from 2015
        became highly acclaimed by Swedish and international critics. In March
        2022 Garizim released the EP "Moments in Between". With this release of
        five original compositions, Garizim enters a new era - Celebrating more
        than 10 years together.
      </p>
      <p>
        <b>Elias Frigård:</b> Soprano- & Baritone Saxophone <br />
        <b>Johannes Geworkian Hellman:</b> Hurdy-Gurdy <br /><b>
          Jordi Carrasco Hjelm:</b
        >
        Double Bass
      </p>
      <div class="garizim-links">
        <i class="fab fa-facebook fa-lg"></i>
        <i class="fab fa-instagram fa-lg"></i>
        <i class="fab fa-spotify fa-lg"></i>
        <i class="fab fa-bandcamp fa-lg"></i>
        <i class="fab fa-youtube fa-lg"></i>
        <i class="fab fa-soundcloud fa-lg"></i>
      </div>
    </div>
    <hr />
  </div>
  <div class="divider"></div>
  <div class="ui container content">
    <Album />
  </div>
  <div class="divider"></div>

  <div class="ui container content">
    <Quotes />
  </div>
  <div class="divider"></div>

  <div class="ui container content">
    <Videos />
  </div>
  <div></div>
</template>

<script>
import Quotes from '@/components/Quotes.vue'
import Videos from '@/components/Videos.vue'
import Album from '@/components/Album.vue'

export default {
  name: 'Home',
  data() {
    return {}
  },
  methods: {
    onScroll() {
      console.log('on scroll')
    },
  },
  components: {
    Quotes,
    Videos,
    Album,
  },
}
</script>

<style scoped>
.home {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: url('/images/Garizim2019-0979.jpg');
  background-size: cover;
  background-position: center;
}
/*
.title {
  transition: all 1s;
} */

.title {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title h1 {
  position: fixed;
  transform: translateY(-100%);
  font-size: 220px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 5px;
  color: transparent;
  background: rgb(141, 183, 222);
  background: linear-gradient(
    90deg,
    rgba(141, 183, 222, 0.8) 0%,
    rgba(177, 119, 140, 0.8) 100%
  );
  background-clip: text;
}

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #e8eae9;
}

#welcome {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 100px 0;
  padding-bottom: 60px;
}

#welcome p,
.welcome-title {
  font-family: 'Lato', sans-serif;

  text-align: center;
  font-size: 18px;
  line-height: 230%;
  letter-spacing: 0.5px;
  word-spacing: 1px;
}

.welcome-title {
  font-size: 60px;
  margin: 20px 0;
}

.divider {
  height: 75vh;
  width: 100%;
  background-color: transparent;
}

.garizim-links {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 125px;
  justify-content: center;
  align-items: center;
  transform: translateY(20px);
  cursor: pointer;
}

.garizim-links i:hover {
  cursor: pointer;
  opacity: 1;
}

.garizim-links i {
  font-size: 35px;
  margin: 23px;
  opacity: 0.7;
}
</style>
