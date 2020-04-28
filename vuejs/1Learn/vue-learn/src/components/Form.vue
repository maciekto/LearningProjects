<template>
    <main class="Form">
        <h2 :class="givecolor">{{ login }}</h2>
        Type anything <input type="text" v-model.lazy="login"> <br /><br />
        Type 'yellow', 'blue', or 'red <input type="text" v-model="givecolor">
        <h2>{{ computedTitle }}</h2>
    </main>
</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      login: 'Hello',
      givecolor: 'red',
    };
  },
  computed: {
    computedTitle() {
      return this.login;
    },
  },
  watch: {
    login() {
      alert(`Login was changed to ${this.login}`);
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .red{
        color: red;
    }
    .blue{
        color: blue;
    }
    .yellow{
        color: yellow;
    }
</style>
