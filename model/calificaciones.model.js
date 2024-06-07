const alumnos = [];

const getCalificaciones = () => {
  if (alumnos.length <= 0) {
    return "Lista vacia, agrege calificaciones y reintente la consulta ";
  } else {
    return alumnos;
  }
};

const postAlumno = (alumno) => {
  if (alumno.nota < 0) {
    throw new Error("ERROR : No se puede ingresar una nota negativa");
  }

  if (alumno.nota > 10) {
    throw new Error(
      "ERROR : No se puede ingresar una nota superior al maximo permitido"
    );
  }
  const nuevoAlumno = {
    nombre: alumno.nombre,
    nota: alumno.nota,
    id: alumnos.length > 0 ? alumnos[alumnos.length - 1].id + 1 : 1,
  };
  alumnos.push(nuevoAlumno);
  return nuevoAlumno;
};

const getEstudiantesById = (id) => {
  const estudianteBuscado = alumnos.find((estudiante) => estudiante.id == id);
  if (estudianteBuscado) {
    return `¡Hola ${estudianteBuscado.nombre}! Tu nota es ${estudianteBuscado.nota}`;
  } else {
    throw new Error("Estudiante no encontrado");
  }
};

const deleteEstudiantesById = (id) => {
  const buscado = alumnos.findIndex((e) => e.id == id);

  if (buscado === -1) {
    throw new Error("Error : el alumno con ese ID es inexistente.");
  } else {
    const eliminado = alumnos.find((p) => p.id == id);

    alumnos.splice(buscado, 1);

    return `¡OPERACION EXITOSA : Se elimino correctamente a ${eliminado.nombre}`;
  }
};
export default {
  postAlumno,
  getCalificaciones,
  getEstudiantesById,
  deleteEstudiantesById,
};
