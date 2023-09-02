import axios from "axios";

const obtenerTokenFachada = async (bodyUsuario) => {
  return await obtenerToken(bodyUsuario);
};

const obtenerToken = async (bodyUsuario) => {
  console.log(bodyUsuario);
  const semilla = "semilla1";
  const data = axios
    .get(
      `http://localhost:8081/API/v1.0/Autorizacion/tokens/obtener/${semilla}`,
      bodyUsuario
    )
    .then((r) => r.data);

  return data;
};

export { obtenerTokenFachada };
