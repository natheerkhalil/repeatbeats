<template>
    <!-- HEADER -->
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);"
        class="__b __bg-grey-2 _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome" class="__po _flex _cc _fd-ro">
            <img style="width: 35px;" src="/icon.png" alt="Logo"> &nbsp;
            &nbsp;
            <p class="logo-text _sm-hide __tmd __txt-grey-10">RepeatBeats</p> &nbsp;
        </div>
        <div v-if="!isAuthenticated" class="_flex _cc">

            <div style="font-size: 22.5px;" class="__txt-grey-10 _fd-ro _ai-ce">
                <router-link class="__hovun __hovun-grad __nun __txt-grey-10" to="/login">Login</router-link>
                <span class="_sm-hide">&nbsp; // &nbsp;</span>
                <router-link class="_sm-hide __hovun __hovun-grad __nun __txt-grey-10"
                    to="/register">Register</router-link>
            </div>
            
        </div>
    </div>
    <!-- HEADER END -->

    <br>

    <div class="__b _flex _cc _fd-co">
        <h1 class="__txl __b __tal">404 - Page Not Found</h1>
        <br>
        <div class="__12 __w _flex _cc">
            <svg width="375" height="375" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m12.002 21.534c5.518 0 9.998-4.48 9.998-9.998s-4.48-9.997-9.998-9.997c-5.517 0-9.997 4.479-9.997 9.997s4.48 9.998 9.997 9.998zm0-1.5c-4.69 0-8.497-3.808-8.497-8.498s3.807-8.497 8.497-8.497 8.498 3.807 8.498 8.497-3.808 8.498-8.498 8.498zm0-6.5c-.414 0-.75-.336-.75-.75v-5.5c0-.414.336-.75.75-.75s.75.336.75.75v5.5c0 .414-.336.75-.75.75zm-.002 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
                    fill-rule="nonzero" />
            </svg>
        </div>
        <br>
        <div class="__12 __w _flex _cc">
            <p class="__mauto __tmd __txt-grey-1 __po __padsm __padsm __un" @click="goHome">Go Home</p>
        </div>
    </div>
</template>

<script>
import { useAuthStore } from '@/stores/auth';

export default {
    data() {
        return {
            isAuthenticated: false,
        }
    },

    created() {
        this.isAuthenticated = this.useAuthStore().isAuthenticated;
    },

    methods: {
        useAuthStore: useAuthStore,
        goHome() {
            this.$router.push('/')
        }
    },
}
</script>