<template>
  <div class="app">
    <div class="app-Inner">
      <Home />
      <MainValues />
      <Form />
      <More />
    </div>
    <button @click="getLocation">VIEW YOUR LOCATION</button>
    <div>{{ width }}</div>
    <div class="location"></div>
    <div class="map"></div>
  </div>
</template>

<script>
import Home from './components/Home.vue';
import MainValues from './components/MainValues.vue';
import Form from './components/Form.vue';
import More from './components/More.vue';

export default {
  name: 'App',
  components: {
    Home,
    MainValues,
    Form,
    More,
  },
  data() {
    return {
      width: 0,
      height: 0,
    };
  },
  methods: {
    getLocation() {
      const geo = navigator.geolocation;
      if (geo) {
      // eslint-disable-next-line
        geo.getCurrentPosition(showLocation);
      } else {
        const divLocation2 = document.querySelector('.location');
        divLocation2.innerHTML = 'CHUJ';
      }
      function showLocation(location) {
        const divLocation = document.querySelector('.location');
        divLocation.innerHTML = `${location.coords.latitude} ${location.coords.longitude}`;
      }
    },
  },
};

</script>

<style lang="scss">
  body {
    font-family: 'Fira Sans', sans-serif;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .app {
    background: url("../src/assets/bg.jpg") center center;
    background-size: cover;
    background-position: 30%;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    &-Inner{
      width: 100%;
      height: 70vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
  }
  button {
    width: 200px;
    height: 50px;
  }
</style>
