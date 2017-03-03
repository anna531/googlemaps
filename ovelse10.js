//variable for tekst
var map;


function initMap() {
    console.log("initMap");

    var hovedindgang = {
        lat: 55.706361,
        lng: 12.539333
    };


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: hovedindgang
    });

        var marker = new google.maps.Marker({
        position: hovedindgang,
        map: map,
        title: 'Hello World!'
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
    console.log(sted);


    // her skal I oprette marker, og infobox, og lave event-funktionen og alt det der

    var marker = new google.maps.Marker({
        position: sted.position,
        map: map,
        //        icon: "icon.png",
        title: sted.title
    });

}
