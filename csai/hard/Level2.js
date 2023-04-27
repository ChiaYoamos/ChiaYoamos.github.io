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
    var flag =false;
    if (ans > 100){
        if (ans < 200){
            if (ans * 2 == 362){
                flag = true;
            }   
        }
    }
    
    if (flag == true){
        document.getElementById('bool').style.color = " #367E18";
        document.getElementById('bool').style.font = "100%";
        document.getElementById('bool').textContent ="  "+ans+ " is Right";
        
        setTimeout("location.href='Level3.html'",3000);
    }
    else{
        document.getElementById('bool').style.color = " #D21312";
        document.getElementById('bool').style.font = "100%";
        document.getElementById('bool').textContent = "  "+ans+ " is Wrong";
    }
    document.getElementById('ans').value = "";
  }