<template>
  <div>
    <v-card dark class="mx-auto" color="info" max-width="500">
      <v-card-title>
        <v-icon large left> mdi-badge-account-horizontal </v-icon>
        <span class="title font-weight-light">Bienvenido {{ user.rol }}</span>
      </v-card-title>

      <v-card-text class="headline font-weight-bold">
        " {{ user.description }}. "
      </v-card-text>

      <v-card-actions>
        <v-list-item class="grow">
          <v-list-item-avatar color="grey darken-3">
            <v-img class="elevation-6" :alt="user.nombre" :src="user.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.nombre }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "AdministrationMainContent",
  data() {
    return {
      user: {},
    };
  },
  methods: {
    getUserDetails() {
      this.user = this.$store.state.user;
    },
  },
  created() {
    this.getUserDetails();
  },
};
</script>
<style lang="css">
</style>