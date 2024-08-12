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
                <h1 class="__b __tal __tlg">Login</h1>
                <br>
                <hr class="__hr __b __bg-grey-8">
                <br>
                <form class="__b _flex __padsm _fd-co _cc" @submit.prevent="login">
                    <input type="text" v-model="formData.username" placeholder="Username">
                    <br>
                    <input type="password" v-model="formData.password" placeholder="Password">
                    <br>
                    <vue-turnstile :siteKey="sitekey" v-model="token" />
                    <br>
                    <router-link class="__b __tal __tsx __tri __po" to="/register">Don't have an account? Create
                        one</router-link>
                    <br>
                    <router-link class="__b __tal __tsx __tri __po" to="/forgot-password">Forgot password?</router-link>
                    <br>
                    <input v-if="!loading" type="submit" value="Login">
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
    background: whitesmoke;
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
            formData: {
                username: '',
                password: ''
            },
            loading: false,

            // TURNSTILE CAPTCHA
            sitekey: '',
            token: '',
            eKey: '',

            captchaVerified: false
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


        // CAPTCHA HANDLING
        onVerify(token, eKey) {
            this.token = token;
            this.eKey = eKey;

            this.captchaVerified = true;
        },
        onExpire() {
            useResponseStore().updateResponse("Captcha expired", "info");

            this.token = "";
            this.eKey = "";
            this.captchaVerified = false;

            this.$refs.hcaptcha.reset();
        },
        onChallengeExpired() {
            useResponseStore().updateResponse("Challenge expired", "info");

            this.token = "";
            this.eKey = "";
            this.captchaVerified = false;

            this.$refs.hcaptcha.reset();
        },
        onError(err) {
            useResponseStore().updateResponse("Failed to verify captcha", "err");

            this.token = "";
            this.eKey = "";
            this.captchaVerified = false;

            this.$refs.hcaptcha.reset();
        },


        login() {
            if (this.formData.username.trim() && this.formData.password && this.captchaVerified) {
                this.loading = true;

                uauth.login({ username: this.formData.username, password: this.formData.password, token: this.token }).then(res => {
                    if (localStorage.getItem("auth_token")) {
                        useResponseStore().updateResponse("Logged in successfully. Redirecting...", "succ");
                        setTimeout(() => {
                            window.location.href = "/";
                        }, 2000);
                    } else {
                        let status = res.msg.response.status;

                        if (status === 401) {
                            useResponseStore().updateResponse("Invalid credentials", "err");
                        } else if (status == 422) {
                            useResponseStore().updateResponse("Failed to verify captcha", "err");
                        } else {
                            useResponseStore().updateResponse("An error occurred", "err");
                        }

                        this.$refs.hcaptcha.reset();

                        this.token = '';
                        this.eKey = '';

                        this.captchaVerified = false;

                        this.loading = false;
                    }
                });
            } else if (!this.captchaVerified) {
                useResponseStore().updateResponse("Please verify the captcha", "warn");
            } else if (!this.formData.username.trim()) {
                useResponseStore().updateResponse("Please enter a username", "warn");
            } else if (!this.formData.password) {
                useResponseStore().updateResponse("Please enter a password", "warn");
            }
        }
    }
}
</script>