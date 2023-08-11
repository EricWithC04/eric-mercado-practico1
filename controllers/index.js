const Imagen = require("../models/imagen.js");

const ctrlImagen = {
  getImages: async (req, res) => {
    try {
      const allImages = await Imagen.findAll();

      if (!allImages || allImages.length === 0) {
        throw {
          status: 404,
          message: "No hay imagenes",
        };
      }

      return res.json(allImages);
    } catch (err) {
      res
        .status(err.status || 500)
        .json(err.message || "Error interno del servidor");
    }
  },
  createImage: async (req, res) => {
    const { newImage } = await req.body;
    try {
      const newI = await Imagen.create({
        image: newImage,
      });

      if (!newI) {
        throw new Error("No se ha podido crear la imagen!");
      }

      res.status(201).send({ newImage, message: "Imagen creada con exito!" });
    } catch (err) {
      console.error(err);
    }
  },
};

Imagen.sync();

module.exports = ctrlImagen;
