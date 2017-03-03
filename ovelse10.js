//variable for tekst
var map;


function initMap() {
    console.log("initMap");

    var hovedindgang = {
        lat: 55.706361,
        lng: 12.539333
    };


    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: hovedindgang
    });


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
