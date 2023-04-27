function submitName(e) {
    if (e.code === 'Enter') {
        func();
    }
}
function hint(){
    alert("for in range(頭,尾)，從頭到尾-1");
}




function func(){
    var ans = parseInt(document.getElementById('ans').value);
    var show = ans;
    var flag = false;
    for(var i=0;i<10;i++){
        show+=3;
    } 
    if (show == 50){
        flag = true;
    }
    
    if (flag == true){
        document.getElementById('bool').style.color = " #367E18";
        document.getElementById('bool').style.font = "100%";
        document.getElementById('bool').textContent ="  "+ans+ " is Right";
        
        setTimeout("location.href='LevelFinish.html'",3000);
    }
    else{
        document.getElementById('bool').style.color = " #D21312";
        document.getElementById('bool').style.font = "100%";
        document.getElementById('bool').textContent = "  "+ans+ " is Wrong";
    }
    document.getElementById('ans').value = "";

    
  }