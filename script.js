function calculateArithmetic() {
    var a = parseFloat(document.getElementById('input').value);
    var d = parseFloat(document.getElementById('input2').value);
    var n = parseInt(document.getElementById('n').value);
  
    var result = 0;
    for (var i = 0; i < n; i++) {
      result += a + i * d;
    }
  
    document.getElementById('result').innerText = "Jumlah baris aritmatika: " + result;
  }
  
  function calculateGeometric() {
    var a = parseFloat(document.getElementById('input').value);
    var r = parseFloat(document.getElementById('input2').value);
    var n = parseInt(document.getElementById('n').value);
  
    var result = 0;
    for (var i = 0; i < n; i++) {
      result += a * Math.pow(r, i);
    }
  
    document.getElementById('result').innerText = "Jumlah baris geometri: " + result;
  }
  
