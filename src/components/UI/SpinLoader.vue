<template>
  <div class="spin-loader">
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
    <div class="spin-loader__circle-container">
      <span class="spin-loader__circle"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spin-loader {
  position: relative;
  width: 55rem;
  height: 55rem;

  &__circle-container {
    position: absolute;
    width: 100%;
    height: 100%;

    &:nth-child(1) {
      transform: rotate(330deg);

      .spin-loader__circle {
        animation-delay: -1.1s;
      }
    }

    &:nth-child(2) {
      transform: rotate(300deg);

      .spin-loader__circle {
        animation-delay: -1s;
      }
    }

    &:nth-child(3) {
      transform: rotate(270deg);

      .spin-loader__circle {
        animation-delay: -0.9s;
      }
    }

    &:nth-child(4) {
      transform: rotate(240deg);

      .spin-loader__circle {
        animation-delay: -0.8s;
      }
    }

    &:nth-child(5) {
      transform: rotate(210deg);

      .spin-loader__circle {
        animation-delay: -0.7s;
      }
    }

    &:nth-child(6) {
      transform: rotate(180deg);

      .spin-loader__circle {
        animation-delay: -0.6s;
      }
    }

    &:nth-child(7) {
      transform: rotate(150deg);

      .spin-loader__circle {
        animation-delay: -0.5s;
      }
    }

    &:nth-child(8) {
      transform: rotate(120deg);

      .spin-loader__circle {
        animation-delay: -0.4s;
      }
    }

    &:nth-child(9) {
      transform: rotate(90deg);

      .spin-loader__circle {
        animation-delay: -0.3s;
      }
    }

    &:nth-child(10) {
      transform: rotate(60deg);

      .spin-loader__circle {
        animation-delay: -0.2s;
      }
    }

    &:nth-child(11) {
      transform: rotate(30deg);

      .spin-loader__circle {
        animation-delay: -0.1s;
      }
    }

    &:nth-child(12) {
      transform: rotate(0deg);

      .spin-loader__circle {
        animation-delay: 0s;
      }
    }
  }

  &__circle {
    display: block;
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background: #3BDE7C;
    animation: fade 1.2s linear infinite;
  }
}


@keyframes fade {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
}

</style>
<script setup lang="ts">
</script>