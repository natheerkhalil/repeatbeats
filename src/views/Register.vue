<template>
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        class="__b __bg-grey-2 _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome" class="__po _flex _cc _fd-ro">
            <img style="width: 35px;" src="/icon.png" alt="Logo"> &nbsp;
            &nbsp;
            <p class="logo-text _sm-hide __tmd __txt-grey-10">RepeatBeats</p> &nbsp;
        </div>
        <div class="_flex _cc">

            <div style="font-size: 22.5px;" class="__txt-grey-10 _sm-hide _fd-ro _ai-ce">
                <router-link class="__hovun __hovun-grad __nun __txt-grey-10" to="/login">Login</router-link>
                &nbsp; // &nbsp;
                <router-link class="__hovun __hovun-grad __nun __txt-grey-10" to="/register">Register</router-link>
            </div>

            <div class="_hide _sm-show _flex">
                <svg fill="var(--grey_10)" @click="this.$router.push('/login')" class="__po"
                    xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24">
                    <path
                        d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z">
                    </path>
                </svg>
            </div>
        </div>
    </div>

    <br>


    <div class="__b _flex _fd-co _cc">
        <div style="min-height: 75vh; " class="__mauto __b _flex _fd-co _cc __13 __w">
            <div class="form-wrap">
                <h1 class="__b __tal __tlg">Register</h1>
                <br>
                <hr class="__hr __b __bg-grey-8">
                <br>
                <div v-if="errors.length > 0" v-html="errors"
                    class="__b _flex __padxs _cc __bg-err-7 __bod __bdxs __bo-err-2 __txt-err-2"></div>
                <br v-if="errors.length > 0">
                <form class="__b _flex __padsm _fd-co _cc" @submit.prevent="register">
                    <input @input="validateFormData" type="text" v-model="formData.username" placeholder="Username">
                    <br>
                    <input @input="validateFormData" type="email" v-model="formData.email" placeholder="Email">
                    <br>
                    <input @input="validateFormData" type="password" v-model="formData.password" placeholder="Password">
                    <br>
                    <vue-turnstile ref="captcha" :siteKey="sitekey" v-model="token" />
                    <br>
                    <router-link class="__b __tal __tsx __tri __po" to="/login">Already have an account? Log
                        in</router-link>
                    <br>
                    <input v-if="!loading" :disabled="!ready"
                        :style="!ready ? 'cursor: default; opacity: 0.7' : 'cursor: pointer; opacity: 1'" type="submit"
                        value="Register">
                    <div v-if="loading"
                        style="min-width: 50px; min-height: 50px; border-color: white; border-top-color: var(--succ_6); border-width: 5px;"
                        class="__loader-og"></div>
                </form>
            </div>
        </div>
    </div>
</template>

<style>
.form-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 2.5px;
    color: var(--grey_3);
    max-width: 100%;
    border: 1px solid var(--grey_7);
    background: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

div#app {
    background-image: url('/bg.webp');
    background-repeat: no-repeat;
    background-size: cover;
}

input {
    max-width: 100%;
    background: none;
    border: none;
    outline: none;
    padding: 7.5px;
    font-size: 1.5em;
    border-bottom: 1px solid var(--grey_7);
    color: var(--grey_3);
}

input::placeholder {
    color: var(--grey_3);
}

input[type="submit"] {
    padding: 7.5px;
    background: var(--succ_6);
    border: 1px solid var(--grey_10);
    font-size: 1.5em;
    cursor: pointer;
    width: 100%;
    transition: 0.1s;
    color: black;
}

input[type="submit"]:hover {
    background: var(--succ_5);
}
</style>

<script>

import { useResponseStore } from "@/stores/response";

import { uauth } from "@/utils/auth";

import { TURNSTILE_SITE_KEY } from "../../config";
import VueTurnstile from "vue-turnstile";

export default {
    data() {
        return {
            ready: false,

            errors: "",

            formData: {
                username: '',
                email: '',
                password: ''
            },
            loading: false,

            // TURNSTILE CAPTCHA
            sitekey: '',
            token: '',
        }
    },

    components: {
        VueTurnstile
    },

    created() {
        this.sitekey = TURNSTILE_SITE_KEY;
    },

    methods: {
        goHome() {
            window.location.href = "/";
        },


        register() {
            if (this.token) {
                this.loading = true;
                uauth.register({ username: this.formData.username, email: this.formData.email, password: this.formData.password, token: this.token }).then(res => {
                    if (localStorage.getItem("auth_token")) {
                        useResponseStore().updateResponse("Registered successfully. Redirecting...", "succ");
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 2000);
                    } else {
                        // reset captcha

                        this.token = "";
                        this.eKey = "";

                        this.$refs.hcaptcha.reset();

                        // get status code
                        let code = res.msg.response.status;

                        if (code === 409) {
                            useResponseStore().updateResponse("Username or email already exists", "err");

                            this.loading = false;

                            return false;
                        } else if (code === 422) {
                            useResponseStore().updateResponse("Failed to verify captcha", "err");

                            this.loading = false;

                            return false;
                        }

                        useResponseStore().updateResponse("Failed to register account. Please try again", "err");

                        this.loading = false;
                    }
                });
            } else {
                useResponseStore().updateResponse("Please complete the captcha", "err");
            }
        },

        validateFormData(data) {
            data = this.formData;

            const errors = [];

            // Validate username
            if (!data.username) {
                errors.push('Username is required.');
            } else if (typeof data.username !== 'string') {
                errors.push('Username must be a string.');
            } else if (data.username.length < 3) {
                errors.push('Username must be at least 3 characters long.');
            } else if (data.username.length > 18) {
                errors.push('Username must not exceed 18 characters.');
            }

            // Validate email
            if (!data.email) {
                errors.push('Email is required.');
            } else if (typeof data.email !== 'string') {
                errors.push('Email must be a string.');
            } else {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(data.email)) {
                    errors.push('Email must be a valid email address.');
                } else if (data.email.length > 255) {
                    errors.push('Email must not exceed 255 characters.');
                }
            }

            // Validate password
            if (!data.password) {
                errors.push('Password is required.');
            } else if (typeof data.password !== 'string') {
                errors.push('Password must be a string.');
            } else if (data.password.length < 8) {
                errors.push('Password must be at least 8 characters long.');
            }

            if (errors.length == 0) {
                this.errors = "";

                this.ready = true;
            } else {
                this.ready = false;

                let errorMessages = Object.values(errors).flat();

                let str = "";

                errorMessages.forEach(e => {
                    str += `${e} <br>`;
                });

                this.errors = str;
            }
        }
    },
}
</script>