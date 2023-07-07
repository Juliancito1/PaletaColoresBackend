import Color from "../models/color";

export const obtenerColores = async (req, res) => {
  try {
    const colores = await Color.find();
    res.status(200).json(colores);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los colores",
    });
  }
};

export const crearColor = async (req, res) => {
  try {
    const colorNuevo = new Color(req.body);
    await colorNuevo.save();
    res.status(201).json({ 
      mensaje: "El color fue creado correctamente" 
    });
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
      mensaje: "El color fue eliminado",
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
    const color = await Color.findById(req.params.id);
    res.status(200).json(color);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "No se pudo obtener el color buscado",
    });
  }
};
