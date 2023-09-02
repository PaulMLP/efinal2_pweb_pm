import axios from "axios";

const ingresarEstudianteFachada = async (bodyEstudiante) => {
  await ingresarEstudiante(bodyEstudiante);
};

const obtenerEstudianteFachada = async (cedula) => {
  return await obtenerEstudiante(cedula);
};


const ingresarEstudiante = async (bodyEstudiante) => {
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //     Mensaje: "msg",
  //   };
  axios
    .post(
      `http://localhost:8082/API/v1.0/Inscripcion/estudiantes`,
      bodyEstudiante
      //{ headers: headers }
    )
    .then((r) => r.data);
};

const obtenerEstudiante = async (cedula) => {
  //En el config vamos a enviar todos los datos de cabecera
  // const headers = {
  //   Authorization: `Bearer ${token}`,
  //   Mensaje: "Valor 1",
  // };
  const data = axios
    .get(`http://localhost:8082/API/v1.0/Inscripcion/estudiantes/${cedula}`, {
      //  headers: headers,
    })
    .then((r) => r.data);
  console.log(data);
  return data;
};
export { ingresarEstudianteFachada, obtenerEstudianteFachada };
