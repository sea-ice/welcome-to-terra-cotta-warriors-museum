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
    if (ny === maxy || ny === miny) c.dy = c.dy === -1 ? 1 : -1
    return Object.assign(c, {
      nx, ny,
      collided: false
    })
  })
  let collidedCircles = []
  for (let targetCircle of newCircles) {
    for (let circle of newCircles) {
      if (circle !== targetCircle) {
        if (
          !isCollided(circle, targetCircle, 0) &&
          isCollided(circle, targetCircle, 0, true)
        ) {
          circle.collided = targetCircle.collided = true
          collidedCircles.push([circle, targetCircle])
        }
      }
    }
  }
  for (let c of newCircles) {
    if (c.collided) {
      c.dy = (c.dy === -1 ? 1 : -1)
    } else {
      c.x = c.nx
      c.y = c.ny
    }
  }
  notifyCircles(newCircles)
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

