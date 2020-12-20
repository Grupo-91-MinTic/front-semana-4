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
            <v-toolbar-title>Categoria</v-toolbar-title>
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
                          :rules="rules"
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
                  eliminarlo
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="closeDelete"
                    >Cancel</v-btn
                  >
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                    >OK</v-btn
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
export default {
  name: "LayoutProduct",
};
</script>
<style lang="css">
</style>