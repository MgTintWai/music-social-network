<template>
    <label for="" class="block uppercase tracking-wide text-gray-900 text-xs font-bold mb-2">
        {{ label }}
    </label>
    <textarea class="apperance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
        cols="30" 
        rows="10"
        v-model="descriptionComputed"
        :placeholder="placeholder"
     >

    </textarea>
    <span v-if="error" class="text-red-500">
        {{ error }}
    </span>
</template>

<script setup>
    import {defineProps, toRefs , defineEmits , computed} from 'vue'
    
    const props = defineProps({label: String, description: String, placeholder: {type: String, default: ''}, error:String})
    const {label,description,placeholder,error} = toRefs(props)

    let emit =  defineEmits('update:description')

    const descriptionComputed = computed({
        get: ()=> description.value,
        set: (val) => emit('update:input', val)
    })
</script>