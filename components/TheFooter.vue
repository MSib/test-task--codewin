<template lang="pug">
footer.footer
  .footer__info
    .footer__logo.logo
      NuxtLink(to="/").logo__link
        SvgoLogo(style="width: 240px;" :fontControlled="false" filled).logo__img
    p.footer__company ООО «ТОРГОВЫЙ ДОМ «ЛОС-БИО»
    dl.footer__details.details
      dt.details__title ИНН:
      dd.details__value 2463123719
      dt.details__title  КПП:
      dd.details__value 246301001
      dt.details__title  ОГРН:
      dd.details__value 1212400008688

  section.footer__nav.nav
    h2.nav__title Компания
    nav.nav__wrap
      ul.nav__list
        li.nav__item
          NuxtLink(to="/").nav__link О компании
        li.nav__item
          NuxtLink(to="/").nav__link Проекты
        li.nav__item
          NuxtLink(to="/").nav__link Каталог
        li.nav__item
          NuxtLink(to="/").nav__link Контакты
      
  section.footer__nav.nav
    h2.nav__title Каталог
    nav.nav__wrap
      ul.nav__list
        li.nav__item
          NuxtLink(to="/").nav__link КНС
        li.nav__item
          NuxtLink(to="/").nav__link Ёмкости
        li.nav__item
          NuxtLink(to="/").nav__link Ливневые очистные-сооружения
        li.nav__item
          NuxtLink(to="/").nav__link Хозяйственно-бытовые очистные сооружения
        li.nav__item
          NuxtLink(to="/").nav__link Комплектующие
      
  section.footer__nav.nav
    h2.nav__title Контакты
    nav.nav__wrap
      ul.nav__list
        li.nav__item
          NuxtLink(to="/").nav__link г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204
        li.nav__item
          NuxtLink(to="tel:+73912095757").nav__link +7 (391) 209 57-57
        li.nav__item
          NuxtLink(to="tel:+73912155433").nav__link +7 (391) 215 54-33
        li.nav__item
          NuxtLink(to="mailto:los-bio@mail.ru").nav__link los-bio@mail.ru
        li.nav__item
        button.nav__button(type="button") Получить КП
</template>

<style lang="scss">
</style>