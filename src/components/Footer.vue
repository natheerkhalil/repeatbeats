<template>
    <div style="margin-top: 10px;" class="__b _flex __bg-grey-4">
        <div class="__b _fw-wr __w _ai-ce __mauto _flex __padxs">
            <p class="__txt-grey-10">&copy; RepeatBeats {{ thisYear }}</p> &nbsp; &nbsp;
            <router-link class="__txt-grey-10 __hv __ht-warn-8" to="/terms">Terms & Conditions</router-link> &nbsp; &nbsp;
            <router-link class="__txt-grey-10 __hv __ht-warn-8" to="/privacy">Privacy Policy</router-link>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            thisYear: new Date().getFullYear()
        }
    }
}
</script>
