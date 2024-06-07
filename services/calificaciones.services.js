import model from "../model/calificaciones.model.js";

const getCalificaciones = async () => {
  const calificaciones = await model.getCalificaciones();
  return calificaciones;
};

const postAlumno = async (alumno) => {
  const nuevo = await model.postAlumno(alumno);
  return nuevo;
};

const getEstudiantesById = async (id) => {
  const estudiante = await model.getEstudiantesById(id);
  return estudiante;
};

const deleteEstudiantesById = async (id) => {
  const estudiante = await model.deleteEstudiantesById(id);
  return estudiante;
};
export default {
  postAlumno,
  getCalificaciones,
  getEstudiantesById,
  deleteEstudiantesById,
};
