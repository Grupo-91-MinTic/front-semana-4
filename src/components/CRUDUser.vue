<template>
  <v-card>
    <v-card-title> Usuarios </v-card-title>
    <v-simple-table fixed-header height="300px">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Id</th>
            <th class="text-left">Nombre</th>
            <th class="text-left">Rol</th>
            <th class="text-left">E-mail</th>
            <th class="text-left">Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in user" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.nombre }}</td>
            <td>{{ item.rol }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.estado }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>
<script>
export default {
  name: "Sell",
  data() {
    return {
      user: [
        {
          id: "1234546",
          rol: "admin",
          estado: 1,
          email: "miemail@gamil,com",
          nombre: "Pepocasr",
        },
      ],
    };
  },
};
</script>
<style lang="css">
</style>