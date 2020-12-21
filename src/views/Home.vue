<template>
  <div>
    <home-navigator></home-navigator>
    <layout-home></layout-home>
  </div>
</template>
<script>
import HomeNavigator from "../components/HomeNavigator.vue";
import LayoutHome from "../components/LayoutHome.vue";
export default {
  name: "Home",
  components: { HomeNavigator, LayoutHome },
  methods: {
    sendMain() {
      this.$router.push({path: "principal"});
      console.log("Home");
    },
  },
  created() {
    this.sendMain();
  },
};
</script>