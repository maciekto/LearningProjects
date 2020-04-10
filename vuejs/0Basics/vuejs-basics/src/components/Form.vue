<template>
    <div class="Form">
        <input type="text" class="Form-Input" placeholder="check golden hour in other cities">
    </div>
</template>

<script>
export default {
  name: 'Form',
};
</script>

<style lang="scss" scoped>
    .Form{
        width: 100%;
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        &-Input{
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
    }
    ::placeholder {
        color: rgba($color: #fff, $alpha: .42);
    }
</style>
