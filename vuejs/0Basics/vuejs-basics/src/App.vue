<template>
  <div class="app">
    <div class="app-Inner">
      <Home />
      <!-- <MainValues /> -->
      <div class="mainValues"></div>
      <Form />
      <!-- eslint-disable-next-line -->
      <button class="btn-location" @click="getLocation">click to see when sunrise and sunset are</button>
      <div class="location"></div>
      <div class="location2"></div>
    </div>
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
  // eslint-disable-next-line
  mounted:function() {
    this.goldenHours();
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
        const lo2c = document.querySelector('.location2');
        const btnLoc = document.querySelector('.btn-location');
        lo2c.innerHTML = `${location.coords.latitude}, ${location.coords.longitude}`;
        btnLoc.classList.add('btn-location_out');
        axios.get(`https://api.sunrise-sunset.org/json?lat=${location.coords.latitude}&lng=${location.coords.longitude}`)
          .then((response) => {
            // whole logic
            loc.classList.add('location_animate');
            btnLoc.innerHTML = '';
            // const date = new Date();
            // let dateFinish = date.getTimezoneOffset();
            // dateFinish = (dateFinish * -1) / 60;
            loc.innerHTML = `Sunrise: ${response.data.results.sunrise} Sunset: ${response.data.results.sunset}`;
          // console.log(response.data.results.sunrise);
          })
          .catch((error) => {
            // eslint-disable-next-line
        console.log(error);
          });
      }
    },
    // eslint-disable-next-line
    goldenHours:function() {
      const geo = navigator.geolocation;
      if (geo) {
        // eslint-disable-next-line
          geo.getCurrentPosition(showLocation);
      } else {
        const divLocation2 = document.querySelector('.location');
        divLocation2.innerHTML = 'CHUJ';
      }
      function showLocation(location) {
        const mainValues = document.querySelector('.mainValues');// eslint-disable-next-line
        let sunset = '';// eslint-disable-next-line
        let sunrise = '';
        setTimeout(() => {
          axios.get(`https://api.sunrise-sunset.org/json?lat=${location.coords.latitude}&lng=${location.coords.longitude}`)
            .then((response) => {
              function morningGoldenHour(response1, response2) {
                let splitedM = null;
                let splitedE = null;
                let splitedSecondM = null;
                let splitedSecondE = null;
                let hourM = null;
                let hourE = null;
                let hourMto = null;
                let hourEto = null;
                let minutesM = null;
                let minutesE = null;
                // let dayM = null;
                // let dayE = null;
                // split to hours minutes seconds(width AM or PM)
                splitedM = response1.split(':');
                splitedE = response2.split(':');
                // split to seconds and AM or PM
                splitedSecondM = splitedM[2].split(' ');
                splitedSecondE = splitedE[2].split(' ');
                // parse to numbers
                hourM = parseInt(splitedM[0], 10);
                hourE = parseInt(splitedE[0], 10);
                minutesM = parseInt(splitedM[1], 10);
                minutesE = parseInt(splitedE[1], 10);
                hourMto = hourM + 1;
                hourEto = hourE - 1;
                // date timezone validation
                const date = new Date();
                let dateFinish = date.getTimezoneOffset();
                dateFinish = (dateFinish * -1) / 60;
                hourM += dateFinish;
                hourE += dateFinish;
                hourMto += dateFinish;
                hourEto += dateFinish;
                mainValues.innerHTML = `Morning: ${hourM}:${minutesM} ${splitedSecondM[1]} - ${hourMto}:${minutesM} ${splitedSecondM[1]} <br />
                Evening: ${hourEto}:${minutesE} ${splitedSecondE[1]} - ${hourE}:${minutesE} ${splitedSecondE[1]}`;
              }
              morningGoldenHour(response.data.results.sunrise, response.data.results.sunset);

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
    font-size: 1rem;
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
      animation: out 0.2s alternate 1;
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
