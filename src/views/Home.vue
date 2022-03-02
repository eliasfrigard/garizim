<template>
  <div class="home"></div>
  <div class="title">
    <h1 id="band-title">Garizim</h1>
  </div>
  <div class="ui container content">
    <div id="welcome" class="ui container">
      <h2 class="welcome-title" data-aos="fade-in">GARIZIM</h2>
      <h3 class="welcome-subtitle">PROGRESSIVE FOLK MUSIC FROM SCANDINAVIA</h3>
      <p data-aos="fade-in">
        Garizim is a colorful live experience taking the listener on musical
        journeys. With the unique line-up of hurdy-gurdy, saxophones and double
        bass, the young Swedish trio creates a highly contemporary musical
        expression in the borderland of composition and improvisation where
        folk, indie and jazz meets.
      </p>

      <p data-aos="fade-in">
        Starting at a young age in 2010 - Garizim became known as a young
        progressive folk trio and toured extensively in Sweden. The band got
        nominated as the Best Newcomer of the Year at the Swedish Folk & World
        music awards in 2012. The album ”See The Birds Are Coming” from 2015
        became highly acclaimed by Swedish and international critics. In March
        2022 Garizim released the EP "Moments in Between". With this release of
        five original compositions, Garizim enters a new era - Celebrating more
        than 10 years together.
      </p>
      <p data-aos="fade-in">
        <b>Elias Frigård:</b> Soprano- & Baritone Saxophone <br />
        <b>Johannes Geworkian Hellman:</b> Hurdy-Gurdy <br /><b>
          Jordi Carrasco Hjelm:</b
        >
        Double Bass
      </p>
      <div data-aos="fade-in" id="welcome-meta">
        <p>
          <a href="mailto:garizimtrio@hotmail.com">garizimtrio@hotmail.com</a>
          <br />+46(0)736750310 - Johannes<br />+46(0)706691374 - Elias
        </p>
      </div>
    </div>
    <div class="ui container">
      <h2 id="so-me-title" class="welcome-title" data-aos="fade-in">
        SOCIAL MEDIA
      </h2>
    </div>
    <div class="garizim-links" data-aos="fade-in">
      <a href="https://www.facebook.com/Garizimmusic" target="_blank">
        <i class="fab fa-facebook fa-lg"></i
      ></a>
      <a
        href="https://open.spotify.com/album/43AwTLyEl1frgfDGzYBc1F?si=MWUtFkz9TouuQEtzhHj4Ww"
        target="_blank"
        ><i class="fab fa-spotify fa-lg"></i
      ></a>
      <a
        href="https://music.apple.com/ca/album/moments-in-between-ep/1611755467"
        target="_blank"
        ><i class="fab fa-apple fa-lg"></i
      ></a>
      <a
        href="https://music.amazon.com/albums/B09TFT2RV1?marketplaceId=A3K6Y4MI8GDYMT&musicTerritory=FI&ref=dm_sh_JQ9UoDucPhzGrcRMOAKO67jHQ"
        target="_blank"
        ><i class="fab fa-amazon fa-lg"></i
      ></a>
      <a
        href="https://youtube.com/playlist?list=OLAK5uy_nsX0XvldTvh6GkeHUagX3twvNEynFNUzI"
        target="_blank"
        ><i class="fab fa-youtube fa-lg"></i
      ></a>
      <a href="https://soundcloud.com/garizim" target="_blank"
        ><i class="fab fa-soundcloud fa-lg"></i
      ></a>
    </div>
    <div class="ui container social-media" data-aos="fade-in">
      <div
        class="fb-page"
        data-href="https://www.facebook.com/Garizimmusic"
        data-tabs="timeline"
        data-width="500"
        data-height="600"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/Garizimmusic"
          class="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/Garizimmusic">Garizim</a>
        </blockquote>
      </div>
      <!-- Div -->
      <div class="spotify-page">
        <iframe
          style="border-radius: 12px"
          src="https://open.spotify.com/embed/playlist/0ed7GYbxtM9fmZ7FkRG8ii?utm_source=generator&theme=0"
          width="100%"
          height="600"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="ui container content">
    <AlbumContent />
  </div>
  <div class="divider"></div>

  <div class="ui container content">
    <Quotes />
  </div>
  <div class="divider"></div>

  <div class="content">
    <div class="ui container videos">
      <h2>VIDEOS</h2>
      <Videos class="video-component" />
    </div>
    <div class="copyright">
      <p><b>Copyright 2022 © Garizim Music</b></p>
      <p>
        Website Design by
        <b><a href="mailto:elias_frigard@hotmail.com">Elias Frigård</a></b>
      </p>
    </div>
  </div>
