<template>
  <div>
    <home-navigator></home-navigator>
    <layout-home></layout-home>
    <!-- <layout-banner></layout-banner> -->
  </div>
</template>
<script>
import HomeNavigator from "../components/HomeNavigator.vue";
import LayoutHome from '../components/LayoutHome.vue';
// import LayoutBanner from '../components/LayoutBanner.vue';
export default {
  name: "Home",
  components: { HomeNavigator, LayoutHome, /* LayoutBanner */ },
};
</script>