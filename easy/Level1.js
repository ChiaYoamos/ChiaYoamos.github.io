
function submitName(e) {
    if (e.code === 'Enter') {
        func();
    }
}
function hint(){
    alert("=是可以再取代的");
}


function func(){
    var ans = parseInt(document.getElementById('ans').value);
    var a;
    a=2;
    a=4;
    a=a+2;

    if (ans == a){
        document.getElementById('bool').textContent = "  "+ans+ " is Right";
        setTimeout("location.href='Level2.html'",3000);
    }
    else{
        document.getElementById('bool').textContent = "  "+ans+ " is Wrong";
    }
    document.getElementById('ans').value = "";
  }

