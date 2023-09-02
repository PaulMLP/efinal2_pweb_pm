<template>
  <div class="token">
    <div class="input">
      <label for="semilla">Semilla</label>
      <input type="text" id="semilla" v-model="semilla" />
    </div>

    <div class="input">
      <label for="tiempo">Tiempo de vigencia</label>
      <input type="text" id="tiempo" v-model="tiempo" />
    </div>

    <div class="input">
      <label for="token">Token</label>
      <input type="text" id="token" v-model="token" />
    </div>

    <button @click="getToken">Generar</button>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "@/helpers/TokenCliente";
export default {
  data() {
    return {
      semilla: "",
      token: "",
      tiempo: "",
    };
  },
  methods: {
    async getToken() {
      const usuario = {
        username: "Paul",
        password: "12345",
      };

      const d  = await obtenerTokenFachada(usuario);
    },
  },
};
</script>

<style scoped>
.token {
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
