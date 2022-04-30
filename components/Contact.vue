<template>
   <section class="mt-44">
            <div class="text-center text-3xl sm:text-5xl title" ref="contact" id="contact">
               Wanna connect with me ?
            </div>
            <div class="flex mt-8 px-4 sm:px-20 xl:px-36 lg:flex-row flex-col" >
                <div class="basis-1/3">
                    <input class="w-full p-2 rounded text-black placeholder-black" type="text" placeholder="Enter your name ..." />
                </div>
                <div class="w-48  h-8 lg:h-0">

                </div>
                <div class="basis-2/3">
                    <input class="w-full p-2 rounded text-black placeholder-black" type="text" placeholder="Enter your email ..." />

                </div>
            </div>
            <div class="px-4 sm:px-20 xl:px-36 mt-8">
                <textarea class="w-full p-2 rounded text-black placeholder-black" type="text" placeholder="Enter your message ..." > </textarea>
                <div class="flex justify-center lg:justify-end">
                    <button class="bg-secondary text-primary px-4 py-2 rounded-md mt-4 font-semibold"> SUBMIT MESSAGE </button>
                </div>

            </div>


            <div class="text-center mt-8 text-2xl title">
                    OR
            </div>
            <div class="mt-4 text-center text-3xl underline cursor-pointer">
                Find me on upwork
            </div>
            
    </section>
</template>

<script>
export default {
    name: 'Contact'
}
</script>

<style>

</style>