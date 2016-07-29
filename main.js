function getRandomColorRgba(opacity) {
  var r = Math.floor(Math.random() * 255),
      g = Math.floor(Math.random() * 255),
      b = Math.floor(Math.random() * 255),
      o = opacity || 1

  return "rgba(" + r + ", " + g + ", " + b + ", " + o + ")"
}


function setBodyBack(color) {
  document.querySelector('body').style.backgroundColor = color
}


function setChildrenColor(color) {
  var children = document.querySelector('body').children,
      links = document.querySelectorAll('a')

  for (var i in children) {
    if (children.hasOwnProperty(i)) {
      children[i].style.color = color
    }
  }

  for (var j in links) {
    if (links.hasOwnProperty(j)) {
      links[j].style.color = color
    }
  }
}


document.addEventListener("DOMContentLoaded", function() {
  setInterval(function() {
    setBodyBack(getRandomColorRgba())
  }, 1000)


  setInterval(function() {
    setChildrenColor(getRandomColorRgba())
  }, 1200)
});
