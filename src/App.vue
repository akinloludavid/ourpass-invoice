<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
import { makeServer } from "./server";
if (process.env.NODE_ENV === "development") {
  makeServer();
}

export default defineComponent({
  name: "App",
});
</script>
