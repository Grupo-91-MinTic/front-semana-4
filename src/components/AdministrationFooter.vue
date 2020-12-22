<template>
  <div class="footer">
    <v-footer height="auto" padless>
      <v-layout justify-center>
        <v-flex text-xs-center>
          <v-card flat tile color="primary" class="white--text">
            <v-card-text class="white--text pt-0">
              Creado por equipo 91
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>
<script>
export default {
  name: "AdministrationFooter",
};
</script>
<style lang="css">
.footer {
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: fixed;
  margin-bottom: 0px;
}
</style>