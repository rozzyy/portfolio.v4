<template>
  <div class="pt-18 pb-4 px-4 flex flex-col md:flex-row gap-4" v-motion :initial="{ opacity: 0, y: -50 }" :visible-once="{ opacity:1, y: 0 }" :delay="200" :duration="1000">
    <div class="w-full md:w-3/5 text-center md:text-start">
      &#169; {{ dayjs().format('YYYY') }} / Rozzy Rahmanda / Shoftyah Tech
    </div>
    <div class="flex justify-center md:justify-end text-3xl gap-6 w-full">
      <i class="bx bxl-github"></i>
      <i class="bx bxl-linkedin"></i>
      <i class="bx bxl-google"></i>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';
</script>