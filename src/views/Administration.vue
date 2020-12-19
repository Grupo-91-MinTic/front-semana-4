<template>
  <div>
    <navigator-bar></navigator-bar>
    <app-bar></app-bar>
    <main-content></main-content>
    <administration-footer></administration-footer>
  </div>
</template>
<script>
import AppBar from "../components/AppBar.vue";
import MainContent from "../components/MainContent.vue";
import NavigatorBar from "../components/NavigatorBar.vue";
import AdministrationFooter from '../components/AdministrationFooter.vue';
export default {
  components: {
    AppBar,
    MainContent,
    NavigatorBar,
    AdministrationFooter,
  },
  data() {
    return {
      drawer: null,
    };
  },
};
</script>