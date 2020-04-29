<template>
    <main class="Form">
      <div class="Form-First Form-Block">
        <h2 :class="givecolor">{{ login }}</h2>
        Type anything <input type="text" v-model.lazy="login"> <br /><br />
        Type 'yellow', 'blue', or 'red <input type="text" v-model="givecolor">
        <h2>{{ computedTitle }}</h2>
      </div>
      <div class="Form-Second Form-Block">
        <input type="checkbox" v-model="checkbox">
        <span v-if="checkbox === true">YOU CHECKED THAT</span>
        <span v-else>NOT CHECKED</span><br /><br />
        <input type="text" v-model="message">
        <span v-if="message === 'hello'">You said {{ message }}</span>
        <span v-else-if="message === 'goodbye'">You said {{ message }}</span>
        <span v-else-if="message === 'lol'">You said {{ message }}</span>
        <span v-else>U said something diferent</span>
      </div>
    </main>
</template>
<script>
export default {
  name: 'Form',
  data() {
    return {
      login: 'Hello',
      givecolor: 'red',
      checkbox: false,
      message: '',
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
    .Form-Block{
      margin: 50px;
    }
</style>
