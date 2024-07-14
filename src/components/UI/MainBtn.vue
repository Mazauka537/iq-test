<script setup lang="ts">
defineProps<{
  bigger?: boolean
  outline?: boolean
  disabled?: boolean
  href?: string
}>()
</script>

<template>
  <component :is="href ? 'router-link' : 'button'" :to="href" class="main-btn" :disabled="disabled" :class="{
    'main-btn_bigger': bigger,
    'main-btn_outline': outline,
    'main-btn_disabled': disabled
  }">
    <slot/>
  </component>
</template>

<style scoped lang="scss">
.main-btn {
  background: var(--color-main);
  color: #0D0C11;
  width: 189rem;
  height: 41rem;
  border: 1rem solid var(--color-main);
  text-align: center;
  text-transform: uppercase;
  border-radius: 100rem;
  font-size: 14rem;
  letter-spacing: .1em;
  font-family: var(--font-merriweather);
  font-weight: 700;
  display: inline-block;
  line-height: 41rem;
  cursor: pointer;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 0 10rem 0 var(--color-main);
  }

  &_bigger {
    width: 200rem;
    height: 44rem;
  }

  &_outline {
    background: transparent;
    color: #FFFFFF;
    border-color: #FFFFFF;

    &:hover {
      box-shadow: 0 0 10rem 0 #FFFFFF;
    }
  }

  &_disabled {
    background: #DADADA;
    border: none;
    padding: 1rem;
    color: #8E8E8E;
    box-shadow: inset 0 4rem 10rem 0 rgba(#000000, 0.25);
    cursor: default;

    &:hover {
      box-shadow: inset 0 4rem 10rem 0 rgba(#000000, 0.25);
    }
  }
}
</style>