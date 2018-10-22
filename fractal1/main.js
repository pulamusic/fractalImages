const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

for(let x = 0; x < 200; x++) {
  for(let y = 0; y < 200; y++) {
    let i = 0;
    let cx = -2 + x / 50;
    let cy = -2 + y / 50;
    let zx = 0;
    let zy = 0;

    do {
      let xt = zx * zy;
      zx = zx * zx - zy * zy + cx;
      zy = 2 * xt + cy;
      i++;
    } while (i < 255 && (zx * zx + zy * zy) < 4);

    let color = i.toString(16);
    context.beginPath();
    context.rect(x * 4, y * 4, 4, 4);
    context.fillStyle = '#' + color + color + color;
    context.fill();
  }
}
