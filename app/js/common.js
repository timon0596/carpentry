var gal = document.getElementsByClassName("gallery")[0];
var div = document.createElement('div');
var div2 = document.createElement('div');
var item1 = document.getElementsByClassName("item")[0];
var item2 = document.getElementsByClassName("item");
var itemlngt = item2.length;

div.className = item1.className;
div.innerHTML = item1.innerHTML;
div.id = "firstClone";
gal.insertBefore(div, gal.children[gal.children.length - 2]);
div2.className = item1.className;
div2.innerHTML = item2[itemlngt-1].innerHTML;

div2.id = "lastClone";
gal.insertBefore(div2, gal.children[0]);
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
	items[0].style.left = -wdt + 'px';
	for(let i=0;i<lngt-1;i++){
		items[i+1].style.left = wdt*i + 'px';
	}

};
function transFunc2 (lngt){
	hgt.style.height = parseFloat(getComputedStyle(item1).height) 
	+ "px";
	wdt = parseFloat(getComputedStyle(item1).width);
	
	for(let i=0;i<lngt;i++){
		items[i].style.left = wdt*i - (lngt-2)*wdt + 'px';
	}
	
};
transFunc(lngt);
window.onresize = function (){transFunc(lngt);} 

function next(){
document.getElementById("next").onclick = "";
	for(let i of items){
		i.style.transition = tr;
		i.style.left = parseFloat(i.style.left) - wdt + 'px';
		i.addEventListener('transitionend', function(){
			for(let k of items){
				if(k.id == 'firstClone' && k.style.left == '0px'){
					for(let j of items){j.style.transition = 'none';}
					transFunc(lngt);
				}
			document.getElementById("next").onclick = function(){next();}
			}
		});
	}
};
document.getElementById("next").onclick = function(){next();}
function prev(){
	document.getElementById("prev").onclick = "";
	for(let i of items){
		i.style.transition = tr;
		i.style.left = parseFloat(i.style.left) + wdt + 'px';
		i.addEventListener('transitionend', function(){
			for(let k of items){
				if(k.id == 'lastClone' && k.style.left == '0px'){
					for(let j of items){j.style.transition = 'none';}
					transFunc2(lngt);
				}
			document.getElementById("prev").onclick = function(){prev();}
			}
		});
	}
};
document.getElementById("prev").onclick = function(){prev();}
