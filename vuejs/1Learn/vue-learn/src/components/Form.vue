<template>
    <main class="Form">
        <label>Login:<br />
            <input type="text">
        </label>
        <label>Repeat login:<br />
            <input type="text">
        </label>
        <label>E-mail:<br />
            <input type="text">
        </label>
        <label>Repeat e-mail:<br />
            <input type="text">
        </label>
        <label><br />
            <input type="submit">
        </label>
    </main>
</template>
<script>
export default {
  name: 'Form',
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .Form{
        border: 1px solid black;
        box-shadow: 0px 0px 5px black;
        border-radius: 4px;
        width: 50vw;
        height: 60vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
    input{
        width: 25vw;
        transition: box-shadow 0.4s;
        border: none;
        border-bottom: 1px solid black;
        outline: none;
    }
    input[type='submit']{
        border-bottom: 1px solid black;
        width: 10vh;
        padding: 5px;
    }
    input[type='submit']:focus{
        transition: 0.4s;
        border: 1px solid black;
        box-shadow: none;
    }
    input:focus{
        transition: 0.4s;
        box-shadow: 0px 2px rgba($color: #000, $alpha: 0.3);
    }
    input:hover{
        transition: 0.4s;
        box-shadow: 0px 0px 5px black;
    }
</style>
