
class Colorizer {
  constructor(tagName = 'body') {
    this._root = document.querySelector(tagName)
    this._children = document.querySelectorAll(`${tagName} *`)
  }


  getRandomColorRgba(opacity = 0.1) {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    const a = opacity

    return `rgba(${r}, ${g}, ${b}, ${a})`
  }


  setBackgroundColor(color = this.getRandomColorRgba()) {
    this._root.style.backgroundColor = color
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const colorizer = new Colorizer('body')

  setInterval(() => colorizer.setBackgroundColor(), 1000)
})
