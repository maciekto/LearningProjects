<template>
  <div class="app">
    <div class="app-Inner">
      <div class="home">
        <h2 class="title">GOLDEN HOUR</h2>
      </div>
      <!-- <MainValues /> -->
      <div class="mainValues"></div>
      <div class="Form">
        <div class="Form-InputField">
          <!-- eslint-disable-next-line -->
          <input type="text" class="Form-Input" v-model="cityPick" placeholder="check golden hour in other places">
        </div>
        <div class="Form-Results Result"></div>
      </div>
      <div>

      </div>
      <!-- eslint-disable-next-line -->
      <!-- <button class="btn-location" @click="getLocation">click to see when sunrise and sunset are</button>
      <div class="location"></div> -->
    </div>
    <div class="map"></div>
    <div class="app-after"></div>
  </div>
</template>

<script>
import axios from 'axios';
import cities from './assets/cities.json';

export default {
  name: 'App',
  data() {
    return {
      myCityDB: cities,
      newMyCityDB: [],
      width: 0,
      height: 0,
      cityPick: '',
    };
  },
  // eslint-disable-next-line
  mounted:function() {
    this.goldenHours();
    this.cityConfirm();
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
                // hour validation if gmt is starting next day
                if (hourM > 12) {
                  hourM -= 12;
                  splitedSecondM[1] = 'AM';
                }
                if (hourMto > 12) {
                  hourMto -= 12;
                  splitedSecondM[1] = 'AM';
                }
                if (hourE > 12) {
                  hourE -= 12;
                  splitedSecondE[1] = 'PM';
                }
                if (hourEto > 12) {
                  hourEto -= 12;
                  splitedSecondE[1] = 'PM';
                }
                if (minutesM > 59) {
                  minutesM -= 60;
                  hourM += 1;
                  hourMto += 1;
                } else if (minutesM < 0) {
                  minutesM += 60;
                  hourM -= 1;
                  hourMto -= 1;
                }
                if (minutesE > 59) {
                  minutesE -= 60;
                  hourE += 1;
                  hourEto += 1;
                } else if (minutesE < 0) {
                  minutesE += 60;
                  hourE -= 1;
                  hourEto -= 1;
                }
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
    cityConfirm() {
      this.newMyCityDB = this.myCityDB.cities;
      // console.log(this.newMyCityDB);
    },
    coordsResult(lat, long, divFunc, name, gmtH, gmtM) {
      setTimeout(() => {
        // eslint-disable-next-line
        divFunc.innerHTML = `${name}`;
        axios.get(`ahttps://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`)
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
              hourM += gmtH;
              hourE += gmtH;
              hourMto += gmtH;
              hourEto += gmtH;
              minutesM += gmtM;
              minutesE += gmtM;
              // hour validation if gmt is starting next day
              if (hourM > 12) {
                hourM -= 12;
                splitedSecondM[1] = 'AM';
              }
              if (hourMto > 12) {
                hourMto -= 12;
                splitedSecondM[1] = 'AM';
              }
              if (hourE > 12) {
                hourE -= 12;
                splitedSecondE[1] = 'PM';
              }
              if (hourEto > 12) {
                hourEto -= 12;
                splitedSecondE[1] = 'PM';
              }
              if (minutesM > 59) {
                minutesM -= 60;
                hourM += 1;
                hourMto += 1;
              } else if (minutesM < 0) {
                minutesM += 60;
                hourM -= 1;
                hourMto -= 1;
              }
              if (minutesE > 59) {
                minutesE -= 60;
                hourE += 1;
                hourEto += 1;
              } else if (minutesE < 0) {
                minutesE += 60;
                hourE -= 1;
                hourEto -= 1;
              }
              // eslint-disable-next-line
              divFunc.innerHTML = `${name} <br /> ${hourM}:${minutesM} ${splitedSecondM[1]} - ${hourMto}:${minutesM} ${splitedSecondM[1]} <br />
                ${hourEto}:${minutesE} ${splitedSecondE[1]} - ${hourE}:${minutesE} ${splitedSecondE[1]}`;
            }
            morningGoldenHour(response.data.results.sunrise, response.data.results.sunset);

            // console.log(response.data.results.sunrise);
          })
          .catch((error) => {
            // eslint-disable-next-line
            console.log(error);
          });
      }, 1);
    },
  },
  watch: {
    // eslint-disable-next-line
    cityPick:function () {
      const div = document.querySelector('.Form-Results');
      const mainValues = document.querySelector('.mainValues');
      const appAfter = document.querySelector('.app-after');
      const appInner = document.querySelector('.app-Inner');
      let child = div.lastElementChild;
      while (child) {
        div.removeChild(child);
        child = div.lastElementChild;
      }
      if (this.cityPick === '') {
        setTimeout(() => {
          appInner.style.cssText = 'justify-content: center;';
          mainValues.style.cssText = 'display: flex';
          appAfter.style.cssText = 'opacity: 0;';
          while (child) {
            div.removeChild(child);
            child = div.lastElementChild;
          }
        }, 10);
      } else {
        appInner.style.cssText = 'height: 100vh;';
        // home.style.cssText = 'opacity: 0';
        mainValues.style.cssText = 'opacity: 0; height: 0px; margin-bottom: 0px;';
        appAfter.style.cssText = 'opacity: 0.7;';
        setTimeout(() => {
          // home.style.cssText = 'display: none';
          mainValues.style.cssText = 'display: none; opacity: 0; height: 0px;';
        }, 300);
        this.myCityDB.cities.forEach((element) => {
          // console.log(element.name);
          const word = element.name.toUpperCase();
          const exists = word.includes(this.cityPick.toUpperCase());
          if (exists === true) {
            // console.log(element.name);
            // eslint-disable-next-line
            let divResult = document.createElement('div');
            divResult.classList.add('Result-City');
            // divResult.innerHTML = element.name;
            // eslint-disable-next-line
            this.coordsResult(element.lat, element.long, divResult, element.name, element.gmtH, element.gmtM);
            div.appendChild(divResult);
            // coords to result
          }
        });
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
    z-index: 0;
    position: relative;
    background: url("../src/assets/bg.jpg") center center;
    background-size: cover;
    background-position: 30%;
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    &-Inner{
      transition: 0.3s;
      z-index: 2;
      width: 100%;
      height: calc(50vh + calc(20vw - 12px));
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-direction: column;
    }
    &-after{
      transition: 1s;
      z-index: 1;
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 100%;
      height: 100vh;
      background: black;
      opacity: 0;
    }
  }
  .mainValues{
    transition: 0.3s;
    opacity: 1;
    @include centerItems();
    color: white;
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10vh;
    width: 100vw;
    height: 10vh;
    &_Result {
      height: 0px;
      display: none;
      opacity: 0;
    }
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
  .Form{
        transition: 0.3s;
        width: 100%;
        min-height: 20vh;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &-Input{
          margin-bottom: 20px;
            width: 175px;
            padding: 5px;
            font-size: 10px;
            color: rgba($color: #fff, $alpha: .42);
            background: none;
            border: none;
            border-bottom: 1px solid white;
            text-align: center;
            outline: none;
        }
        &-Results{
          opacity: 1;
          transition: 1s;
          height: 0px;
          min-height: calc(5vw - 12px);
        }
        &-InputField{
          height: 10vh;
        }
  }
  .Result{
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: auto;
    &-City{
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      border-radius: 50%;
      width: calc(20vw - 12px);
      height: calc(20vw - 12px);
      background: rgba($color: #FFF, $alpha: 0.06);
      margin: 5px;
      animation: goingin 0.2s ease-in-out alternate 1;
      border: 1px solid white;
    }
    &-City:hover {
      cursor: pointer;
      background: rgba($color: #fff, $alpha: 1);
      transition: 0.25s;
      color: black;
      border: 1px solid black;
    }
  }
  ::placeholder {
      color: rgba($color: #fff, $alpha: .42);
  }
  @keyframes goingin {
    from{
      font-size: 0px;
      width: 0px;
      opacity: 0;
      height: 0px;
    }to{
      font-size: 1rem;
      width: calc(20vw - 12px);
      opacity: 1;
      height: calc(20vw - 12px);
    }
  }
  @keyframes out {
    from{
      opacity: 1;
    }to{
      opacity: 0;
    }
  }
  h2 {
    font-weight: 800;
    font-size: 30px;
    letter-spacing: 1.5px;
  }
  .home {
    transition: 1s;
    opacity: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    height: 20vh;
    text-align: center;
    color: white;
  }
</style>
