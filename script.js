function toggleMode() {
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // Substituir a imagem
  if (html.classList.contains("light")) {
    // Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./imgs/avatar-light.png")
    img.setAttribute("alt", "Foto de perfil do Mayk Brito com óculos escuro")
  } else {
    // Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./imgs/avatar.png")
    img.setAttribute("alt", "Foto de perfil do Mayk Brito com óculos de grau")
  }
}
