
function getRandomColorRgba(opacity) {
  var r = Math.floor(Math.random() * 255),
      g = Math.floor(Math.random() * 255),
      b = Math.floor(Math.random() * 255),
      a = opacity || 1

  return `rgba(${r}, ${g}, ${b}, ${a})`
}


function setBodyBack(color) {
  document.querySelector('body').style.backgroundColor = color
}


function setChildrenColor(color) {
  const children = document.querySelector('body').children
  const links = document.querySelectorAll('a')

  for (let child of children) {
    child.style.color = color
  }

  for (let link of links) {
    link.style.color = color
  }
}


document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => setBodyBack(getRandomColorRgba()), 1000)
  setInterval(() => setChildrenColor(getRandomColorRgba()), 1200)
});
