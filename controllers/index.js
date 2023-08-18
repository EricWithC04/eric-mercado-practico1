const Imagen = require("../models/imagen.js");

const ctrlArchivo = {
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
  submitFileExpressFileupload: async (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No se han recibido los archivos!")
      }

      // console.log(req.files);
      let file = req.files.file
      let path = `${__dirname}/../files/${file.name}`
      file.mv(path, (err) => {
        if (err) return res.status(500).send(err)

        res.send({msg: "Archivo subido correctamente!"})
      })
    } catch (err) {
      console.error(err);
    }
  },
  submitFileCloudinary: async (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send("No se han recibido los archivos!")
      }

      let file = req.files.fileC
      let path = `${__dirname}/../files/${file.name}`
      file.mv(path, (err) => {
        if (err) return res.status(500).send(err)

        res.send({msg: "Archivo subido correctamente!"})
      })
    } catch (err) {
      console.error(err);
    }
  }
};

Imagen.sync();

module.exports = ctrlArchivo;
