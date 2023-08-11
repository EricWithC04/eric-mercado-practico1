const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();

  //   const name = document.getElementById("nombre");
  const image = await document.getElementById("imagen");

  const imagenAGuardar = {
    newImage: image.value,
  };

  const nuevaImagen = await fetch("http://localhost:3000/api/createImage", {
    method: "POST",
    body: JSON.stringify(imagenAGuardar),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());

  if (!nuevaImagen) {
    alert("Error al crear la imagen");
  } else {
    alert("Imagen creada correctamente");
  }
});
