<template>
  <v-app id="app">
    <app-bar></app-bar>
    <main-content></main-content>
    <footer-section></footer-section>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar.vue";
import MainContent from "./components/MainContent.vue";
import FooterSection from "./components/FooterSection.vue";
export default {
  name: "App",

  components: {
    AppBar,
    MainContent,
    FooterSection,
  },
};
</script>