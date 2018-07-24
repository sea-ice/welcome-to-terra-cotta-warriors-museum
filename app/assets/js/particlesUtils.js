function getRandomInRange (min, max) {
  return Math.floor(min + Math.random() * (max + 1 - min))
}

function initializeParticles (options) {
  let circles = [],
      {particles, minx, maxx, miny, maxy, minr, maxr, minspacing} = options
  for (let i = 0, len = particles.length; i < len; i++) {
    while (true) {
      let collided = false
      let c= {
        id: particles[i].id,
        nx: getRandomInRange(minx, maxx),
        ny: getRandomInRange(miny, maxy),
        dy: getRandomInRange(0, 1) ? 1 : -1
      }
      if (particles[i].navigation) {
        c.image = `../../assets/images/首页主菜单切图/${c.id}.png`
        c.url = `/${c.id}`
        c.r = 40
      } else {
        c.image = `../../assets/images/图片资源/首页文物小图合集200/${c.id}.png`
        c.url = `/object/${c.id}`
        c.r = getRandomInRange(minr, maxr)
      }
      for (let circle of circles) {
        if (isCollided(circle, c, minspacing)) {
          collided = true
          break
        }
      }
      if (!collided) {
        c.x = c.nx
        c.y = c.ny
        circles.push(c)
        break
      }
    }
  }
  return circles
}

function computeDistanceBetweenCenters (p1, p2) {
  return Math.ceil(
    Math.sqrt(
      Math.pow(p1.nx - p2.nx, 2) + Math.pow(p1.ny - p2.ny, 2)
    )
  )
}

function isCollided (c1, c2, spacing) {
  return computeDistanceBetweenCenters(c1, c2) <= (c1.r + c2.r + spacing)
}


