function calculate(){
    var a = document.getElementById('side-a').value;
    var b = document.getElementById('side-b').value;
    var c = document.getElementById('side-c').value;
    var s = (Number(a) + Number(b) + Number(c))/2;
    var res = Math.sqrt(s* (s - Number(a)) * (s - Number(b)) * (s - Number(c)));
    document.getElementById('ans').innerHTML = res;
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
  