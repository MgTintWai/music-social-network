<template>
    <div id="EditPost" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Edit Post</div>
        <div class="bg-green-500 w-full h-1"></div>

        <CropperModal
            v-if="showModal"
            :minAspectRatioProp= {width:16,height:9}
            :maxAspectRatioProp= {width:16,height:9}
            @croppedImageData="setCroppedImageData"
            @showModal="showModal = false"
        />
        {{ image }}
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput
                    label="Title"
                    placeholder="Awesome Concert"
                    v-model:input="title"
                    inputType="text"
                    error="This is a test error"
                    />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextInput
                    label="Location"
                    placeholder="location"
                    v-model:input="location"
                    inputType="text"
                    error="This is a test error"
                    />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <DisplayCropperButton
                    label="Post Image"
                    btnText="Update Post Image"
                    @showModal="showModal = true"
                />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <CroppedImage
                    label="Cropped Image"
                    :image="image"
                />
            </div>
        </div>
        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextArea
                    label="Description"
                    placeholder="Please enter some information here!!!"
                    v-model:input="description"
                    error="This is a test error"
                />
            </div>
        </div>
        <div class="flex flex-wrap mt-8 mb-6">
            <div class="w-full px-3">
                <SubmitFormButton
                    btnText="Update Post"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import TextInput from '@/components/global/TextInput.vue';
    import DisplayCropperButton from '@/components/global/DisplayCropperButton.vue';
    import TextArea from '@/components/global/TextArea.vue';
    import SubmitFormButton from '@/components/global/SubmitFormButton.vue';
    import CropperModal from '@/components/global/CropperModal.vue';
    import CroppedImage from '@/components/global/CroppedImage.vue';

    let showModal = ref(false)
    let location = ref(null)
    let description = ref(null)
    // let imageData = null
    let image = ref(null)

    const setCroppedImageData = (data) => {
        // imageData = data
        image.value = data.imageUrl
    }

</script>