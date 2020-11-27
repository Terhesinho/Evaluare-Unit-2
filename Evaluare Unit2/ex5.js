
var slideIndex=0;
showSlidesResurse();
function showSlidesResurse(){
     var i;
     var slides=document.getElementsByClassName("Resurse");
	 for(i=0;i<slides.length;i++){
	     slides[i].style.display="none";
		 }
	slideIndex++;
    if (slideIndex>slides.length) 
	{slideIndex=1}
    slides[slideIndex-1].style.display="block";
    setTimeout(showSlidesResurse,3000);	
	 }
