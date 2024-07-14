<template>
  <button class="close-btn" type="button">
    <span></span>
    <span></span>
  </button>
</template>

<style scoped lang="scss">
.close-btn {
  width: 32rem;
  height: 32rem;
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 4rem;
    width: 34rem;
    background: var(--color-main);

    &:first-child {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:last-child {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }
}
</style>