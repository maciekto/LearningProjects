<template>
  <div class="App">
    <Form />
  </div>
</template>
<script>
import Form from './components/Form.vue';

export default {
  name: 'App',
  components: {
    Form,
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
  }
</style>
