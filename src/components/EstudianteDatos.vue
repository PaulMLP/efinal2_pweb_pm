<template>
  <div class="estudiante">
    <div class="input">
      <label for="token">Token</label>
      <input type="text" id="token" v-model="token" />
    </div>

    <div class="input">
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" v-model="nombre" />
    </div>

    <div class="input">
      <label for="apellido">Apellido</label>
      <input type="text" id="apellido" v-model="apellido" />
    </div>
    <div class="input">
      <label for="cedula">Cedula</label>
      <input type="text" id="cedula" v-model="cedula" />
    </div>

    <button @click="guardar">Guardar</button>
  </div>
</template>

<script>
import {
  ingresarEstudianteFachada,
  obtenerEstudianteFachada,
} from "@/helpers/EstudianteCliente";
export default {
  data() {
    return {
      token: "",
      nombre: "",
      apellido: "",
      cedula: "",
    };
  },
  methods: {
    async guardar() {
      const estudiante = {
        nombre: this.nombre,
        apellido: this.apellido,
        cedula: this.cedula,
      };
      try {
        await ingresarEstudianteFachada(estudiante);
      } catch (e) {}

      setTimeout(async () => {
        try {
          const est = await obtenerEstudianteFachada(this.cedula);
          this.$emit("getEstudiante", est);
        } catch (error) {}
      }, 2000);
    },
  },
};
</script>

<style scoped>
.estudiante {
  color: rgb(90, 118, 219);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.input {
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 10px;
  text-align: left;
}

input {
  border-radius: 5px;
  height: 30px;
}

#token {
  height: 150px;
  border-radius: 20px;
}

button {
  background: rgb(92, 182, 247);
  padding: 5px 20px;
  border-radius: 5px;
  height: 30px;
  color: white;
}
</style>
