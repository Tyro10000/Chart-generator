        
var loc = 0;
function goals() {
        if(loc < 600){
    	    scrolldelay = setTimeout('goals()',5);
            window.scrollBy(0,10);
            loc = loc + 10;
        }
        else
        scrolldelay = setTimeout(reset,1000);
        
}
function meetings() {
        if(loc < 1100){
    	    scrolldelay = setTimeout('meetings()',5);
            window.scrollBy(0,10);
            loc = loc + 10;
        }
        else
        scrolldelay = setTimeout(reset,1000);
}
function mentors() {
        if(loc < 1500){
    	    scrolldelay = setTimeout('mentors()',5);
            window.scrollBy(0,10);
            loc = loc + 10;
        }
        else
        scrolldelay = setTimeout(reset,1000);
}
function plans() {
        if(loc < 2000){
    	    scrolldelay = setTimeout('plans()',5);
            window.scrollBy(0,10);
            loc = loc + 10;
        }
        else
        scrolldelay = setTimeout(reset,1000);
}
function contact() {
        if(loc < 2400){
    	    scrolldelay = setTimeout('contact()',5);
            window.scrollBy(0,10);
            loc = loc + 10;
        }
        else
        scrolldelay = setTimeout(reset,1000);
}
function reset(){
loc = 0;
}