<script setup lang="ts">
import type {Component} from "vue";
import AppBar from "@/components/UI/AppBar.vue";
import SidePanel from "@/components/UI/SidePanel.vue";
import MobileNav from "@/components/MainLayout/MobileNav.vue";

defineProps<{
  footer?: Component
  headerText?: string
  headerSize?: 'sm' | 'lg'
}>()

</script>

<template>
  <div class="main-layout">
    <header>
      <AppBar :text="headerText" :text-size="headerSize" @hamburgerClick="$router.push({query: {nav: 'opened'}})"/>
      <SidePanel query="nav">
        <MobileNav class="main-layout__mobile-nav"/>
      </SidePanel>
    </header>
    <main>
      <slot/>
    </main>
    <footer class="main-layout__footer" v-if="footer">
      <div class="main-layout__footer-text">
        <component :is="footer" />
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.main-layout {

  position: relative;

  &__mobile-nav {
    margin-top: 110rem;
  }

  &__footer {
    position: sticky;
    bottom: 0;
    z-index: 4;
  }

  &__footer-text {
    position: absolute;
    width: 100%;
    top: -16rem;
    padding: 0 11rem 20rem 11rem;
  }
}
</style>