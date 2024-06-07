import service from "../services/calificaciones.services.js";

const getCalificaciones = async (req, res) => {
  const calificaciones = await service.getCalificaciones();
  res.send(calificaciones);
};

const postAlumno = async (req, res) => {
  try {
    const alumno = req.body;
    const nuevo = await service.postAlumno(alumno);
    res.send(
      `OPERACION EXITOSA!! Se agrego a ${nuevo.nombre} , con una nota igual a ${nuevo.nota}, y con ID ${nuevo.id}`
    );
  } catch (error) {
    console.log("error :" + error);
    res.send({ statuscode: 401, message: "La nota ingresada no es valida" });
  }
};

const getEstudiantesById = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await service.getEstudiantesById(id);
    res.send(alumno);
  } catch (error) {
    console.log("error :" + error);
    res.send({
      statuscode: 401,
      message: "No se encontro al estudiante buscado.",
    });
  }
};
const deleteEstudiantesById = async (req, res) => {
  try {
    const { id } = req.params;
    const alumno = await service.deleteEstudiantesById(id);
    res.send(alumno);
  } catch (error) {
    console.log("error :" + error);
    res.send({
      statuscode: 401,
      message: "Error al eliminar. No se encontro al estudiante buscado.",
    });
  }
};
export default {
  postAlumno,
  getCalificaciones,
  getEstudiantesById,
  deleteEstudiantesById,
};
