function submitName(e) {
    if (e.code === 'Enter') {
        func();
    }
}
function hint(){
    alert("if是要一層一層往下執行");
}




function func(){
    var ans = parseInt(document.getElementById('ans').value);
    if (ans > 100){
        if (ans < 200){
            if (ans * 2 == 362){
                document.getElementById('bool').textContent = "  "+ans+" is Right";
                setTimeout("location.href='/Level3.html'",3000);
            }
            else{
                document.getElementById('bool').textContent = "  "+ans+" is Wrong";
            }
        }
        else{
            document.getElementById('bool').textContent = "  "+ans+" is Wrong";
        }
    }
    else{
        document.getElementById('bool').textContent = "  "+ans+" is Wrong";
    }
    document.getElementById('ans').value = "";
  }