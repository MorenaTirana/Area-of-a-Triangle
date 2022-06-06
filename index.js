function Area() {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);

  console.log(typeof(a));
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * ((s - a) * (s - b) * (s - c)));

  document.getElementById("ans").innerHTML = area;
}

const calculateTriangle = (a, b, c) => {
  const ax = 0;
  const ay = 0;
  const bx = ax + c;
  const by = ay;
  const cosAlpha = (a * a - b * b - c * c) / (b * c * 2);
  const alpha = Math.acos(cosAlpha);
  const cx = ax - b * cosAlpha;
  const cy = ay + b * Math.sin(alpha);

  return {ax, ay, bx, by, cx, cy};
};

const onDraw = () => {
    const a = d3.select('#side-a').node().value;
    const b = d3.select('#side-b').node().value;
    const c = d3.select('#side-c').node().value;
  const {ax, ay, bx, by, cx, cy} = calculateTriangle(parseInt(a), parseInt(b), parseInt(c));
  d3.select('polygon').attr('points', `${ax},${ay} ${bx},${by} ${cx},${cy}`)
  console.log('T: ', t);
}

d3.select('button').on('click', onDraw);

