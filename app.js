import { snakeSpeed } from "./snake"

let lastRenderTime = 0

function main(currentTime) {
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
   if (secondsSinceLastRender < 1 / snakeSpeed) return
  window.requestAnimationFrame(main)

  
  console.log('Render')
  lastRenderTime = currentTime

  update()
  draw()
}

window.requestAnimationFrame(main)