<template>
    <div class="MainValues">
        <p class="MainValues-Data">
            {{ dataFromDate }}
        </p>
    </div>
</template>

<script>
export default {
  name: 'MainValues',
  data() {
    return {
      // eslint-disable-next-line
      data: 'LEarn Vue in documentation',
    };
  },
  computed: {
    dataFromDate() {
      return this.data;
    },
  },
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
