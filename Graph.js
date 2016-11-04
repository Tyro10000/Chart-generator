var sheet= document.getElementById("pie-chart");
var ctx = sheet.getContext("2d");
ctx.font = "12px Verdana"; 

ctx.fillStyle = "darkblue";
function pieChart(){
    var data = document.getElementById("slices").value;
    var names = document.getElementById("names").value;
    var data = data.split(",");
    var names = names.split(",");
    //alert(data.length);
    
    var colors = ["blue","red","orange","skyblue","darkblue","green","gray"];
    var center = [125,100];
    var radius = Math.min(170,170) / 2;
    var lastPosition = 1.2;
    var total = 0;
    var namePos = 20;
    ctx.clearRect(0,0,sheet.width,sheet.height);
    for (var i = 0; i < data.length; i++) {
    total = total + parseInt(data[i]);
    }
    for (var i = 0; i < data.length; i++) {
        ctx.fillStyle = colors[i];
        var percent = (data[i]*100)/total;
        percent  = percent.toFixed(2);
        ctx.fillRect(225,namePos-10,15,15);
        ctx.fillText(names[i] + " " + percent + "%",250,namePos);
        ctx.beginPath();
        ctx.moveTo(center[0],center[1]);
        ctx.arc(center[0],center[1],radius,lastPosition,lastPosition+(Math.PI*2*(data[i]/total)));
        ctx.lineTo(center[0],center[1]);
        ctx.fill();
        lastPosition += Math.PI*2*(data[i]/total);
        namePos += 20;
    }
}
function Clean(){
    document.getElementById("slices").value = "";
    document.getElementById("names").value = "";
}
function Post(name, type) {
    var data = document.getElementById("slices").value;
    var names = document.getElementById("names").value;
    var data = data.split(",");
    var names = names.split(",");
    var text = "";
    for(var i = 0; i < data.length; i++) {
        text += names[i] + "-" + data[i] + ":";
    }
  var a = document.getElementById("link");
  var file = new Blob([text], {type: type});
  var url = "data:text/plain;charset=utf-8," + "Push";
  a.href = url;
  //a.href = URL.createObjectURL(file);
  a.download = name;
}


