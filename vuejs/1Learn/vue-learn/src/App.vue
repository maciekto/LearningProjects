<template>
  <div class="App">
    <Clicker :counter="counter" />
    <Bar />
  </div>
</template>
<script>
import Clicker from './components/Clicker.vue';
import Bar from './components/Bar.vue';

export default {
  name: 'App',
  components: {
    Clicker,
    Bar,
  },
  data() {
    return {
      counter: 1,
    };
  },
};
</script>
<style lang="scss">
  body{
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
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
</style>
