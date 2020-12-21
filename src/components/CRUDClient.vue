<template>
  <v-card>
    <v-card-title> Clientes </v-card-title>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Id usuario</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in toke" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.usuarioId }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>
<script>
export default {
  name: "Client",
  data() {
    return {};
  },
};
</script>
<style lang="css">
</style>