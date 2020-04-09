<template>
  <div id="app">
    <Home />
    <button @click="getLocation">VIEW YOUR LOCATION</button>
    <div>{{ width }}</div>
    <div class="location"></div>
  </div>
</template>

<script>
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
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
  button {
    width: 200px;
    height: 50px;
  }
</style>
