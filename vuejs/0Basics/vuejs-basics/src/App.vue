<template>
  <div class="app">
    <div class="app-Inner">
      <Home />
      <!-- <MainValues /> -->
      <div class="mainValues">Your opportunity to take pictures</div>
      <Form />
      <!-- eslint-disable-next-line -->
      <button class="btn-location" @click="getLocation">click to see when sunrise and sunset are</button>
      <div class="location"></div>
    </div>
    <div>{{ width }}</div>
    <div class="map"></div>
  </div>
</template>

<script>
import axios from 'axios';
import Home from './components/Home.vue';
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    Home,
    Form,
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
        const loc = document.querySelector('.location');
        const btnLoc = document.querySelector('.btn-location');
        btnLoc.classList.add('btn-location_out');
        setTimeout(() => {
          axios.get(`https://api.sunrise-sunset.org/json?lat=${location.coords.latitude}&lng=${location.coords.longitude}`)
            .then((response) => {
              loc.classList.add('location_animate');
              btnLoc.innerHTML = '';
              loc.innerHTML = `Sunrise: ${response.data.results.sunrise} Sunset: ${response.data.results.sunset}`;
            // console.log(response.data.results.sunrise);
            })
            .catch((error) => {
              // eslint-disable-next-line
          console.log(error);
            });
        }, 500);
      }
    },
  },
};

</script>

<style lang="scss">
  @mixin centerItems{
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
      height: 60vh;
      @include centerItems();
      flex-direction: column;
    }
  }
  .mainValues{
    @include centerItems();
    color: white;
    font-size: 2rem;
    text-align: center;
    width: 100vw;
    height: 10vh;
  }
  .btn-location {
    width: auto;
    height: auto;
    background: rgba($color: #fff, $alpha: 0);
    border: none;
    outline: none;
    color: rgba($color: #fff, $alpha: 0.4);
    transition: color 0.4s;
    &:hover{
      transition: 0.4s;
      color: rgba($color: #fff, $alpha: 0.8);
    }
    &_out{
      opacity: 0;
      animation: out 0.5s alternate 1;
    }
  }
  .location{
    width: auto;
    height: auto;
    background: rgba($color: #fff, $alpha: 0);
    border: none;
    outline: none;
    font-size: 0.8rem;
    &_animate{
      opacity: 1;
      animation: fade-in 2s alternate 1;
      color: rgba($color: #fff, $alpha: 0.6);
    }
    @keyframes fade-in {
      0%{
        opacity: 0;
        color: rgba($color: #fff, $alpha: 0.4);
      }50%{
        opacity: 0.5;
        color: rgba($color: #fff, $alpha: 1);
      }100%{
        opacity: 1;
        color: rgba($color: #fff, $alpha: 0.6);
      }
    }
  }
  @keyframes out {
    from{
      opacity: 1;
    }to{
      opacity: 0;
    }
  }
</style>
