<template>
  <v-layout aling-start>
    <v-flex>
      <v-data-table
        :headers="headers"
        :items="categorias"
        :search="search"
        sort-by="opciones"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Categorias</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-text-field
              class="text-xs-center"
              v-model="search"
              append-icon="search"
              label="Búsqueda"
              single-line
              hide-details
            >
            </v-text-field>
            <v-spacer></v-spacer>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">
                  Nueva categoría
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="12" md="12">
                        <v-text-field
                          v-model="editedItem.name"
                          label="Nombre de la categoría"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.provider"
                          label="Proveedor"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="editedItem.status"
                          label="Estado"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-textarea
                          v-model="editedItem.description"
                          color="teal"
                          counter
                          maxlength="255"
                          label="Descripcion"
                          hint="Agregar una descripcion del producto"
                        >
                          <template v-slot:label>
                            <div>Descripcion</div>
                          </template>
                        </v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="close">
                    Cancelar
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Guardar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline"
                  >Esta por eliminar un registro ¿Esta seguro que desea
                  eliminarlo?
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >Guardar</v-btn
                  >
                  <v-spacer></v-spacer>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-icon small class="mr-2" @click="editItem(item)">
            mdi-pencil
          </v-icon>
          <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
        </template>
        <template v-slot:no-data>
          <v-btn color="primary" @click="listItems"> Recargar </v-btn>
        </template>
      </v-data-table>
    </v-flex>
  </v-layout>
</template>

<script>
//import VueJwtDecode from "VueJwtDecode";
//import axios from "axios";

export default {
  name: "Category",
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    headers: [
      { text: "Nombre", value: "nombre", sortable: false },
      { text: "Estado", value: "estado", sortable: false },
      { text: "Descripcion", value: "descripcion", sortable: false },
      { text: "Opciones", value: "opciones", sortable: false },
    ],
    categorias: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      status: 1,
      provider: "",
      description: "",
    },
    defaultItem: {
      name: "",
      status: 1,
      provider: "",
      description: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1
        ? "Añadir una nueva categoría"
        : "Editar categoría";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.listItems();
  },

  methods: {
    async listItems() {
      try {
        let response = await this.$http.get("/categoria/list", this.headers);
        let token = response.data.tokenReturn;
        localStorage.setItem("category", token);
        console.log(token);

        if (token) {
          let token = localStorage.getItem("category");
          this.categorias = token;
        }
      } catch (error) {
        console.log(error);
      }
      /** 
      let categorias = this.categorias;
      let header = { Token: this.$store.state.token };
      console.log(this.$store.state.token);
      let configuracion = { headers: header };
      console.log(header);
      console.log(configuracion);
      axios
        .get("/categoria/list", configuracion)
        .then(function (response) {
          categorias.categorias = response.data;
        })
        .catch(function (error) {
          console.log(error);
        });
        */
    },

    clear() {
      this.id = "";
      this.name = "";
      this.status = 1;
      this.provider = "";
      this.description = "";
      this.editedIndex = -1;
    },

    editItem(item) {
      this.editedIndex = this.categorias.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.categorias.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.categorias.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.categorias[this.editedIndex], this.editedItem);
      } else {
        this.categorias.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
