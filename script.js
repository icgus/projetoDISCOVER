function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se usar light mode, adcionar imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se usar dark mode, adcionar imagem dark
    img.setAttribute("src", "./assets/avatar-dark.png")
  }
}
