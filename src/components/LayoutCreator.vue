<template>
  <v-container>
    <h2>Creadores</h2>
    <v-row justify="space-around">
      <v-col
        style="display: inline-flex; margin: 1em; padding: 1em"
        v-for="(creator, index) of creators"
        cols="card.flex"
        :key="index"
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
import AdministrationFooter from "./AdministrationFooter.vue";
import LayoutCreatorCard from "./LayoutCreatorCard.vue";
export default {
  name: "LayoutCreator",
  data() {
    return {
      creators: [
        {
          avatar: "https://avatars3.githubusercontent.com/u/39841241?s=96&v=4",
          nombre: "Andrés M. Prieto Álvarez",
          rol: "Main frontend developer, Scrum master",
          profile: "https://github.com/AndresMpa",
          descripcion:
            "Apasionado de la industria TI, estudiante de ingeniería en sistemas y computación de la UTP, licenciado en ingles y desarrollador web; apasionado por la generacion de proyecto y la creacion de soluciones practicas y accesibles para todo el mundo...",
        },
        {
          avatar: "https://avatars3.githubusercontent.com/u/75052415?s=96&v=4",
          nombre: "Carlos Senider Soto",
          rol: "Main backend developer, Administrador de base de datos",
          profile: "https://github.com/carSneider99",
          descripcion:
            "Estudiante de Ingenieria electronica, apasionado por mejorar sus conocimientos. Intereses: Electronica, matematicas, programacion, educacion. Experiencia como monitor academico...",
        },
        {
          avatar: "https://avatars2.githubusercontent.com/u/75085664?s=96&v=4",
          nombre: "Juan Sebastian Orduz",
          rol: "Main API manager, backend developer",
          profile: "https://github.com/JuanSebOrduz",
          descripcion:
            "Ingeniero Electronico y Telecomunicaciones de la Universidad del Cauca con experiencia en desarrollo, mantenimiento y testeo de backend en arquitecturas de tipo API RESTful...",
        },
        {
          avatar: "https://avatars0.githubusercontent.com/u/75107873?s=96&v=4",
          nombre: "Harold Alejandro Caicedo",
          rol: "Bibliotecario de proyecto, Frontend developer",
          profile: "https://github.com/AlejoCM12",
          descripcion:
            "Estudiante de ultimo semestre de ingenieria electronica; en mi carrera he tenido experiencia en el desarrollo y diseño de interfaces para aplicaciones moviles y paginas web...",
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