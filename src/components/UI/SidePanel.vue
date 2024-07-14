<script setup lang="ts">
import CloseBtn from "@/components/UI/CloseBtn.vue";

defineProps<{
  query: string
}>()
</script>

<template>
  <Transition name="slide-right" >
    <div class="aside-nav" v-show="$route.query[query] === 'opened'">
      <CloseBtn class="aside-nav__close-btn" @click="$router.back()"/>
      <slot/>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform .2s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(-100%);
}

.aside-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #181818;
  z-index: 5;
  max-width: 320rem;

  &__close-btn {
    position: absolute;
    top: 18rem;
    right: 13rem;
  }
}
</style>