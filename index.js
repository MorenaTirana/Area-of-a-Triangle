function calculate(){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var s = (Number(a) + Number(b) + Number(c))/2;
    var res = Math.sqrt(s* (s - Number(a)) * (s - Number(b)) * (s - Number(c)));
    document.getElementById('ans').innerHTML = res;
}