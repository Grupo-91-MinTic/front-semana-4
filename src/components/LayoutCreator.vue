<template>
  <v-container>
    <h2>Creadores</h2>
    <v-row justify="space-around">
      <v-col
        style="display: inline-flex; margin: 1em"
        v-for="(creator, index) of creators"
        :key="index"
        cols="12"
        md="4"
      >
        <v-sheet class="pa-5" color="grey lighten-3">
          <div></div>
          <v-sheet :rounded="rounded" class="mx-auto">
            <layout-creator-card :member="creator"></layout-creator-card>
          </v-sheet>
          <div></div>
        </v-sheet>
      </v-col>
    <administration-footer></administration-footer>
    </v-row>
  </v-container>
</template>
<script>
import AdministrationFooter from './AdministrationFooter.vue';
import LayoutCreatorCard from "./LayoutCreatorCard.vue";
export default {
  name: "LayoutCreator",
  data() {
    return {
      creators: [
        {
          avatar: "https://avatars3.githubusercontent.com/u/39841241?s=96&v=4",
          nombre: "Andrés M. Prieto Álavrez",
          rol: "Main frontend developer, Scrum master",
          profile: "https://github.com/AndresMpa",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis accusamus veritatis esse velit sint laudantium adipisci provident, fugiat quam voluptatem quisquam ab cum recusandae nemo, delectus exercitationem alias? Labore?",
        },
        {
          avatar: "https://avatars3.githubusercontent.com/u/75052415?s=96&v=4",
          nombre: "Carlos Senider Soto",
          rol: "Main backend developer, Administrador de base de datos",
          profile: "https://github.com/carSneider99",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis accusamus veritatis esse velit sint laudantium adipisci provident, fugiat quam voluptatem quisquam ab cum recusandae nemo, delectus exercitationem alias? Labore?",
        },
        {
          avatar: "https://avatars2.githubusercontent.com/u/75085664?s=96&v=4",
          nombre: "Juan Sebastian Orduz",
          rol: "Main API manager, backend developer",
          profile: "https://github.com/JuanSebOrduz",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis accusamus veritatis esse velit sint laudantium adipisci provident, fugiat quam voluptatem quisquam ab cum recusandae nemo, delectus exercitationem alias? Labore?",
        },
        {
          avatar: "https://avatars0.githubusercontent.com/u/75107873?s=96&v=4",
          nombre: "Harold Alejandro Caicedo",
          rol: "Bibliotecario de proyecto, Frontend developer",
          profile: "    ",
          descripcion:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nobis accusamus veritatis esse velit sint laudantium adipisci provident, fugiat quam voluptatem quisquam ab cum recusandae nemo, delectus exercitationem alias? Labore?",
        },
      ],
    };
  },
  components: {
    LayoutCreatorCard,
    AdministrationFooter,
  },
};
</script>
<style lang="css">
</style>