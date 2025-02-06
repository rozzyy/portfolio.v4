<template>
  <div class="fixed w-full z-30" v-motion :initial="{ y: -100 }" :enter="{ y: 0 }" :delay="300" :duration="1000">
    <div class="flex p-4 bg-white/0 backdrop-blur-lg">
      <div class="w-1/6 my-auto font-mono hidden md:block">Asia/Medan</div>
      <div class="flex flex-1 justify-center bg-white/0 backdrop-blur-md">
        <div class="flex gap-3 border border-gray-600 p-1 rounded-2xl">
          <a href="javascript:void(0)" :class="{ 'nav-active': route.name === 'Home', 'nav-hover': route.name !== 'Home' }" @click="router.push({ name: 'Home' })">
            <i class="bx bx-home-alt-2 my-auto text-3xl md:text-sm"></i>
            <span class="text-sm my-auto hidden md:block">
              Home
            </span>
          </a>
          <a href="javascript:void(0)" :class="{ 'nav-active': route.name === 'About', 'nav-hover': route.name !== 'About' }" @click="router.push({ name: 'About' })">
            <i class="bx bx-user my-auto text-3xl md:text-sm"></i>
            <span class="text-sm my-auto hidden md:block">About</span>
          </a>
          <a href="javascript:void(0)" :class="{ 'nav-active': route.name === 'Works', 'nav-hover': route.name !== 'Works' }" @click="router.push({ name: 'Works' })">
            <i class="bx bx-border-all my-auto text-3xl md:text-sm"></i>
            <span class="text-sm my-auto hidden md:block">Works</span>
          </a>
          <!-- <a href="javascript:void(0)" :class="{ 'nav-active': route.name === 'Skills', 'nav-hover': route.name !== 'Skills' }" @click="router.push({ name: 'Skills' })">
            <i class="bx bx-cog my-auto text-3xl md:text-sm"></i>
            <span class="text-sm my-auto hidden md:block">Skills</span>
          </a> -->
          <a href="javascript:void(0)" :class="{ 'nav-active': route.name === 'Contact', 'nav-hover': route.name !== 'Contact' }" @click="router.push({ name: 'Contact' })">
            <i class="bx bx-phone-call my-auto text-3xl md:text-sm"></i>
            <span class="text-sm my-auto hidden md:block">Contact</span>
          </a>
        </div>
      </div>
      <div class="w-1/6 my-auto text-end font-mono hidden md:block">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<script setup>
import dayjs from 'dayjs';
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const time = ref(null)
const router = useRouter()
const route = useRoute()

function clock () {
  setInterval(() => {
    time.value = dayjs().format('HH:mm:ss')
  }, 1000)
}

onMounted(() => {
  clock()
})
</script>