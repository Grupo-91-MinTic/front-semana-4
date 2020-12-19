<template>
  <navigator-bar></navigator-bar>
  <app-bar></app-bar>
  <main-content></main-content>
  <footer-section></footer-section>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import MainContent from "../components/MainContent.vue";
import NavigatorBar from "../components/NavigatorBar.vue";
import FooterSection from "../components/FooterSection.vue";
export default {
  components: {
    AppBar,
    MainContent,
    NavigatorBar,
    FooterSection,
  },
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
<style lang="css">
</style>