<template>

  <main class="">
    <article class="row container-fluid mx-auto">
      <section class="col-12 col-lg-6 d-none d-lg-block">
        <!-- ImageZone -->
        <img :src="imgSrc" alt="">
      </section>
      <section class="col-12 col-lg-6">
        <!-- Right / Form -->
        <RouterView />
      </section>
    </article>
  </main>
</template>

<script setup>
import { computed } from 'vue';

const imgSrc = computed(() => 'https://media.vandalsports.com/master/5-2024/202459164425_1.jpg')
</script>

<style scoped>
main {
  min-height: 100vh;
}

img {
  height: 100vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
