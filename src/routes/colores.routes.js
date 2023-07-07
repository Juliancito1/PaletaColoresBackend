import { Router } from "express";
import {
  borrarColor,
  crearColor,
  editarColor,
  obtenerColor,
  obtenerColores,
} from "../controllers/colores.controllers";

const router = Router();

router.route("/colores").get(obtenerColores).post(crearColor);
router
  .route("/colores/:id")
  .delete(borrarColor)
  .put(editarColor)
  .get(obtenerColor);

export default router;
