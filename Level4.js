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
    if(ansy == NaN||ansx==NaN){
        document.getElementById('bool').textContent = "  "+x+" and "+y+" is 錯誤 , Your answer is " + ans;
        document.getElementById('ans').value = "";
    }
    else{
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
            document.getElementById('bool').textContent = "  "+x+" and "+y+" is Right";
            setTimeout("location.href='/LevelFinish.html'",3000);
        }
        else{
            document.getElementById('bool').textContent = "  "+x+" and "+y+" is Wrong , Your answer is " + ans;
        }
        document.getElementById('ans').value = "";
        
    }
    
  }