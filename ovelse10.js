window.addEventListener("load", sidenVises);

//variable for tekst


function sidenVises() {
    console.log("siden vises");

    $.getJSON("ovelse10.json", visSteder);
}

function visSteder(steder) {
    console.table(steder);
    steder.forEach(visSted);

}

function visSted(sted) {
    console.log(sted);




}

function initMap() {
    var rumfaergen = {
        lat: 55.706361,
        lng: 12.539333
    };


    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: rumfaergen
    });

    var marker = new google.maps.Marker({
        position: rumfaergen,
        map: map,
        title: 'Hello World!'
    });
}
