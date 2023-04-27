<template>
  <the-header></the-header>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: {TheHeader}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  font-family: sans-serif;
  height: calc(100vh - 50px);
  position: relative;
  padding: 20px 40px;
}

*::-webkit-scrollbar {
  width: 12px;
  height: 8px;
}

*::-webkit-scrollbar-track {
  background: none;
  border: 1px solid rgba(199, 199, 199, 0.58);
}

*::-webkit-scrollbar-thumb {
  background-color: rgba(199, 199, 199, 0.25);
  border: 1px solid rgba(79, 72, 72, 0.39);
}

</style>
