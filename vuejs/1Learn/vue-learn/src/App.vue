<template>
  <div class="App">
    <div class="App-Clicker Clicker">
        <div class="Grid Grid-Counter">
            {{ counter }}
        </div>
        <div class="Grid Grid-1Mld">
            <button class="Btn Btn-1Mld" :disabled="buttons[9].button">1Mld</button>
        </div>
        <div class="Grid Grid-0">
            <!-- eslint-disable max-len -->
            <button class="Btn Btn-0" @click="counter1(1), click = 'Btn-Animate_Add'" :disabled="buttons[0].button">1</button>
            <div class="Btn-Animate" :class="click"></div>
        </div>
        <div class="Grid Grid-10">
            <button class="Btn Btn-10" @click="counter1(10)" :disabled="buttons[1].button">10</button>
        </div>
        <div class="Grid Grid-100">
            <button class="Btn Btn-100" @click="counter1(100)" :disabled="buttons[2].button">100</button>
        </div>
        <div class="Grid Grid-1K">
            <button class="Btn Btn-1K" @click="counter1(500)" :disabled="buttons[3].button">1k</button>
        </div>
        <div class="Grid Grid-10K">
            <button class="Btn Btn-10K" @click="counter1(1500)" :disabled="buttons[4].button">10k</button>
        </div>
        <div class="Grid Grid-100K">
            <button class="Btn Btn-100K" @click="counter1(100000)" :disabled="buttons[5].button">100k</button>
        </div>
        <div class="Grid Grid-1Mln">
            <button class="Btn Btn-1Mln" @click="counter1(1000000)" :disabled="buttons[6].button">1Mln</button>
        </div>
        <div class="Grid Grid-10Mln">
            <button class="Btn Btn-10Mln" @click="counter1(10000000)" :disabled="buttons[7].button">10Mln</button>
        </div>
        <div class="Grid Grid-100Mln">
            <button class="Btn Btn-100Mln" @click="counter1(100000000)" :disabled="buttons[8].button">100Mln</button>
        </div>
    </div>
    <div class="App-Bar">
      <button class="Btn1 Btn-Add" :disabled="buttons[0].buttonAdd">MORE </button>
      <button class="Btn2 Btn-Add" :disabled="buttons[1].buttonAdd" @click="autoCount()">BTN1 <br /> {{ buttonAddCount1 }}</button>
      <button class="Btn3 Btn-Add" :disabled="buttons[2].buttonAdd">BTN2</button>
      <button class="Btn4 Btn-Add" :disabled="buttons[3].buttonAdd">BTN3</button>
      <button class="Btn5 Btn-Add" :disabled="buttons[4].buttonAdd">BTN4</button>
      <button class="Btn6 Btn-Add" :disabled="buttons[5].buttonAdd">BTN5</button>
      <button class="Btn7 Btn-Add" :disabled="buttons[6].buttonAdd">BTN6</button>
      <button class="Btn8 Btn-Add" :disabled="buttons[7].buttonAdd">BTN7</button>
      <button class="Btn9 Btn-Add" :disabled="buttons[8].buttonAdd">BTN8</button>
      <button class="Btn10 Btn-Add" :disabled="buttons[9].buttonAdd">BTN9</button>

    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      counter: 1,
      click: 'Btn-Animate_Add1',
      buttons: [
        { // 0
          button: false,
          buttonAdd: true,
        },
        { // 1
          button: true,
          buttonAdd: true,
        },
        { // 2
          button: true,
          buttonAdd: true,
        },
        { // 3
          button: true,
          buttonAdd: true,
        },
        { // 4
          button: true,
          buttonAdd: true,
        },
        { // 5
          button: true,
          buttonAdd: true,
        },
        { // 6
          button: true,
          buttonAdd: true,
        },
        { // 7
          button: true,
          buttonAdd: true,
        },
        { // 8
          button: true,
          buttonAdd: true,
        },
        { // 9
          button: true,
          buttonAdd: true,
        },
      ],
      buttonAddCount1: 0,
    };
  },
  methods: {
    counter1(x) {
      this.counter += x;
      return this.counter;
    },
    autoCount() {
      setInterval(() => {
        this.counter += 1;
        return this.counter;
      }, 1000);
      this.buttonAddCount1 += 1;
      return this.buttonAddCount1;
    },
  },
  watch: {
    counter() {
      if (this.counter >= 10 && this.counter < 100) {
        this.buttons[1].button = false;
      } else if (this.counter >= 100 && this.counter < 1000) {
        this.buttons[2].button = false;
      } else if (this.counter >= 1000 && this.counter < 10000) {
        this.buttons[3].button = false;
      } else if (this.counter >= 10000 && this.counter < 100000) {
        this.buttons[4].button = false;
      } else if (this.counter >= 100000 && this.counter < 1000000) {
        this.buttons[5].button = false;
      } else if (this.counter >= 1000000 && this.counter < 10000000) {
        this.buttons[6].button = false;
      } else if (this.counter >= 10000000 && this.counter < 100000000) {
        this.buttons[7].button = false;
      } else if (this.counter >= 100000000 && this.counter < 1000000000) {
        this.buttons[8].button = false;
      }
      // auto buttons
      if (this.counter >= 100) {
        this.buttonAdd1 = false;
      } else {
        this.buttonAdd1 = true;
      }
      return (this.button1, this.buttonAdd1);
    },
  },
};
</script>
<style lang="scss">
  body{
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .App{
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .Btn-Add{
    font-size: 1.5rem;
    padding: 0;
    margin: 0;
    outline: none;
    border-top: none;
    border-left: none;
    border-bottom: none;
    width: 10vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid black;
    &:hover{
      background-color: burlywood;
      cursor: pointer;
    }
  }
  .Btn10{
    border-right: none;
  }
  *{
        box-sizing: border-box;
        font-size: 10px;
  }
  .App-Bar{
    display: flex;
    width:100%;
    height: 10vh;
    border-top: 1px solid black;
  }
    .App-Clicker{
        width: 100%;
        height: 90vh;
        background: #eee;
        display: grid;
        grid-template-columns: repeat(14, 1fr);
        grid-template-rows: repeat(11, 1fr);
        grid-template-areas:
        ". Coun Coun . . . . . . . . . . ."
        ". . . . Mld1 Mld1 Mld1 Mld1 Mld1 Mld1 . . . ."
        ". . . . Mld1 Mld1 Mld1 Mld1 Mld1 Mld1 . . . ."
        ". . . . . . . . . . . . . ."
        ". . b100 b100 . . b10 b10 . . b100Mln b100Mln . ."
        ". . . . . . . . . . . . . ."
        ". . b1K b1K . . b0 b0 . . b10Mln b10Mln . ."
        ". . . . . . . . . . . . . ."
        ". . b10K b10K . . b100K b100K . . b1Mln b1Mln . ."
        ". . . . . . . . . . . . . ."
        ". . . . . . . . . . . . . ."
        ;
    }
    .Grid {
        position: relative;
        border: 0px solid black;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // Counter
        &-Counter{
            grid-area: Coun;
            font-size: 3rem;
        }
        // Final button
        &-1Mld{
            grid-area: Mld1;
            width: 100%;
            height: 100%;
        }
        // First row
        &-100{
            grid-area: b100;
        }
        &-10{
            grid-area: b10;
        }
        &-100Mln{
            grid-area: b100Mln;
        }
        // Second row
        &-1K{
            grid-area: b1K;
        }
        &-0{
            grid-area: b0;
        }
        &-10Mln{
            grid-area: b10Mln;
        }
        // Third row
        &-10K{
            grid-area: b10K;
        }
        &-100K{
            grid-area: b100K;
        }
        &-1Mln{
            grid-area: b1Mln;
        }
    }
    .Btn{
        z-index: 2;
        position: relative;
        font-size: 1rem;
        font-weight: 700;
        border-radius: 2px;
        border: 1px solid black;
        width: 40px;
        height: 40px;
        box-shadow: 0px 0px 3px black;
        outline: none;
        @media (min-width: 450px) and (max-width: 767px){
            width: 62px;
            height: 62px;
        }
        @media (min-width: 768px) and (max-width: 1024px){
            width: 70px;
            height: 70px;
        }
        &:active{
            //background: yellow;
        }
        &:focus{
          background: yellow;
        }
        &-1Mld{
            width: 100%;
            height: 100%;
        }
        &-0{
            width: 45px;
            height: 45px;
            @media (min-width: 450px) and (max-width: 767px){
                width: 60px;
                height: 60px;
            }
            @media (min-width: 768px) and (max-width: 1024px){
                width: 70px;
                height: 70px;
            }
        }
        &-Animate{
          z-index: 1;
          box-sizing: border-box;
          box-shadow: 0px 0px 10px black,
          0px 0px 50px inset yellow;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          position: absolute;
          width: 0px;
          height: 0px;
          border: 0px solid black;
          &_Add{
            animation: clickCount 1s ease-in-out infinite;
          }
        }
    }
    @keyframes clickCount {
      0%{
        border: 0px solid black;
        width: 0px;
        height: 0px;
        transform: translateX(0px) translateY(0px);
        opacity: 1;
      }70%{
        border: 2px solid black;
        transform: translateX(-100px) translateY(-100px);
        width: 200px;
        height: 200px;
        opacity: 1;
      }100%{
        border: 1px solid black;
        transform: translateX(-75px) translateY(-75px);
        width: 150px;
        height: 150px;
        opacity: 0;
      }
    }

    @keyframes autoCount {
          from{
            border-radius: 0%;
            box-shadow: 0px 0px 3px black;
            transform: rotate(0deg);
          }to{
            border-radius: 50%;
            box-shadow: 0px 0px 50px black;
            transform: rotate(360deg);
          }
        }

</style>
