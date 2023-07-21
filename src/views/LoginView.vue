<template>
    <div id="Register">
        <div class="w-full p-6 flex justify-center items-center">
            <div class="w-full max-w xs">
                <div class="bg-black p-8 shadow rounded mb-6">
                    <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking</h1>
                    <div class="mb-4">
                        <TextInput
                            label="Email"
                            :labelColor="false"
                            placeholder="nicholas@gmail.com"
                            v-model:input="email"
                            inputType="text"
                            error="This is a text error"
                            
                        />
                        <TextInput
                            label="Password"
                            :labelColor="false"
                            placeholder="password111"
                            v-model:input="password"
                            inputType="text"
                            error="This is a text error"
                        />
                    </div>
                    <button type="submit" class="block w-full bg-green-500 text-white rounded-sm py-3 text-sm tracking-wide">
                        Login
                    </button>
                    <p class="text-center text-md text-gray-900">
                        Don't have account yet?
                        <router-link to="register" class="text-blue-500 no-underline hover:underline">
                            Register
                        </router-link>
                    </p>
                </div>
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script setup>
    import {ref} from 'vue'
    import TextInput from '../components/global/TextInput.vue'

    let email = ref(null)
    let password = ref(null)
</script>