<template>
  <div class="App">
    <div class="App-Clicker Clicker">
        <div class="Grid Grid-Counter">
            {{ counter }}
        </div>
        <div class="Grid Grid-1Mld">
            <button class="Btn Btn-1Mld" :disabled="button9">1Mld</button>
        </div>
        <div class="Grid Grid-0">
            <!-- eslint-disable max-len -->
            <button class="Btn Btn-0" @click="counter1()">1</button>
        </div>
        <div class="Grid Grid-10">
            <button class="Btn Btn-10" :disabled="button1">10</button>
        </div>
        <div class="Grid Grid-100">
            <button class="Btn Btn-100" :disabled="button2">100</button>
        </div>
        <div class="Grid Grid-1K">
            <button class="Btn Btn-1K" :disabled="button3">1k</button>
        </div>
        <div class="Grid Grid-10K">
            <button class="Btn Btn-10K" :disabled="button4">10k</button>
        </div>
        <div class="Grid Grid-100K">
            <button class="Btn Btn-100K" :disabled="button5">100k</button>
        </div>
        <div class="Grid Grid-1Mln">
            <button class="Btn Btn-1Mln" :disabled="button6">1Mln</button>
        </div>
        <div class="Grid Grid-10Mln">
            <button class="Btn Btn-10Mln" :disabled="button7">10Mln</button>
        </div>
        <div class="Grid Grid-100Mln">
            <button class="Btn Btn-100Mln" :disabled="button8">100Mln</button>
        </div>
    </div>
    <div class="App-Bar">
      <button class="Btn1 Btn-Add" :disabled="buttonAdd1" @click="autoCount()">BTN1 <br /> {{ buttonAddCount1 }}</button>
      <button class="Btn2 Btn-Add" :disabled="buttonAdd2">BTN2</button>
      <button class="Btn3 Btn-Add" :disabled="buttonAdd3">BTN3</button>
      <button class="Btn4 Btn-Add" :disabled="buttonAdd4">BTN4</button>
      <button class="Btn5 Btn-Add" :disabled="buttonAdd5">BTN5</button>
      <button class="Btn6 Btn-Add" :disabled="buttonAdd6">BTN6</button>
      <button class="Btn7 Btn-Add" :disabled="buttonAdd7">BTN7</button>
      <button class="Btn8 Btn-Add" :disabled="buttonAdd8">BTN8</button>
      <button class="Btn9 Btn-Add" :disabled="buttonAdd9">BTN9</button>
      <button class="Btn10 Btn-Add">MORE</button>

    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      counter: 1,
      button1: true,
      button2: true,
      button3: true,
      button4: true,
      button5: true,
      button6: true,
      button7: true,
      button8: true,
      button9: true,
      buttonAdd1: true,
      buttonAdd2: true,
      buttonAdd3: true,
      buttonAdd4: true,
      buttonAdd5: true,
      buttonAdd6: true,
      buttonAdd7: true,
      buttonAdd8: true,
      buttonAdd9: true,
      buttonAddCount1: 0,
    };
  },
  methods: {
    counter1() {
      this.counter += 1;
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
      if (this.counter >= 10) {
        this.button1 = false;
      } else {
        this.button1 = true;
      }
      if (this.counter >= 5) {
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
    }

</style>
