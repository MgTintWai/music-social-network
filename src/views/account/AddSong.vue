<template>
    <div id="AddSong" class="container mx-auto max-w-4xl pt-20 px-6">
        <div class="text-gray-900 text-xl">Edit Profile</div>
        <div class="bg-green-500 w-full h-1"></div>
        <TextInput
            class="mb-6"
            label="Title"
            placeholder="Cool New Song"
            v-model:input="title"
            inputType="text"
            error="This is a test error"
        />
        <div class="w-full">
            <label for="" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">Select Image</label>
            <input type="file" id="image" ref="fileInput" @change="getUploadedImage" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none">
        </div>
        <SubmitFormButton
            btnText="Add Song"
        />
    </div>
</template>
<script setup>
import TextInput from '@/components/global/TextInput.vue';
import SubmitFormButton from '@/components/global/SubmitFormButton.vue';
</script>