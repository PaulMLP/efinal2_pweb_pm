<template>
  <div class="guardar">
    <EstudianteDatos @getEstudiante="manejoEstudiante($event)" />
    <EstudiantesTabla :estudiantes="estudiantes" />
  </div>
</template>

<script>
import EstudianteDatos from "@/components/EstudianteDatos.vue";
import EstudiantesTabla from "@/components/EstudiantesTabla.vue";
export default {
  components: { EstudianteDatos, EstudiantesTabla },
  data() {
    return {
      estudiante: null,
      estudiantes: [],
    };
  },
  methods: {
    manejoEstudiante(est) {
     
       this.estudiantes.push(est);
    },
  },
};
</script>

<style scoped>
.guardar {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;
}
</style>
