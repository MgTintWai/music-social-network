<template>
    <div id="Register">
        <div class="w-full p-6 flex justify-center items-center">
            <div class="w-full max-w xs">
                <div class="bg-black p-8 shadow rounded mb-6">
                    <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking</h1>
                    <div class="mb-4">
                        <TextInput
                            label="First Name"
                            :labelColor="false"
                            placeholder="John"
                            v-model:input="firstName"
                            inputType="text"
                            error="This is a text error"
                        />
                        <TextInput
                            label="Last Name"
                            :labelColor="false"
                            placeholder="John"
                            v-model:input="lastName"
                            inputType="text"
                            error="This is a text error"
                        />
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
                        <TextInput
                            label="Confirm Password"
                            :labelColor="false"
                            placeholder="password111"
                            v-model:input="confirmPassword"
                            inputType="text"
                        />
                    </div>
                    <button type="submit" class="block w-full bg-green-500 text-white rounded-sm py-3 text-sm tracking-wide">
                        Register
                    </button>
                    <p class="text-center text-md text-white mt-3">
                        Already have account?
                        <router-link to="/login" class="text-blue-500 no-underline hover:underline">
                            Login
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

    let firstName = ref(null)
    let lastName = ref(null)
    let email = ref(null)
    let password = ref(null)
    let confirmPassword = ref(null)
</script>