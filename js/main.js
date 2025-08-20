const red = document.querySelector(".red")
red.addEventListener("click", () => {
  document.body.style.backgroundColor = "red"
})

const white = document.querySelector(".white")
white.addEventListener("click", () => {
  document.body.style.backgroundColor = "white"
})

const blue = document.querySelector(".blue")
blue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue"
})

const yellow = document.querySelector(".yellow")
yellow.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow"
})

const colorPicker = document.querySelector(".color-picker")
colorPicker.addEventListener("input", (event) => {
  document.body.style.backgroundColor = event.target.value
})
