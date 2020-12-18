<template>
  <v-app id="app">
    <navigator-bar></navigator-bar>
    <app-bar></app-bar>
    <main-content></main-content>
    <footer-section></footer-section>
  </v-app>
</template>

<script>
import NavigatorBar from "./components/NavigatorBar.vue";
import AppBar from "./components/AppBar.vue";
import MainContent from "./components/MainContent.vue";
import FooterSection from "./components/FooterSection.vue";
export default {
  name: "App",

  components: {
    NavigatorBar,
    AppBar,
    MainContent,
    FooterSection,
  },

  data() {
    return {
      drawer: null,
    };
  },
};
</script>