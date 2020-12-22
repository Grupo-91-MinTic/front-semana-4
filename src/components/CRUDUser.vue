<template>
  <v-layout align-start>
    <v-flex>
      <v-toolbar text color="white">
        <v-toolbar-title>Usuarios</v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          class="text-xs-center"
          v-model="search"
          append-icon="search"
          label="Búsqueda"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="usuarios"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:[`item.nombre`]="{ item }">
          <div align="center" v-if="item.avatar">
            <v-avatar>
              <img :src="item.avatar" :alt="item.nombre" />
            </v-avatar>
          </div>
          <p align="center">{{ item.nombre }}</p>
        </template>
        <template v-slot:[`item.estado`]="{ item }">
          <div v-if="item.estado">
            <span class="blue--text">Activo</span>
          </div>
          <div v-else>
            <span class="red--text">Inactivo</span>
          </div>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="listar()">Resetear</v-btn>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      search: "",
      usuarios: [],
      headers: [
        { text: "Nombre", value: "nombre", sortable: true },
        { text: "Descripción", value: "descripcion", sortable: true },
        { text: "Email", value: "email", sortable: true },
        { text: "Rol", value: "rol", sortable: false },
        { text: "Estado", value: "estado", sortable: false },
      ],
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
  },
  beforeUpdate() {
    this.$store.dispatch("autoLogin", "venta");
  },
  created() {
    this.listar();
  },
  methods: {
    listar() {
      let me = this;
      let header = { Token: this.$store.state.token };
      let configuracion = { headers: header };
      axios
        .get("usuario/list", configuracion)
        .then(function (response) {
          for (var i = 0; i < response.data.length; i++) {
            if (response.data[i].rol === "Administrador") {
              me.usuarios.push(response.data[i]);
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    close() {
      this.limpiar();
    },
  },
};
</script>