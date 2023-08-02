<template>
    <div id="AddYoutubeVideo" class="container mx-auto max-w-4xl pt-20 px-6">
        <div class="text-gray-900 text-xl">Edit Profile</div>
        <div class="bg-green-500 w-full h-1"></div>
        <TextInput
            class="mb-6"
            label="Title"
            placeholder="Cool New Video"
            v-model:input="title"
            inputType="text"
            error="This is a test error"
        />
        <TextInput
            class="mb-6"
            label="Video URL"
            placeholder="2VnYXKwneUQ"
            v-model:input="videoCode"
            inputType="text"
            error="This is a test error"
        />
        <SubmitFormButton
            btnText="Add Video"
        />
    </div>
</template>
<script setup>
import TextInput from '@/components/global/TextInput.vue';
import SubmitFormButton from '@/components/global/SubmitFormButton.vue';
</script>