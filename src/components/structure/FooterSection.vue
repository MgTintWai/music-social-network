<template>
    <div class="w-full bg-black text-gray-100">
        <div class="container mx-auto max-w-4xl h-full flex flex wrap justify-between items-start text-sm p-6 pt-8 pb-4">
            <div class="mb-4">
                <div class="mb-4">
                    Quick Links
                </div>
                <router-link to="/" class="block mb-2">Home</router-link>
            </div>
            <div class="mb-4">
                <div class="mb-4">
                    About Our Company
                </div>
                <p class="mb-4 leadin-normal">
                    123 Main Street <br>
                    London <br>
                    SW1 SW1
                </p>
                <p class="text-sm">07775 444 999</p>
            </div>
        </div>
        <div class="container mx-auto max-w-4xl h-full flex flex wrap justify-between items-center text-sm py-6">
            &copy;2022 MSN Company. All rights reserved.
            <div class="pt-4 md:p-0 text-center md:text-right text-xs">
                <div class="no-underline hover:underline">Privacy Policy</div>
                <div class="no-underline hover:underline ml-4">Terms & Conditions</div>
                <div class="no-underline hover:underline ml-4">Contact Us</div>
            </div>
        </div>
    </div>
</template>

<script setup>
    // import FullScreenModal from './FullScreenModal.vue'
</script>