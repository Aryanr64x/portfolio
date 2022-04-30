<template>
  <section class="min-h-screen flex items-center px-4 sm:px-20 xl:px-36">
    <div class="xl:basis-2/3">
      <div
        class="text-3xl sm:text-5xl xl:text-left text-center bigtext animate__animated     animate__flipInX"

      >
        Hi, I design and develop websites that
        <span class="text-secondary"> ACTUALLY WORK! </span>
      </div>
      <div
        class="text-xl mt-2 xl:text-left text-center font-light animate__fadeInDown animate__animated "
       
      >
        I help small businesses reach there true potential by designing and
        developing custom websites for them that are not only professional but
        also cost effective
      </div>
      <div
        class="mt-8 flex xl:justify-start justify-center animate__fadeInDown animate__animated"
       
      >
        <a
          class="
            bg-secondary
            text-primary
            px-4
            py-2
            rounded-md
            mr-4
            font-semibold
          "
         href="#contact"
        >
          HIRE ME
        </a>
        <a
          class="
            bg-primary
            text-white
            px-4
            py-2
            rounded-md
            border-secondary border-2
            hover:bg-secondary hover:text-primary
            duration-500
            transition-all
          "
          href="#services"
        >
          VIEW SERVICES
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  methods: {
    
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Expletus+Sans&display=swap');

.bigtext{
      font-family: 'Expletus Sans', cursive;
}
</style>