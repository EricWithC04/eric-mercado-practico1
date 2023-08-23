const formularioCloudinary = document.getElementById("formularioCloudinary");

formularioCloudinary.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const fileToUpload = new FormData(formularioCloudinary)
  
    const nuevoArchivo = await fetch("http://localhost:4000/api/submitFileCloudinary", {
      method: "POST",
      body: fileToUpload
    })
    .then((response) => response.json())
    .then((res) => console.log(res))
  
    if (!nuevoArchivo) {
      return { msg: "Error al subir el archivo!!" }
    } else {
      return { msg: "Archivo subido correctamente", nuevoArchivo }
    }
  });