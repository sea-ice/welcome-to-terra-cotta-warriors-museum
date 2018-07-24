export function computeXPosRange (hwidth) {
  let rootWidth = document.documentElement.clientWidth || document.body.clientWidth
  let minxpos = Math.floor((rootWidth - hwidth) / 2)
  let maxxpos = minxpos + hwidth
  return [minxpos, maxxpos]
}
