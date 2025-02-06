<template>
  <div class="pt-48 flex justify-center">
    <div class="w-[90%] md:w-[65%]">
      <div class="text-3xl md:text-6xl w-full md:w-3/4 font-bold text-center md:text-start" v-motion :initial="{ opacity: 0, x: -200 }" :enter="{ opacity: 1, x: 0, scale: 1 }" :delay="200" :duration="1000">
        Fullstack web developer and learner
      </div>
      <div class="mt-10 text-xl text-gray-400 w-full md:w-3/4 font-thin text-center md:text-start" v-motion :initial="{ opacity: 0, x: 200 }" :enter="{ opacity: 1, x: 0, scale: 1 }" :delay="200" :duration="1000">
        I'm Rozzy, a Fullstack Web Developer and learner. By day, I build web solutions and by night, I explore new tech and personal projects.
      </div>
      <div class="flex justify-center md:flex-none md:justify-start" v-motion :initial="{opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0 }" :delay="250" :duration="1000">
        <a href="javascript:void(0)" @click="router.push({ name: 'About' })" class="group my-5 border border-gray-500 w-39 hover:w-44 p-1 rounded-full bg-gray-600/30 flex gap-2 hover:bg-gray-600/50 transition-all duration-300 ease-in-out">
          <div>
            <img src="../../../assets/face-logo.png" width="30px" alt="" class="border border-gray-600 bg-gray-600/20 rounded-full" />
          </div>
          <div class="my-auto flex-1">
            About me
          </div>
          <div class="flex items-center text-2xl">
            <i class="bx bx-right-arrow-alt"></i>
          </div>
        </a>
      </div>
      <div class="mt-32">
        <!-- <div class="relative overflow-hidden h-[300px] md:h-[600px]"> -->
          <div class="bg-gray-600/30 rounded-xl h-[300px] md:h-[600px]" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="100" :duration="1000"></div>
        <!-- </div> -->
        <div class="my-12 flex md:flex-row flex-col gap-8 text-center md:text-start">
          <div class="w-full md:w-2/5 text-3xl font-semibold" v-motion :initial="{ opacity: 0, x: -100 }" :visible-once="{ x: 0, opacity: 1 }" :delay="200" :duration="1000">
            Optimizing Employee Attendance with a Digital System
          </div>
          <div class="w-full md:w-3/5"  v-motion :initial="{ opacity: 0, x: 100 }" :visible-once="{ x: 0, opacity: 1 }" :delay="200" :duration="1000">
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
      <div class="mt-32">
        <!-- <div class="relative overflow-hidden h-[300px] md:h-[600px]"> -->
          <div class="bg-gray-600/30 rounded-xl h-[300px] md:h-[600px]" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="100" :duration="1000"></div>
        <!-- </div> -->
        <div class="my-12 flex md:flex-row flex-col gap-8 text-center md:text-start">
          <div class="w-full md:w-2/5 text-3xl font-semibold" v-motion :initial="{ opacity: 0, x: -100 }" :visible-once="{ x: 0, opacity: 1 }" :delay="200" :duration="1000">
            Optimizing Employee Attendance with a Digital System
          </div>
          <div class="w-full md:w-3/5"  v-motion :initial="{ opacity: 0, x: 100 }" :visible-once="{ x: 0, opacity: 1 }" :delay="200" :duration="1000">
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
      <div class="mt-32">
        <!-- <div class="relative overflow-hidden h-[300px] md:h-[600px]"> -->
          <div class="bg-gray-600/30 rounded-xl h-[300px] md:h-[600px]" v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="100" :duration="1000"></div>
        <!-- </div> -->
        <div class="my-12 flex md:flex-row flex-col gap-8 text-center md:text-start">
          <div class="w-full md:w-2/5 text-3xl font-semibold" v-motion :initial="{ opacity: 0, x: -100 }" :visible-once="{ x: 0, opacity: 1 }" :delay="200" :duration="1000">
            Optimizing Employee Attendance with a Digital System
          </div>
          <div class="w-full md:w-3/5"  v-motion :initial="{ opacity: 0, x: 100 }" :visible-once="{ x: 0, opacity: 1 }" :delay="200" :duration="1000">
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
      <div class="border border-gray-600 bg-gray-600/5 rounded-xl p-16 flex justify-center items-center" v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :delay="400" :duration="1000">
        <div class="text-center">
          <div class="text-xl md:text-4xl font-bold">
            GET IN TOUCH !
          </div>
          <div class="mt-4 mb-1 text-sm md:text-xl">
            You can reach me through the platforms below.
          </div>
          <div class="mb-4 text-sm md:text-xl">
            Feel free to contact me!
          </div>
          <div class="flex gap-6 justify-center text-6xl">
            <a href="#">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i class="bx bxl-whatsapp"></i>
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
import { useRouter } from 'vue-router';
const router = useRouter()
</script>