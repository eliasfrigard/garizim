<template>
  <div class="wrapper">
    <h2 class="quote-header">QUOTES</h2>
    <div class="ui container quotes">
      <div
        class="ui container quote"
        v-for="quote in quotesArray"
        :key="quote.id"
      >
        <p class="quote-text">"{{ quote.text }}"</p>
        <p class="quote-name">{{ quote.author }}</p>
        <a class="quote-link" :href="'https://' + quote.link" target="_blank">{{
          quote.link
        }}</a>
      </div>
    </div>
  </div>
</template>

<script>
import quotes from '/quotes.json'

export default {
  name: 'Quotes',
  data() {
    return {
      quotesArray: [],
    }
  },
  async created() {
    quotes.forEach((quote) => {
      this.quotesArray.push(quote)
    })
  },
}
</script>

<style scoped>
.wrapper {
  text-align: center;
  margin: 120px;
}

.quote-header {
  font-size: 60px;
  letter-spacing: 0.5px;
  word-spacing: 2px;
  line-height: 210%;
}

.quotes {
  display: flex;
  flex-wrap: wrap;
}

.quote {
  width: 43%;
  margin: 55px 0 35px 0;
  text-align: center;
  font-size: 16px;
  letter-spacing: 0.5px;
  word-spacing: 2px;
}

.quote-text {
  font-size: 18px;
  line-height: 210%;
  letter-spacing: 0.5px;
}

.quote-name {
  font-weight: bold;
}

.quote-name,
.quote-text,
.quote-link {
  font-family: 'Lato', sans-serif;
}

@media screen and (max-width: 992px) {
  .quotes {
    flex-direction: column;
    width: 100%;
  }

  .quote-text {
    font-size: 22px;
  }
}
</style>
