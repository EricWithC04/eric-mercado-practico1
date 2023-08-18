const formularioCloudinary = document.getElementById("formularioCloudinary");

formularioCloudinary.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const fileToUpload = new FormData(formularioCloudinary)
    // console.log(fileToUpload);
  
    const nuevoArchivo = await fetch("https://api.cloudinary.com/v1_1/du2qoqncg/image/upload", {
      method: "POST",
      body: fileToUpload
    })
    .then((response) => response.json())
    .then((res) => console.log(res))
  
    if (!nuevoArchivo) {
      return { msg: "Error al subir el archivo!!" }
    } else {
      return { msg: "Archivo subido correctamente" }
    }
  });