import {computeXPosRange, getRandomInRange} from './index'

function particle (options) {
  let {maxr, minr, miny, maxy, hwidth} = options
  this.options = options
  let [minx, maxx] = computeXPosRange(hwidth)
  this.x = getRandomInRange(minx, maxx)
  this.y = getRandomInRange(miny, maxy)
  this.r = getRandomInRange(minr, maxr)
}

particle.prototype.init = function () {

}
