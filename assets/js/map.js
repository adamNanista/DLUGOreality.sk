
function mapDialog(gpsX,gpsY,address) {
	var kdeSaNachadza = 'Kde sa nehnuteľnosť nachádza?';
	
	if($("#lng").val()=='en') kdeSaNachadza = 'Where is the property located?';
	if($("#lng").val()=='de') kdeSaNachadza = 'Wo befindet sich die Immobilie?';
	//dodatocne doplnenie jazyka - cez toto IDcko, pretoze #lng pri primarnom jazyku vracia prazdny string a tak neviem zistit aktualny jazyk
	//#lang je vo sablone module.copyright.html daneho webu (lang posielany z kontrolera v cmsV3 -> modCopyright)
	if($("#currentLang").data("lang") == "ro_RO") kdeSaNachadza = 'Unde este situatÄ proprietatea?';

	var canvas='map_canvas'+Math.random();
	var dialog='dialog'+Math.random();
	$('<div id="'+dialog+'"><div id="'+canvas+'" style="width:500px;height:500px;"></div></div>').dialog({
		open:function(){drawMap(gpsX,gpsY,address,canvas);},
		modal:true,
		width:530,
		height:555,
		title:kdeSaNachadza,
		resizable: false
	});
}

function drawMap(gpsX,gpsY,address,canvas) {

	gpsX=gpsX.toString().replace(",",".");
	gpsY=gpsY.toString().replace(",",".");
	
	var mymap = L.map(canvas).setView([gpsX, -gpsY], 13);

	/*map = new OpenLayers.Map(canvas);
    map.addLayer(new OpenLayers.Layer.OSM());

    var lonLat = new OpenLayers.LonLat( gpsY, gpsX )
          .transform(
            new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
            map.getProjectionObject() // to Spherical Mercator Projection
          );
          
    var zoom=16;

    var markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
    
    markers.addMarker(new OpenLayers.Marker(lonLat));
    
    map.setCenter (lonLat, zoom);*/
    
}