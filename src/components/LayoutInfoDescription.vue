<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header> {{ info.title }} </v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ info.description }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
<script>
export default {
  name: "LayoutInfoDescription",
  props: {
    info: Object,
  },
};
</script>
<style lang="css">
</style>