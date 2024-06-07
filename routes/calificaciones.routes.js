import express from "express";
import controller from "../controller/calificaciones.controller.js";

const route = express.Router();

route.post("/agregarCalificacion", controller.postAlumno);
route.get("/calificaciones", controller.getCalificaciones);
route.get("/estudianteById/:id", controller.getEstudiantesById);
route.delete("/estudianteById/:id", controller.deleteEstudiantesById);
export default route;
