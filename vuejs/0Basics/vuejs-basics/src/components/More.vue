<template>
    <div class="More">
        <div class="More-Action">click for sunrise and sunset</div>
    </div>
</template>

<script>
export default {
  name: 'More',
};
</script>

<style lang="scss" scoped>
    .More {
        width: 100%;
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        &-Action{
            color: rgba($color: #fff, $alpha: .42);
            font-size: 10px;
        }
    }
</style>
