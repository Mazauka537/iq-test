<script setup lang="ts">

</script>

<template>
  <button class="hamburger-btn" type="button" title="Меню">
    <span></span>
    <span></span>
    <span></span>
  </button>
</template>

<style scoped lang="scss">
.hamburger-btn {
  display: block;
  position: relative;
  width: 32rem;
  height: 32rem;
  cursor: pointer;

  span {
    position: absolute;
    width: 24rem;
    height: 2.67rem;
    background: #696969;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    &:first-child {
      transform: translate(-50%, -8rem);
    }

    &:last-child {
      transform: translate(-50%, 5.33rem);
    }
  }
}
</style>