//variable for tekst
var map;


function initMap() {
    console.log("initMap");

    var hovedindgang = {
        lat: 55.706361,
        lng: 12.539333
    };


    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: hovedindgang
    });

    var bounds = {
        north: 55.708016357370358,
        south: 55.705012897352266,
        east: 12.542251594264926,
        west: 12.536814405734958

    }

    var overlay = new google.maps.GroundOverlay('overlay-01.svg', bounds);
    overlay.setMap(map);


    console.log("Load JSON")
    $.getJSON("ovelse10.json", visSteder);




}



function visSteder(steder) {
    console.log("JSON er loadet");
    console.table(steder);
    steder.forEach(visSted);

}

function visSted(sted) {
    console.log("visSted:", sted);


    // her skal I oprette marker, og infobox, og lave event-funktionen og alt det der

    var marker = new google.maps.Marker({
        position: sted.position,
        map: map,
        //        icon: "icon.png",
        title: sted.title
    });


    marker.addListener("click", klikPaaIkon);

    function klikPaaIkon() {
        console.log("klik på ikon");

        var infowindow = new google.maps.InfoWindow({

        });
        var klon = document.querySelector("#informationskasse").content.cloneNode(true);

        klon.querySelector(".data_navn").textContent = sted.navn;
        klon.querySelector(".data_billede").src = sted.billede;

        klon.querySelector(".data_beskrivelse").textContent = sted.beskrivelse;




        //under kloner
        infowindow.setContent(klon);

        infowindow.open(map, marker);
    }





}
