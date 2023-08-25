const formularioCloudinary = document.getElementById("formularioCloudinary");
const result = document.getElementById("resultado");
const load = document.getElementById("loader");

formularioCloudinary.addEventListener("submit", async (e) => {
    e.preventDefault();

    load.classList.add("spinner-border")
  
    const fileToUpload = await new FormData(formularioCloudinary)
  
    const nuevoArchivo = await fetch("http://localhost:4000/api/submitFileCloudinary", {
      method: "POST",
      body: fileToUpload
    })
    .then((response) => {
      if (response.status !== 201 && response.status !== 200) {
        result.innerHTML = "Se ha producido un error al subir tu imagen, por favor, intentalo nuevamente"
      } else {
        return response.json()
      }
    })
    .then((res) => {
      if (res.newImage.url.length) {
        result.innerHTML = `Se ha subido el archivo correctamente, puedes acceder a el mediante este link: ${res.newImage.url}`
        load.classList.remove("spinner-border")
      }
    })
  });