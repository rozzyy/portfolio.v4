<template>
  <div class="flex justify-center">
    <div class="w-[90%] md:w-[65%]">
      <div class="mt-32" v-for="index in 3" v-motion >
        <div class="bg-gray-600/30 rounded-xl h-[300px] md:h-[600px]" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="100" :duration="500"></div>
        <div class="my-12 flex md:flex-row flex-col gap-8 text-center md:text-start">
          <div class="w-full md:w-2/5 text-3xl font-semibold" v-motion :initial="{ opacity: 0, x: -100 }" :visible-once="{ x: 0, opacity: 1 }" :delay="100" :duration="500">
            Optimizing Employee Attendance with a Digital System
          </div>
          <div class="w-full md:w-3/5" v-motion :initial="{ opacity: 0, x: 100 }" :visible-once="{ x: 0, opacity: 1 }" :delay="100" :duration="500">
            <div class="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio enim nesciunt vero. Ipsam esse ducimus est id assumenda molestiae, eos commodi explicabo, voluptatem expedita impedit error, dolore earum ipsa a!
            </div>
            <a href="#" class="group flex gap-2 text-teal-400 my-2">
              <div class="font-thin group-hover:underline">
                Read case study
              </div>
              <span class="flex items-center">
                <i class="bx bx-right-arrow-alt text-2xl"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Footer from '../../../components/Footer.vue';
</script>