<template>
    <div class="MainValues">
        <p class="MainValues-Data">
            Sydney <br />
            6:20 pm, 4.00 am
        </p>
    </div>
</template>

<script>
export default {
  name: 'MainValues',
};
</script>

<style lang="scss" scoped>
    .MainValues{
        width: 100%;
        height: 20vh;
        display: flex;
        justify-content: center;
        align-items: center;
        &-Data{
            font-size: 20px;
            color: white;
            text-align: center;
            font-weight: 400;
        }
    }
</style>
