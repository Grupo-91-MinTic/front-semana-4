<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    app
  >
    <v-list dense>
      <template>
        <v-list-item :to="{ name: 'home' }">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-title> Inicio </v-list-item-title>
        </v-list-item>
      </template>
      <template>
        <v-list-group>
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title> Almacen </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'categoria' }">
            <v-list-item-action>
              <v-icon>table_chart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Categorias </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'articulo' }">
            <v-list-item-action>
              <v-icon>table_chart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Articulos </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
      <template>
        <v-list-group>
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title> Ventas </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'venta' }">
            <v-list-item-action>
              <v-icon>table_chart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Ventas </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'cliente' }">
            <v-list-item-action>
              <v-icon>table_chart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Clientes </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template><template>
        <v-list-group>
          <v-list-item slot="activator">
            <v-list-item-content>
              <v-list-item-title> Accesos </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item :to="{ name: 'user' }">
            <v-list-item-action>
              <v-icon>table_chart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title> Usuario </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {};
</script>
<style lang="css">
</style>