</template>

<script>
import Quotes from '@/components/Quotes.vue'
import Videos from '@/components/Videos.vue'
import AlbumContent from '@/components/AlbumContent.vue'

export default {
  name: 'Home',
  data() {
    return {}
  },
  created() {
    window.addEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const scrollHeight = Number.parseFloat(window.scrollY).toFixed(2)

      this.setBackgroundImage(scrollHeight)
    },
    setBackgroundImage(height) {
      const bandTitle = document.querySelector('#band-title')
      const contents = document.querySelectorAll('.content')

      const first = contents[0].offsetTop
      const second = contents[1].offsetTop
      const third = contents[2].offsetTop

      let backgroundImage = ''
      let backgroundPosition = ''

      if (height < first) {
        backgroundImage = '/images/webp/Garizim2019-0979.webp'
        backgroundPosition = '80%'
        bandTitle.style.display = 'block'
      } else if (height > first && height < second) {
        backgroundImage = '/images/webp/Garizim2019-0893_2.webp'
        backgroundPosition = '84%'
        bandTitle.style.display = 'none'
      } else if (height > second && height < third) {
        backgroundImage = '/images/webp/Garizim2019-0974_bw.webp'
        backgroundPosition = '56%'
        bandTitle.style.display = 'none'
      } else {
        backgroundImage =
          '/images/webp/69608686_10157410500941280_5649243090850938880_n.webp'
        backgroundPosition = '70%'
        bandTitle.style.display = 'none'
      }

      console.log(backgroundPosition)

      const home = document.querySelector('.home')
      home.style.backgroundImage = `url(${backgroundImage})`
      home.style.backgroundPosition = backgroundPosition
    },
  },
  components: {
    Quotes,
    Videos,
    AlbumContent,
  },
}
</script>

<style scoped>
.copyright {
  margin-bottom: 130px;
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  word-spacing: 2px;
  text-align: center;
}

.home {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: url('/images/webp/Garizim2019-0979.webp');
  content: url('/images/webp/Garizim2019-0979.webp')
    url('/images/webp/Garizim2019-0893_2.webp')
    url('/images/webp/Garizim2019-0974_bw.webp')
    url('/images/webp/69608686_10157410500941280_5649243090850938880_n.webp');
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
  background: linear-gradient(90deg, #8db7decc 0%, #b1778ccc 100%);
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
  margin: 70px 0 0 0;
}

#welcome p,
.welcome-title {
  font-family: 'Lato', sans-serif;

  text-align: center;
  font-size: 18px;
  line-height: 230%;
  word-spacing: 1px;
}

.welcome-title {
  font-size: 60px;
  margin: 20px 0 30px 0;
}

.welcome-subtitle {
  margin-bottom: 30px;
}

#welcome-meta p {
  font-size: 16px;
}

.divider {
  height: 85vh;
  width: 100%;
  background-color: transparent;
}

.garizim-links {
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-20px);
  cursor: pointer;
  margin: 0 0 20px 0;

  color: #8db7de;
  transition: all 100ms ease;
}

.garizim-links i:hover {
  transform: scale(1.2);
  cursor: pointer;
  opacity: 1;
}

.garizim-links i {
  font-size: 28px;
  margin: 20px;
  opacity: 0.7;
}
.social-media {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 15px 0 150px 0;
}

.social-media div {
  width: 500px;
}

#so-me-title {
  margin-top: 70px;
  font-size: 40px;
}

.video-component {
  padding: 100px 0 150px 0;
}

.videos {
  padding: 80px 0 40px 0;
}

@media screen and (max-width: 1200px) {
  .home {
    background-position: 80%;
  }

  .content {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .social-media {
    flex-direction: column-reverse;
    margin: 15px 0;
  }

  .social-media div {
    max-width: 95%;
    margin: 0 0 50px 0;
  }

  .fb-page {
    max-width: 95%;
  }

  #welcome {
    margin: 25px 0 0 0;
    text-align: center;
    font-size: 19px;
  }

  .garizim-links i {
    font-size: 22px;
    margin: 15px;
  }

  #band-title {
    font-size: 70px;
    top: 180px;
  }

  .videos {
    padding: 40px 0;
  }
}
</style>
