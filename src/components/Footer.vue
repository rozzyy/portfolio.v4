<template>
    <div
        class="pt-18 pb-4 px-4 flex flex-col md:flex-row gap-4"
        v-motion
        :initial="{ opacity: 0, y: -50 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :delay="200"
        :duration="1000">
        <div class="w-full md:w-3/5 text-center md:text-start">
            &#169; {{ dayjs().format('YYYY') }} / Rozzy Rahmanda / Shoftyah Tech
        </div>
        <div class="flex justify-center md:justify-end text-3xl gap-6 w-full">
            <a href="https://github.com/rozzyy" target="_blank">
                <i class="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/rozzy-rahmanda/" target="_blank">
                <i class="bx bxl-linkedin"></i>
            </a>
            <a href="mailto:rozzy.rahmanda.official@gmail.com">
                <i class="bx bxl-google"></i>
            </a>
        </div>
    </div>
</template>

<script setup>
    import dayjs from 'dayjs';
</script>
