var gal = document.getElementsByClassName("gallery")[0];
var div = document.createElement('div');
var item1 = document.getElementsByClassName("item")[0];
div.className = item1.className;
div.innerHTML = item1.innerHTML;
div.id = "firstClone";
gal.insertBefore(div, gal.children[gal.children.length - 2]);
var items = document.getElementsByClassName("item");
var itemWdt = parseFloat(getComputedStyle(item1).height);
var hgt = document.getElementsByClassName("container")[0];
var wdt;
var lngt = items.length;
var tr = item1.style.transition;

function transFunc (lngt){
	hgt.style.height = parseFloat(getComputedStyle(item1).height) 
	+ "px";
	wdt = parseFloat(getComputedStyle(item1).width);
	for(let i=0;i<lngt;i++){
		items[i].style.left = wdt*i + 'px';
	}
};
transFunc(lngt);
window.onresize = function (){transFunc(lngt);} 
var galInnerHTML = gal.innerHTML;
function next(){

	for(let i of items){
		i.style.transition = tr;
		i.style.left = parseFloat(i.style.left) - wdt + 'px';
		i.addEventListener('transitionend', function(){
			for(let k of items){
				if(k.id == 'firstClone' && k.style.left == '0px'){
					for(let j of items){j.style.transition = 'none';}
					transFunc(lngt);
				}
			}
		});
	}
};
document.getElementById("next").onclick = function(){
	
	
	next();
}


