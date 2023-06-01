window.onload = function(){

    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-27.648598,-48.577423),
            scrollwheel:false,
            zoom:12,
            mapTypeId:google.maps.MapTypeID.ROADMAP
        }

        map = new google.maps.Map(document.getElementById("map"),mapProp);
    }

    function addMarker(lat,long,icon,content){
        var latLng = {'lat':lat, 'lng':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:content,
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        infoWindow.open(map,marker);
    }

    initialize();

    var conteudo = '<p style="color:black; font-size:13px">Exemplo de endereço</p>'
    addMarker(-25.094700,-50.163158,'',conteudo);
}