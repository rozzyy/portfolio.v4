<template>
  <div class="h-screen flex flex-col">
    <div class="pt-48 flex flex-1 justify-center">
      <div class="w-[90%] md:w-[50%]">
        <div class="text-6xl font-bold" v-motion-slide-left :delay="100" :duration="1000">
          Get in touch
        </div>
        <div class="my-6 text-2xl font-thin" v-motion-slide-left :delay="200" :duration="1000">
          Do you have an exciting project? Let's talk!
        </div>
        <div class="text-lg" v-motion-slide-left :delay="300" :duration="1000">
          You can reach me out anytime at <a href="mailto:rozzy.rahmanda.official@gmail.com" class="underline decoration-teal-400 decoration-2 font-semibold">rozzy.rahmanda.official@gmail.com</a>
        </div>
        <div class="text-lg" v-motion-slide-left :delay="400" :duration="1000">
          As a backup option, you can <a href="https://ig.me/m/rozzyrahmanda" target="_blank" class="underline decoration-teal-400 decoration-2 font-semibold">DM me on Instagram</a>
        </div>
        <div class="my-5 text-lg" v-motion-slide-left :delay="500" :duration="1000">
          I usually respond right away on business days.
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Footer from '../../../components/Footer.vue';
</script>