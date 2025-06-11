<template lang="pug">
  //- Slider
  MainSlider(v-if="slides" :slides)

  //- Advantages
  section.advantages(v-if="advantages")
    h2.advantages__title Наши преимущества
    .advantages__wrap
      .advantages__item.advantage(v-for="advantage in advantages" :key="advantage.id")
        .advantage__img(v-if="!advantage.value.iconError")
          img(:src="advantage.value.icon" alt="" style="max-width: 75px")
        .advantage__text
          h3.advantage__title {{ advantage.value.title }}
          p.advantage__description {{ advantage.value.description }}

  //- Projects
  section.projects(v-if="projects")
    h2.projects__title Проекты
    .projects__wrap
      .projects__item.project(v-for="project in projects" :key="project.id")
        NuxtLink(:to="`/projects/${project.slug}`").project__link
          .project__img(v-if="project.photos")
            img(:src="`#${baseUrl}${PROJECT_PHOTOS_URL}${project.photos[0].name}`" alt="" style="max-width: 100%")
          h3.project__title {{ project.title }}
          p.project__description(v-if="project.short_description.blocks") {{ project.short_description.blocks[0].data.text }}
          hr
          p.project__works
            span Тип работы:
            | {{ project.works }}
          hr
          p.project__customer
            span Заказчик:
            | {{ project.customer }}

</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  advantages as rawAdvantages,
  projects,
  slides as rawSlides,
} from "../mockies";
import type { AdvantageValue, SlideValue } from "@/types";

const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:3000";
const PROJECT_URL = "/projects/";
const PROJECT_PHOTOS_URL = "/files/projects/";
const advantages = rawAdvantages.map((advantage) => ({
  ...advantage,
  value: JSON.parse(advantage.value) as AdvantageValue,
}));
const slides = rawSlides.map((slide) => ({
  ...slide,
  value: JSON.parse(slide.value) as SlideValue,
}));
</script>
