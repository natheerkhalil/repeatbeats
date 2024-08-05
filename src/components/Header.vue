<!-- THIS COMPONENT IS NOT IN USE 

<template>
    <div style="border-bottom: 1px solid var(--grey-3); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" class="__b _flex _ai-ce _fd-ro _jc-be __padsm">
        <div @click="goHome()" class="__po _flex _cc _fd-ro">
            <img style="width: 50px; height: 50px; object-fit: cover" src="/icon.png" alt="Xylophone Logo"> &nbsp;
            &nbsp;
            <p class="_sm-hide __tmd">xylophone</p> &nbsp;
        </div>
        <div class="_flex _cc">
            <svg id="sidebarOpen" @click="toggleSidebar()" class="__po" clip-rule="evenodd" fill-rule="evenodd"
                stroke-linejoin="round" stroke-miterlimit="2" width="45" height="45" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="m15 17.75c0-.414-.336-.75-.75-.75h-11.5c-.414 0-.75.336-.75.75s.336.75.75.75h11.5c.414 0 .75-.336.75-.75zm7-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-4c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z"
                    fill-rule="nonzero" />
            </svg>
        </div>
    </div>
</template>

<script>
import { uauth } from "@/utils/auth";

export default {
    data() {
        return {
            isAuthenticated: uauth.isAuthenticated()
        }
    },

    methods: {
        toggleSidebar() {
            this.$emit('toggle-sidebar');
        },

        goHome() {
            this.$router.push({ name: 'home' });
        }
    }
}
</script>-->