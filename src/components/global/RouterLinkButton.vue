<template>
    <router-link :to="url" :class="[color ? 'hover:bg-' + color + '-500 border-' + color + '-500' : '']" class="float-right bg-transparent text-white-900 font-semibold hover:text-white py-2 px-4 border hover:border-transparent rounded hover:bg-green-500 border-green-500">
        {{ btnText }}
      </router-link>
</template>

<script setup>
    import {defineProps, toRefs} from 'vue'
    const props = defineProps({btnText: String , url: {type:String , default:''} , color: String})
    const {btnText,url,color} = toRefs(props)
</script>