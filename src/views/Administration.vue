<template>
  <div>
    <h2>hello</h2>
    <app-bar></app-bar>
    <main-content></main-content>
    <administration-footer></administration-footer>
  </div>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import MainContent from "../components/MainContent.vue";
import AdministrationFooter from '../components/AdministrationFooter.vue';
export default {
  name: "Administration",
  components: {
    AppBar,
    MainContent,
    AdministrationFooter,
  },
  data() {
    return {
      drawer: null,
    };
  },
};
</script>