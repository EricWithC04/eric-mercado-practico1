const formulario = document.getElementById("formulario");
const formularioCloudinary = document.getElementById("formularioCloudinary");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileToUpload = new FormData(formulario)
  // console.log(fileToUpload);

  const nuevoArchivo = await fetch("http://localhost:4000/api/submitFileExpress", {
    method: "POST",
    body: fileToUpload
  })
  .then((response) => response.json())
  .then((res) => alert(res.msg))

  if (!nuevoArchivo) {
    return { msg: "Error al subir el archivo!!" }
  } else {
    return { msg: "Archivo subido correctamente" }
  }
});

formularioCloudinary.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fileToUpload = new FormData(formularioCloudinary)
  // console.log(fileToUpload);

  const nuevoArchivo = await fetch("http://localhost:4000/api/submitFileCloudinary", {
    method: "POST",
    body: fileToUpload
  })
  .then((response) => response.json())
  .then((res) => alert(res.msg))

  if (!nuevoArchivo) {
    return { msg: "Error al subir el archivo!!" }
  } else {
    return { msg: "Archivo subido correctamente" }
  }
});
