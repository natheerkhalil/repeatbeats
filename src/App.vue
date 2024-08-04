<template>
  <router-view v-slot="{ Component }">
      <component :is="Component" />
  </router-view>
  <ResponseMsg></ResponseMsg>
</template>

<script>
import { uauth } from "@/utils/auth";

import ResponseMsg from "@/components/ResponseMsg.vue";

export default {
  components: {
    ResponseMsg,
  }
}
</script>