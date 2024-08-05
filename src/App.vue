<template>
  <div style="flex: 1;" class="_flex _fd-co">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <ResponseMsg></ResponseMsg>
  </div>
  <Footer></Footer>
</template>

<script>
import { uauth } from "@/utils/auth";

import ResponseMsg from "@/components/ResponseMsg.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    ResponseMsg,
    Footer
  }
}
</script>