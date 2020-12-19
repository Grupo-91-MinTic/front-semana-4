<template>
  <div>
    <home></home>
    <footer-section></footer-section>
  </div>
</template>
<script>
import FooterSection from '../components/FooterSection.vue';
import Home from "../components/Home.vue";
export default {
  name: "Home",
  components: {
    Home,
    FooterSection
  },
};
</script>