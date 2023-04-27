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
    var flag =false;
    if(ans == a){
        flag = true;
    }
    if (flag == true){
        document.getElementById('bool').style.color = " #367E18";
        document.getElementById('bool').style.font = "100%";
        document.getElementById('bool').textContent ="  "+ans+ " is Right";
        
        setTimeout("location.href='Level2.html'",3000);
    }
    else{
        document.getElementById('bool').style.color = " #D21312";
        document.getElementById('bool').style.font = "100%";
        document.getElementById('bool').textContent = "  "+ans+ " is Wrong";
    }
    document.getElementById('ans').value = "";
  }

