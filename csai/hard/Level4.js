function submitName(e) {
    if (e.code === 'Enter') {
        func();
    }
}
function hint(){
    alert("進階沒有提示，加油");
}

function func(){
    var ansx = parseInt(document.getElementById('ansx').value);
    var ansy = parseInt(document.getElementById('ansy').value);
    var x=ansx;
    var y=ansy;
    var ans=0;
    var flag = false;
    
    if (ansx >= ansy){
        for(var i=0;i<10;i++){
            ansx+=3
            for(var j=0;j<10;j++){
                ansx+=3
            }
        }
        ans = ansx+ansy
    } 

    else {
        for(var i=0;i<10;i++){
            ansy+=4
        }
        ansx=1000-ansy-40
        ansy=ansy+40
        ans = ansx+ansy
    }
    if(ans==1000){
        flag=true
    }
    if (flag == true){
        document.getElementById('bool').style.color = "#367E18";
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