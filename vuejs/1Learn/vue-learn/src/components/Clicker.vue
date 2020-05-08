<template>
    <div class="App-Clicker Clicker">
        <div class="Grid Grid-Counter">
            {{ counterResult }}
        </div>
        <div class="Grid Grid-1Mld">
            <button class="Btn Btn-1Mld">1Mld</button>
        </div>
        <div class="Grid Grid-0">
            <!-- eslint-disable max-len -->
            <button class="Btn Btn-0" :class="btn0Style" @mouseover="btn0Meth" @click="btn0Meth">1</button>
        </div>
        <div class="Grid Grid-10">
            <button class="Btn Btn-10" :class="btn1Style" :disabled="btn1.disabled">10</button>
        </div>
        <div class="Grid Grid-100">
            <button class="Btn Btn-100">100</button>
        </div>
        <div class="Grid Grid-1K">
            <button class="Btn Btn-1K">1k</button>
        </div>
        <div class="Grid Grid-10K">
            <button class="Btn Btn-10K">10k</button>
        </div>
        <div class="Grid Grid-100K">
            <button class="Btn Btn-100K" :disabled="true">100k</button>
        </div>
        <div class="Grid Grid-1Mln">
            <button class="Btn Btn-1Mln">1Mln</button>
        </div>
        <div class="Grid Grid-10Mln">
            <button class="Btn Btn-10Mln">10Mln</button>
        </div>
        <div class="Grid Grid-100Mln">
            <button class="Btn Btn-100Mln">100Mln</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Clicker',
  props: {
    counter: Number,
  },
  data() {
    return {
      counterResult: 0,
      btn0: {
        points: 0,
        disabled: false,
      },
      btn1: {
        points: 0,
        disabled: true,
      },
      btn0Style: 'Btn_enabled',
      btn1Style: 'Btn_disabled',
    };
  },
  methods: {
    btn0Meth() {
      if (this.btn0.points >= 9) {
        this.btn1.disabled = false;
        this.btn1Style = 'Btn_enabled';
      }
      this.counterResult += 1;
      // eslint-disable-next-line
      return this.btn0.points += 1;
    },
  },
};
</script>

<style lang="scss" scoped>
    *{
        box-sizing: border-box;
        font-size: 10px;
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
        &_disabled{
            background: rgb(255, 142, 142);
        }
        &_enabled{
            background: green;
        }
    }
</style>
