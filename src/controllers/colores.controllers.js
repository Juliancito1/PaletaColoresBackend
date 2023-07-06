import { validationResult } from "express-validator";
import Color from "../models/color";

// Controlador para obtener productos
export const obtenerColores = async (req, res) => {
  try {
    const colores = await Producto.find();
    res.status(200).json(colores);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los colores",
    });
  }
};

// Controladores para crear un producto

export const crearColor = async (req, res) => {
  try {
    
      const colorNuevo = new Color(req.body);
      await colorNuevo.save();
      res.status(201).json({ mensaje: "El color fue creado correctamente" });
    
  } catch (error) {
    res.status(404).json({
      mensaje: "Error al crear el color",
    });
  }
};

export const borrarColor = async (req, res) => {
  try {
    console.log(req.params.id);
    await Color.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El producto fue eliminado",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El color no pudo ser eliminado",
    });
  }
};

export const editarColor = async (req, res) => {
  try {
    await Color.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El color fue actualizado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El color no pudo ser actualizado",
    });
  }
};

export const obtenerColor = async (req, res) => {
  try {
    const producto = await Color.findById(req.params.id);
    res.status(200).json(producto);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener el color buscado",
    });
  }
};
