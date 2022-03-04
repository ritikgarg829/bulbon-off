const tubelight=() =>{
    for(x=1; x<5; x++){
let allbulb = document.getElementById('bulb'.concat(x));
// ----here we match a src name----- 
if(allbulb.src.match('bulb2')){
    allbulb.src="bulb1.jpg";
}else{
    allbulb.src="bulb2.jpg";
}
}
}