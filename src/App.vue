<template>
  <div>
    <router-view> </router-view>
  </div>
</template>

<script>
import MainPage from "./views/MainPage.vue";

export default {
  name: "App",
  components: {
    MainPage,
  },
};
</script>

<style src="./css/tailwind.css"></style>