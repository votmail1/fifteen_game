window.onload = function (){
	var count = 0,
	b=0,
	intervalID1,
	a,
	x;
	start();
	function start(){
		var field = document.createElement("div");
		count = 0;
		b=0;
		x;
		div = document.createElement("div");
		random = severalRandom(1, 15, 15);
		label = document.createElement("div");
		label.id = "label";
		label.innerHTML = "<strong>Fifteen</strong></br></br><small><small><small>step : </small></small></small>";
		label.style.fontSize = "30px";
		field.id = "field";
		div.id = 'skin';
		document.body.appendChild(div);
		document.getElementById("skin").appendChild(label);
		document.getElementById("skin").appendChild(field);
		for (var i = 1 ; i<=16 ; i++){
			var chip = document.createElement("div");
			chip.className = "chip";
			chip.id = i;
			chip.innerHTML = "</br>"+random[i-1];
			chip.onclick = mov;
			document.getElementById("field").appendChild(chip);
		}
		chip.onmousedown = "dragOBJ(this,event)";
		chip.id = "16";
		chip.className = "chip";
		chip.innerHTML = "</br></br>";
		document.getElementById("field").appendChild(chip);
		function severalRandom(min, max, num) { 
			var i, arr = [], res = [];  
			for (i = min; i <= max; i++ ) arr.push(i); 
			for (i = 0; i < num; i++) res.push(arr.splice(Math.floor(Math.random() * (arr.length)), 1)[0]) 
			return res; 
		}  
	}
	
	function mov(e) {
		e = e || window.event;
		var el = e.target || e.srcElement; 
		var html = el.innerHTML;
		var i = 0;
		for (i=1;i<17;i++){
		    document.getElementById(i).style.cssText = "z-index : 0";
		}
		document.getElementById(el.id).style.cssText = "z-index : 4";
		if ((document.getElementById(+(el.id)+4))&&(document.getElementById(+(el.id)+4).innerHTML === "<br><br>"))	{
			a = function() { 
			document.getElementById(el.id).style.top = i + "px";
			i++;
			if(i >= 59){
					document.getElementById(+(el.id)+4).innerHTML = html;
					document.getElementById(el.id).style.top = 0;
					document.getElementById(el.id).innerHTML = "</br></br>";
				    clearInterval(intervalID1);
		        	winner();
				}
			}
			label.innerHTML = "<strong>Fifteen</strong></br></br><small><small><small>step : "+count+"</small></small></small>";
			 count++;
			 intervalID1 = setInterval(a, 5);
		}
		else if ((document.getElementById(+(el.id)+1))&&(document.getElementById(+(el.id)+1).innerHTML === "<br><br>")){
			a = function() { 
			document.getElementById(el.id).style.cssText = "z-index : 4";
			document.getElementById(el.id).style.left = i + "px";
			i++;
			if(i >= 59){
					document.getElementById(+(el.id)+1).innerHTML = html;
					document.getElementById(el.id).style.left = 0;
					document.getElementById(el.id).innerHTML = "</br></br>";
				    clearInterval(intervalID1);
		        	winner();
			    }
			}
			label.innerHTML = "<strong>Fifteen</strong></br></br><small><small><small>step : "+count+"</small></small></small>";
			count++;
			intervalID1 = setInterval(a, 5);
		}
		else if ((document.getElementById(+(el.id)-4))&&(document.getElementById(+(el.id)-4).innerHTML === "<br><br>")){
			a = function() { 
			document.getElementById(el.id).style.cssText = "z-index : 4";
			document.getElementById(el.id).style.bottom = i + "px";
			i++;
			if(i >= 59){
					document.getElementById(+(el.id)-4).innerHTML = html;
					document.getElementById(el.id).style.bottom = 0;
					document.getElementById(el.id).innerHTML = "</br></br>";
				clearInterval(intervalID1);
		        	winner();
				}
			}
			label.innerHTML = "<strong>Fifteen</strong></br></br><small><small><small>step : "+count+"</small></small></small>";
			count++;
			intervalID1 = setInterval(a, 5);
		}
		else if ((document.getElementById(+(el.id)-1))&&(document.getElementById(+(el.id)-1).innerHTML === "<br><br>")){
			a = function() { 
			document.getElementById(el.id).style.cssText = "z-index : 4";
			document.getElementById(el.id).style.right = i + "px";
			i++;
				if(i >= 59){
					document.getElementById(+(el.id)-1).innerHTML = html;
					document.getElementById(el.id).style.right = 0;
					document.getElementById(el.id).innerHTML = "</br></br>";
				    clearInterval(intervalID1);
			        winner();
				}
			}
			label.innerHTML = "<strong>Fifteen</strong></br></br><small><small><small>step : "+count+"</small></small></small>";
			count++;
			intervalID1 = setInterval(a, 5);
		}
		function winner(){
			for (var i=0; i<16 ; i++){
				x = (document.getElementById(i+1).innerHTML[5])?document.getElementById(i+1).innerHTML[4]+document.getElementById(i+1).innerHTML[5]:document.getElementById(i+1).innerHTML[4];
				if (x!=i+1){
					break
				}
				if (x==15){
					document.getElementById("field").innerHTML = "<div id = 'congr'>YAHOO!!!!<br>YOU DID IT</br><div id='ok'>OK</div></div>";
					document.getElementById("ok").onclick = ok;
					break;
				}
			}
		}	
	}
	function ok (){
	    function remove (el) {
			el.innerHTML = "";
		}
		remove(document.getElementById("body"));
		start();
	}
}