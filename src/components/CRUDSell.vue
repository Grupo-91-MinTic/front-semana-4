<template>
  <v-layout align-start>
    <v-flex>
      <v-toolbar text color="white">
        <v-toolbar-title>Ventas</v-toolbar-title>
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
        :items="ventas"
        :search="search"
        class="elevation-1"
      >
        <template v-slot:[`item.articulo`]="{ item }">
          <div v-if="item.articulo.urlImage">
            <v-avatar>
              <img :src="item.articulo.urlImage" :alt="item.articulo.nombre" />
            </v-avatar>
          </div>
          <span> {{ item.articulo.nombre }}</span>
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
      ventas: [],
      headers: [
        { text: "Artículo", value: "articulo", sortable: true },
        { text: "Comprador", value: "usuario.nombre", sortable: true },
        {
          text: "Detalles personalizados",
          value: "descripcion",
          sortable: false,
        },
        { text: "Cantidad", value: "cantidad", sortable: false },
      ],
    };
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
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
        .get("compra/list", configuracion)
        .then(function (response) {
          me.ventas = response.data;
          console.log(me.ventas);
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