// 导入util函数
importScripts('/assets/js/particlesUtils.js')

let options, circles
onmessage = e => {
  console.log(e)
  let {data} = e
  if (data.type === 'init') {
    options = data.data.options
    circles = initializeParticles(options)
    notifyCircles(circles)
    computeNewFrame()
  }
}

function computeNewFrame () {
  let {hspeed, maxx, minx, maxy, miny} = options
  let newCircles = circles.map(c => {
    let nx = c.x + hspeed
    let ny = c.y + c.dy
    if (nx >= maxx) nx = minx

    ny = Math.max(Math.min(ny, maxy), miny)
    if (ny >= maxy || ny <= miny) c.dy = c.dy === -1 ? 1 : -1
    return Object.assign(c, {
      nx, ny
    })
  })
  let collided = false,
      collidedCircles = new Set()
  for (let targetCircle of newCircles) {
    for (let circle of newCircles) {
      if (circle !== targetCircle) {
        if (isCollided(circle, targetCircle, 0)) {
          collided = true
          collidedCircles.add(circle)
          collidedCircles.add(targetCircle)
        }
      }
    }
  }
  if (collided) {
    for (let cc of collidedCircles) {
      cc.dy = (cc.dy === -1 ? 1 : -1)
      cc.y = cc.y + cc.dy
    }
  } else {
    for (let c of newCircles) {
      c.x = c.nx
      c.y = c.ny
    }
    notifyCircles(newCircles)
  }
  setTimeout(() => {
    computeNewFrame()
  }, 50)
}

function notifyCircles (circles) {
  postMessage({
    type: 'draw',
    data: {
      circles
    }
  })
}

