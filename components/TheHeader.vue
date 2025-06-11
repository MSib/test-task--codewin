<template lang="pug">
header.header
  .header__contacts.contacts
    .contacts__item
      SvgoPin(class="text-xl" filled).contacts__icon
      span.contacts__text г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204
    .contacts__item
      SvgoPhone(class="text-xl" filled).contacts__icon
      NuxtLink(to="tel:+73912095757").contacts__link +7 (391) 209 57-57
    .contacts__item
      SvgoPhone(class="text-xl" filled).contacts__icon
      NuxtLink(to="tel:+73912155433").contacts__link +7 (391) 215 54-33
    .contacts__item
      SvgoEmail(class="text-xl" filled).contacts__icon
      NuxtLink(to="mailto:los-bio@mail.ru").contacts__link los-bio@mail.ru
    .contacts__item
      SvgoForward(class="text-xl" filled).contacts__icon
      a.contacts__link(href="#") Заказать звонок

  .header__logo.logo
    NuxtLink(to="/").logo__link
      SvgoLogo(style="width: 240px;" :fontControlled="false" filled).logo__icon

  .header__menu.menu
    .menu__item
      NuxtLink(to="/").menu__link О компании
    .menu__item
      NuxtLink(to="/").menu__link Проекты
    .menu__item.menu__item--dropdown
      NuxtLink(to="/").menu__link Каталог
    .menu__item
      NuxtLink(to="/").menu__link Контакты

  .header__actions.actions-header
    button.actions-header__button(type="button") Получить КП
</template>

<style lang="scss">
</style>