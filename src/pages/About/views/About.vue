<template>
  <div class="pt-24 px-4">
    <div class="fixed w-[16%] h-full hidden md:block">
      <div class="flex items-center h-full"> 
        <div class="flex flex-col gap-6 text-lg">
          <a href="#intro" class="hover:transform hover:translate-x-2 transition-all duration-300 ease-in-out" v-motion-slide-left :delay="100" :duration="1000">
            <span>1. </span>
            <span>Introduction</span>
          </a>
          <a href="#experiences" class="hover:transform hover:translate-x-2 transition-all duration-300 ease-in-out" v-motion-slide-left :delay="200" :duration="1000">
            2. Work Experience
          </a>
          <a href="#studies" class="hover:transform hover:translate-x-2 transition-all duration-300 ease-in-out"  v-motion-slide-left :delay="300" :duration="1000">3. Studies</a>
          <a href="#skills" class="hover:transform hover:translate-x-2 transition-all duration-300 ease-in-out"  v-motion-slide-left :delay="400" :duration="1000">4. Technical Skills</a>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="px-0 lg:w-[70%]">
        <div class="md:fixed md:top-24 md:w-[20%]">
          <div class="w-full flex justify-center rounded-full">
            <div class="bg-teal-400/70 rounded-full w-[210px] h-[210px] flex justify-center items-center relative overflow-hidden">
              <img src="../../../assets/face-logo-3.png" width="200px" height="200px" class="rounded-full" alt="" v-motion-roll-top :duration="1000">
            </div>
          </div>
          <div class="my-8 flex gap-2 justify-center" v-motion-fade :duration="3000">
            <div class="text-center">
              <i class="bx bx-globe text-3xl text-teal-400"></i>
            </div>
            <div class="my-auto text-center">
              Asia/Medan
            </div>
          </div>
          <div class="flex gap-6 justify-center">
            <div class="border border-gray-600 px-4 rounded-full bg-gray-600/30" v-motion-slide-left :duration="1000">English</div>
            <div class="border border-gray-600 px-4 rounded-full bg-gray-600/30" v-motion-slide-right :duration="1000">Bahasa</div>
          </div>
        </div>
        <div class="p-5 my-20 md:my-0 md:pl-80" v-motion-slide-left :duration="1000" :delay="200">
          <a href="javascript:void(0)" class="flex gap-2 bg-teal-400/20 border border-teal-400 w-full md:w-46 py-2 rounded-full hover:bg-teal-400/40 group" id="intro" @click="router.push({ name: 'Contact' })">
            <div class="pl-4 flex items-center">
              <i class="bx bx-mobile-vibration text-xl group-hover:animate-bounce"></i>
            </div>
            <div class="flex-1 text-center">
              Get In Touch
            </div>
            <div class="flex justify-end pr-2">
              <div class="border-[0.5px] border-white rounded-full w-6 h-6 flex justify-center items-center bg-gray-900">
                <i class="bx bx-right-arrow-alt"></i>
              </div>
            </div>
          </a>
          <div class="text-6xl mt-6 font-bold md:text-start text-center">
            Rozzy Rahmanda
          </div>
          <div class="text-4xl text-gray-600 my-2 md:text-start text-center">
            Fullstack Web Developer
          </div>
          <div class="flex gap-4 my-4 md:my-2 justify-center md:justify-start">
            <a href="https://github.com/rozzyy" target="_blank" class="border border-gray-600 bg-gray-800/50 px-2 rounded-lg flex items-center gap-2 hover:bg-gray-800">
              <i class="bx bxl-github"></i>
              <span>
                Github
              </span>
            </a>
            <a href="https://www.linkedin.com/in/rozzy-rahmanda/" target="_blank" class="border border-gray-600 bg-gray-800/50 px-2 rounded-lg flex items-center gap-2 hover:bg-gray-800">
              <i class="bx bxl-linkedin"></i>
              <span>
                Linkedin
              </span>
            </a>
            <a href="mailto:rozzy.rahmanda.official@gmail.com" class="border border-gray-600 bg-gray-800/50 px-2 rounded-lg flex items-center gap-2 hover:bg-gray-800">
              <i class="bx bx-envelope"></i>
              <span>
                Email
              </span>
            </a>
          </div>
          <div class="my-12 text-justify">
            Rozzy is a Medan-based fullstack web developer with a passion for transforming complex challenges into simple, elegant digital solutions. His expertise spans both front-end and back-end development, crafting seamless user interfaces, interactive web experiences, and robust server-side functionalities. With a strong focus on the convergence of design and technology, Rozzy thrives on building dynamic, user-centric web applications that are as visually appealing as they are technically sound.
          </div>
          <div>
            <div class="text-4xl font-bold text-center md:text-start" id="experiences">
              Work Experiences
            </div>
            <div class="mt-12 mb-6">
              <div class="md:flex flex-none">
                <div class="md:w-3/5">
                  <div class="font-bold text-lg">PT. MASINFO TEKNOLOGI INDONESIA</div>
                  <div class="text-teal-400">Fullstack Web Developer</div>
                </div>
                <div class="md:w-2/5 text-start md:text-end text-gray-600">
                  2021 - present
                </div>
              </div>
              <div class="pl-4">
                <ul class="list-disc list-outside">
                  <li class="my-4 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, iusto reiciendis, ex consectetur distinctio corrupti architecto animi incidunt error, illo odit ipsa! Fugiat, ipsam sit. Quasi architecto minus ex tempore.</li>
                  <li class="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam eius ad dignissimos pariatur commodi praesentium? A ipsum quos ratione nobis! Porro nulla dolor eius consectetur tempore eaque nam aperiam.
                  </li>
                </ul>
              </div>
            </div>
            <div class="mt-12 mb-6">
              <div class="md:flex flex-none">
                <div class="md:w-3/5">
                  <div class="font-bold text-lg">SELF EMPLOYEE</div>
                  <div class="text-teal-400">Freelancer Fullstack Web Developer</div>
                </div>
                <div class="md:w-2/5 text-start md:text-end text-gray-600">
                  2019 - 2020
                </div>
              </div>
              <div class="pl-4">
                <ul class="list-disc list-outside">
                  <li class="my-4 text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, iusto reiciendis, ex consectetur distinctio corrupti architecto animi incidunt error, illo odit ipsa! Fugiat, ipsam sit. Quasi architecto minus ex tempore.</li>
                  <li class="text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam eius ad dignissimos pariatur commodi praesentium? A ipsum quos ratione nobis! Porro nulla dolor eius consectetur tempore eaque nam aperiam.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="my-18">
            <div class="text-4xl font-bold text-center md:text-start" id="studies">
              Studies
            </div>
            <div class="mt-12 mb-6 flex flex-col gap-10">
              <div>
                <div class="font-bold text-xl">State Senior High School 01 of Tebing Tinggi City</div>
                <div class="text-gray-600">
                  Learning here is not just about knowledge, but also about building character and a bright future.
                </div>
              </div>
              <div class="">
                <div class="font-bold text-xl">Udemy - VUE JS 2.0 - Mastering Web Apps</div>
                <div class="text-gray-600">
                  Create the VueJS 2.0 apps you always wanted. Build 5 apps, learn development secrets, VueRouter, Vuex, & more!
                </div>
              </div>
              <div>
                <div class="font-bold text-xl">Online Academy Program Digital Talent Scholarship Year 2019 by Ministry of Communication and Information Technology of Indonesia</div>
                <div class="text-gray-600">
                  Programming essential in Python.
                </div>
              </div>
              <div>
                <div class="font-bold text-xl">Self Study</div>
                <div class="text-gray-600">
                  Self-study is a journey of continuous growth, where every step forward is a victory over your limits.
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="text-4xl font-bold text-center md:text-start" id="skills">
              Technical Skills
            </div>
            <div class="my-4 flex flex-wrap gap-4 justify-center md:justify-start">
              <div class="border border-gray-600 bg-teal-600/30 p-3 flex justify-center items-center rounded-full" v-for="icon in icon_data.data" :key="icon">
                <i :class="`ci ci-${icon} ci-2x`"></i>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import Footer from '../../../components/Footer.vue';
import icon_data from '../../../data/skills.json'
import { useRouter } from 'vue-router';
const router = useRouter()
</script>