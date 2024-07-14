<script setup lang="ts">
import {RouterView} from 'vue-router'
import MainLayout from "@/layouts/MainLayout.vue";
import type {Component} from "vue";
import type { TRouteMeta } from './types/routeMeta';
</script>

<template>
  <MainLayout :footer="($route.meta as TRouteMeta).footer"
              :header-text="($route.meta as TRouteMeta).headerText"
              :header-size="($route.meta as TRouteMeta).headerSize">
    <RouterView/>
  </MainLayout>
</template>

<style scoped>

</style>
