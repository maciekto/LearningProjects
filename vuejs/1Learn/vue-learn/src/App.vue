<template>
  <div class="App">
    <div class="App-Clicker Clicker">
        <div class="Grid Grid-Counter">
            {{ counter }}
        </div>
        <!-- Normal Count Buttons -->
        <div class="Grid Grid-1Mld">
            <button class="Btn Btn-1Mld" :disabled="buttons[9].button">1Mld</button>
            <div class="Btn-Unlock" :style="buttons[9].display" @click="firstClick(9)"></div>
        </div>
        <div class="Grid Grid-0">
            <!-- eslint-disable max-len -->
            <button class="Btn Btn-0" @click="counter1(1)" :disabled="buttons[0].button">1</button>
            <div class="Btn-Animate" :class="click"></div>
        </div>
        <div class="Grid Grid-10">
            <button class="Btn Btn-10" @click="counter1(99)" :disabled="buttons[1].button">10</button>
            <div class="Btn-Unlock" :style="buttons[1].display" @click="firstClick(1)"></div>
        </div>
        <div class="Grid Grid-100">
            <button class="Btn Btn-100" @click="counter1(999)" :disabled="buttons[2].button">100</button>
            <div class="Btn-Unlock" :style="buttons[2].display" @click="firstClick(2)"></div>
        </div>
        <div class="Grid Grid-1K">
            <button class="Btn Btn-1K" @click="counter1(500)" :disabled="buttons[3].button">1k</button>
            <div class="Btn-Unlock" :style="buttons[3].display" @click="firstClick(3)"></div>
        </div>
        <div class="Grid Grid-10K">
            <button class="Btn Btn-10K" @click="counter1(99999)" :disabled="buttons[4].button">10k</button>
            <div class="Btn-Unlock" :style="buttons[4].display" @click="firstClick(4)"></div>
        </div>
        <div class="Grid Grid-100K">
            <button class="Btn Btn-100K" @click="counter1(100000)" :disabled="buttons[5].button">100k</button>
            <div class="Btn-Unlock" :style="buttons[5].display" @click="firstClick(5)"></div>
        </div>
        <div class="Grid Grid-1Mln">
            <button class="Btn Btn-1Mln" @click="counter1(1000000)" :disabled="buttons[6].button">1Mln</button>
            <div class="Btn-Unlock" :style="buttons[6].display" @click="firstClick(6)"></div>
        </div>
        <div class="Grid Grid-10Mln">
            <button class="Btn Btn-10Mln" @click="counter1(10000000)" :disabled="buttons[7].button">10Mln</button>
            <div class="Btn-Unlock" :style="buttons[7].display" @click="firstClick(7)"></div>
        </div>
        <div class="Grid Grid-100Mln">
            <button class="Btn Btn-100Mln" @click="counter1(100000000)" :disabled="buttons[8].button">100Mln</button>
            <div class="Btn-Unlock" :style="buttons[8].display" @click="firstClick(8)"></div>
        </div>
    </div>
    <!-- Auto Count Buttons -->
    <div class="App-Bar">
      <div class="Btn-Add">
        <button class="Btn1 Btn-Inner" :disabled="buttons[0].buttonAdd">MORE </button>
        <div class="Btn-Add_Unlock" style="display: none"></div>
      </div>
      <div class="Btn-Add">
        <button class="Btn2 Btn-Inner" :disabled="buttons[1].buttonAdd" @click="allowAutoCount(1, 20)">BTN1 <br /> {{ buttons[1].buttonAddCount }} <br /> {{ this.buttons[1].buttonAddCost }}</button>
        <div class="Btn-Add_Unlock" :style="buttons[1].display"></div>
      </div>
      <div class="Btn-Add">
        <button class="Btn3 Btn-Inner" :disabled="buttons[2].buttonAdd">BTN2</button>
        <div class="Btn-Add_Unlock" :style="buttons[2].display"></div>
      </div>
      <div class="Btn-Add">
        <button class="Btn4 Btn-Inner" :disabled="buttons[3].buttonAdd">BTN3</button>
        <div class="Btn-Add_Unlock" :style="buttons[3].display"></div>
      </div>
      <div class="Btn-Add">
        <button class="Btn5 Btn-Inner" :disabled="buttons[4].buttonAdd">BTN4</button>
        <div class="Btn-Add_Unlock" :style="buttons[4].display"></div>
      </div>
      <div class="Btn-Add">
        <button class="Btn6 Btn-Inner" :disabled="buttons[5].buttonAdd">BTN5</button>
        <div class="Btn-Add_Unlock" :style="buttons[5].display"></div>
      </div>
      <div class="Btn-Add">
        <button class="Btn7 Btn-Inner" :disabled="buttons[6].buttonAdd">BTN6</button>
        <div class="Btn-Add_Unlock" :style="buttons[6].display"></div>
      </div>
      <div class="Btn-Add">
        <button class="Btn8 Btn-Inner" :disabled="buttons[7].buttonAdd">BTN7</button>
        <div class="Btn-Add_Unlock" :style="buttons[7].display"></div>
      </div>
      <div class="Btn-Add">
        <button class="Btn9 Btn-Inner" :disabled="buttons[8].buttonAdd">BTN8</button>
        <div class="Btn-Add_Unlock" :style="buttons[8].display"></div>
      </div>
      <div class="Btn-Add">
        <button class="Btn10 Btn-Inner" :disabled="buttons[9].buttonAdd">BTN9</button>
        <div class="Btn-Add_Unlock" :style="buttons[9].display"></div>
      </div>
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
          firstClick: false,
          display: 'display: block',
        },
        { // 1
          button: true,
          buttonAdd: true,
          buttonAddCost: 10,
          costMultiple: 1,
          buttonAddCount: 0,
          firstClick: false,
          display: 'display: block',
        },
        { // 2
          button: true,
          buttonAdd: true,
          firstClick: false,
          display: 'display: block',
        },
        { // 3
          button: true,
          buttonAdd: true,
          firstClick: false,
          display: 'display: block',
        },
        { // 4
          button: true,
          buttonAdd: true,
          firstClick: false,
          display: 'display: block',
        },
        { // 5
          button: true,
          buttonAdd: true,
          firstClick: false,
          display: 'display: block',
        },
        { // 6
          button: true,
          buttonAdd: true,
          firstClick: false,
          display: 'display: block',
        },
        { // 7
          button: true,
          buttonAdd: true,
          firstClick: false,
          display: 'display: block',
        },
        { // 8
          button: true,
          buttonAdd: true,
          firstClick: false,
          display: 'display: block',
        },
        { // 9
          button: true,
          buttonAdd: true,
          firstClick: false,
          display: 'display: block',
        },
      ],
    };
  },
  methods: {
    // unlocking buttons
    firstClick(x) {
      if (this.buttons[x].firstClick === false && this.counter >= 10 ** x) {
        this.buttons[x].firstClick = true;
        this.buttons[x].display = 'display: none';
        this.counter -= 10 ** x;
      }
      return this.counter;
    },
    // click count
    counter1(x) {
      this.counter += x;
      return this.counter;
    },
    // allow auto count
    allowAutoCount(x) {
      if (this.counter >= this.buttons[x].buttonAddCost) {
        this.autoCount(10, x);
        this.counter -= this.buttons[x].buttonAddCost;
        // eslint-disable-next-line max-len
        this.buttons[x].buttonAddCost += this.buttons[x].buttonAddCost * this.buttons[x].costMultiple;
        this.buttons[x].costMultiple += 1;
      }
    },
    // auto count
    autoCount(x, y) {
      setInterval(() => {
        this.counter += x;
        return this.counter;
      }, 1000, x);
      this.buttons[y].buttonAddCount += 1;
      return this.buttons[y].buttonAddCount;
    },
    // animations
    animationClick() {
      this.click = 'Btn-Animate_Add';
      setTimeout(() => {
        this.click = 'back';
      }, 200);
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
      } else if (this.counter >= 100000000 && this.counter < 10000000000) {
        this.buttons[9].button = false;
      }
      // auto buttons
      if (this.counter >= 10 && this.counter < 100) {
        this.buttons[1].buttonAdd = false;
      } else if (this.counter >= 100 && this.counter < 1000) {
        this.buttons[2].buttonAdd = false;
      } else if (this.counter >= 1000 && this.counter < 10000) {
        this.buttons[3].buttonAdd = false;
      } else if (this.counter >= 10000 && this.counter < 100000) {
        this.buttons[4].buttonAdd = false;
      } else if (this.counter >= 100000 && this.counter < 1000000) {
        this.buttons[5].buttonAdd = false;
      } else if (this.counter >= 1000000 && this.counter < 10000000) {
        this.buttons[6].buttonAdd = false;
      } else if (this.counter >= 10000000 && this.counter < 100000000) {
        this.buttons[7].buttonAdd = false;
      } else if (this.counter >= 100000000 && this.counter < 1000000000) {
        this.buttons[8].buttonAdd = false;
      } else if (this.counter >= 100000000 && this.counter < 10000000000) {
        this.buttons[9].buttonAdd = false;
      }
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
        ". . . . . .  Coun Coun . . . . . ."
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
        z-index: 1;
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
        &-Add{
          position: relative;
          z-index: 1;
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
          &_Unlock{
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            width: inherit;
            height: inherit;
            background: rgba($color: #cc55cc, $alpha: 0.2);
          }
        }
        &:active{
            background: yellow;
        }
        &:focus{
          //background: yellow;
        }
        &-Unlock{
          position: absolute;
          z-index: 2;
          width: 40px;
          height: 40px;
          background: rgba($color: #cc77aa, $alpha: 0.2);
          @media (min-width: 450px) and (max-width: 767px){
            width: 62px;
            height: 62px;
          }
          @media (min-width: 768px) and (max-width: 1024px){
              width: 70px;
              height: 70px;
          }
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
        &-Inner{
          width: inherit;
          height: inherit;
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
            animation: clickCount 0.2s ease-in-out 1;
          }
        }
    }
    @keyframes clickCount {
      0%{
        border: 0px solid black;
        width: 50px;
        height: 50px;
        transform: translateX(-25px) translateY(-25px);
        opacity: 1;
      }70%{
        border: 2px solid black;
        transform: translateX(-50px) translateY(-50px);
        width: 100px;
        height: 100px;
        opacity: 1;
      }100%{
        border: 1px solid black;
        transform: translateX(-50px) translateY(-50px);
        width: 100px;
        height: 100px;
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
