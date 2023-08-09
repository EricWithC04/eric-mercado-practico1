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
};

Imagen.sync();

module.exports = ctrlImagen;
