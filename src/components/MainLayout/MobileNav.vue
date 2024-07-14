<template>
  <ul class="mobile-nav">
    <li class="mobile-nav__item">
      <router-link class="mobile-nav__link"
                   :class="{'mobile-nav__link_active': $route.path === '/'}"
                   to="/">
        Главная
      </router-link>
    </li>
    <li class="mobile-nav__item">
      <router-link class="mobile-nav__link"
                   :class="{'mobile-nav__link_active': $route.path === '/info'}"
                   to="/">
        Информация о тесте
      </router-link>
    </li>
    <li class="mobile-nav__item">
      <router-link class="mobile-nav__link"
                   :class="{'mobile-nav__link_active': $route.path === '/iq-test'}"
                   to="/iq-test">
        Пройти тест
      </router-link>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.mobile-nav {
  padding: 0 23rem;

  &__item {
    margin-bottom: 27rem;
  }

  &__link {
    font-family: var(--font-roboto);
    text-transform: uppercase;
    font-size: 16rem;
    color: #FFFFFF;
    font-weight: 300;

    &_active {
      color: var(--color-main);
    }
  }
}
</style>