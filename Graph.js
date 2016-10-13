var sheet= document.getElementById("pie-chart");
var ctx = sheet.getContext("2d");
ctx.font = "15px Verdana"; 

ctx.fillStyle = "darkblue";


function pieChart(){
    var data = document.getElementById("slices").value;
    var names = document.getElementById("names").value;
    var data = data.split(",");
    var names = names.split(",");
    //alert(data.length);
    
    var colors = ["blue","red","orange","skyblue","darkblue","green","gray"];
    var center = [200,150];
    var radius = Math.min(250,250) / 2;
    var lastPosition = 1.2;
    var total = 0;
    var namePos = 100;
    ctx.clearRect(0,0,sheet.width,sheet.height);
    for (var i = 0; i < data.length; i++) {
    total = total + parseInt(data[i]);
    }
    for (var i = 0; i < data.length; i++) {
        ctx.fillStyle = colors[i];
        var percent = (data[i]*100)/total;
        percent  = percent.toFixed(2);
        ctx.fillRect(380,namePos-10,20,20);
        ctx.fillText(names[i] + " " + percent + "%",410,namePos);
        ctx.beginPath();
        ctx.moveTo(center[0],center[1]);
        ctx.arc(center[0],center[1],radius,lastPosition,lastPosition+(Math.PI*2*(data[i]/total)));
        ctx.lineTo(center[0],center[1]);
        ctx.fill();
        lastPosition += Math.PI*2*(data[i]/total);
        namePos += 30;
    }
}