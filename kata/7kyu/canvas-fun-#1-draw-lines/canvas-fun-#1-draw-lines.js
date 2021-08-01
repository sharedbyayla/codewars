// https://www.codewars.com/kata/5928da5f1fad49c34d00013a

function drawLines(points) {
  var canvas = new Canvas(100, 100)
  var ctx = canvas.getContext('2d')
  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, 100, 100)
  ctx.strokeStyle = '#ff0000'
  ctx.beginPath()

  points.forEach(([x, y]) => ctx.lineTo(x, y))

  ctx.stroke()
  return canvas.toDataURL()
}
