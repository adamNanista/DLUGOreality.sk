
function mapDialog(gpsX,gpsY,address) {
	var kdeSaNachadza = 'Kde sa nehnuteľnosť nachádza?';
	
	if($("#lng").val()=='en') kdeSaNachadza = 'Where is the property located?';
	if($("#lng").val()=='de') kdeSaNachadza = 'Wo befindet sich die Immobilie?';
	//dodatocne doplnenie jazyka - cez toto IDcko, pretoze #lng pri primarnom jazyku vracia prazdny string a tak neviem zistit aktualny jazyk
	//#lang je vo sablone module.copyright.html daneho webu (lang posielany z kontrolera v cmsV3 -> modCopyright)
	if($("#currentLang").data("lang") == "ro_RO") kdeSaNachadza = 'Unde este situatÄ proprietatea?';

	/*var canvas='map_canvas'+Math.random();
	var dialog='dialog'+Math.random();
	$('<div id="'+dialog+'"><div id="'+canvas+'" style="width:500px;height:500px;"></div></div>').dialog({
		open:function(){drawMap(gpsX,gpsY,address,canvas);},
		modal:true,
		width:530,
		height:555,
		title:kdeSaNachadza,
		resizable: false
	});*/
	
	var canvas = document.querySelector('#map');
	
	if (typeof(canvas) != 'undefined' && canvas != null) {
		drawMap(gpsX,gpsY,address,canvas);
	}
	
}

function drawMap(gpsX,gpsY,address,canvas) {

	gpsX=gpsX.replace(",",".");
	gpsY=gpsY.replace(",",".");
	
	var mymap = L.map(canvas).setView([gpsX, gpsY], 16);
	
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(mymap);
	
	L.marker([gpsX, gpsY]).addTo(mymap);
    
}