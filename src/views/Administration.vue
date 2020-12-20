<template>
  <div>
    <app-bar></app-bar>
    <main-content></main-content>
  </div>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import MainContent from "../components/MainContent.vue";
export default {
  name: "Administration",
  components: {
    AppBar,
    MainContent,
  },
  data() {
    return {
      drawer: null,
    };
  },
};
</script>