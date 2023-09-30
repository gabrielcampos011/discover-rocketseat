function toggleMode() {
  const html = document.documentElement

  //pegar a tag img
  const img = document.querySelector("#Perfil img")
  //substituir a imagem

  if (html.classList.contains("light")) {
    img.setAttribute('src', './assets/avatar.png')
    //se tiver light mode adicionar a imagem light
  } else {
    //se tiver sem light mode manter a imagem original
    img.setAttribute("src", "./assets/avatar-light.png")
  }

  html.classList.toggle("light")
}