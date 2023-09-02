<template>
  <div class="tabla">
    <table>
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellido</th>
          <th scope="col">Cédula</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="estudiante in estudiantesAux" :key="estudiante.id">
          <th scope="row">{{ estudiante.id }}</th>
          <td>{{ estudiante.nombre }}</td>
          <td>{{ estudiante.apellido }}</td>
          <td>{{ estudiante.cedula }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estudiantesAux: null,
    };
  },
  props: {
    estudiantes: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.estudiantesAux = this.estudiantes;
  },
};
</script>

<style scoped>
table {
  color: white;
}
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid black;
}
tbody tr:nth-child(odd) {
  background-color: #629ac9;
}

tbody tr:nth-child(even) {
  background-color: #b0d5e1;
}

thead tr {
  background-color: #2349a1;
}
</style>
