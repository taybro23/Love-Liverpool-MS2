
// google maps api, coding help from CI walkthrough, google maps docs and stack overflow // 

// places markers arrays and infoWindows content //

var map;

var placesMarkers = [];

var poiMarkers = [
    {
        location: {
            lat: 53.39958720492793, 
            lng: -2.991979501521292
        },
        content: "<p>albert dock</p>"
    }
];
var stayMarkers = [
    {
        location: {
            lat: 53.400376992378675, 
            lng: -2.9781495457043792
        },
        content: "<p>BASE</p>"
    }
];
var restMarkers = [

];
var shopMarkers = [

];

// function to initiate map //

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { 
            lat: 53.40382458576616, 
            lng: -2.9867386051942555
        },
        zoom: 12,
    });
    
// variable array for infoWindows //

var infoWindow = new google.maps.InfoWindow();

// function for the markers to appear when a button is clicked // 
function addMarker(places) {
    var marker = new google.maps.Marker({
        position: places.location,
        map: map,
        animation: google.maps.Animation.DROP,
        });

    placesMarkers.push(marker);

    marker.addListener("click", function () {
        infoWindow.setContent(places.content);
        infoWindow.open(map, marker);
        });
    };

// 'for loop' to show and clear markers on the map // 

function showMarkers(markers) {
    for (i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
        }
    };

function clearMarkers() {
    for (let i = 0; i < placesMarkers.length; i++) {
        placesMarkers[i].setMap(null);
        }
    };

// jquery .on"click" functions that links to each button //  

$(document).ready(function () {
    $("#placesbtn").on("click", function () {
        clearMarkers();
        showMarkers(poiMarkers);
        })
    });

$(document).ready(function () {
    $("#staybtn").on("click", function () {
        clearMarkers();
        showMarkers(stayMarkers);
        })
    });

$(document).ready(function () {
    $("#restbtn").on("click", function () {
        clearMarkers();
        showMarkers(restMarkers);
        })
    });

$(document).ready(function () {
    $("#shopbtn").on("click", function () {
        clearMarkers();
        showMarkers(shopMarkers);
        })
    });

/*

places of interest lat lng

albert dock {lat: 53.39958720492793, lng: -2.991979501521292}
everton stadium {lat: 53.438972317622344, lng: -2.9663729457028825}
lfc stadium {lat: 53.43101126801764, lng: -2.9608258015201057}
liverpool cathederal {lat: 53.39762340637288, lng: -2.9733766033777096}
merseyside maritime museum {lat: 53.401428591500945, lng: -2.993585559194494}
peaky blinders tour {lat: 53.40041757904953, lng: -2.9903025593697157}
tate {lat: 53.40094859005869, lng: -2.9942350880311057}
the beatles story {lat: 53.399543995759544, lng: -2.9921323880311648}
walker art gallery {lat: 53.41020258076844, lng: -2.979709316867351}
world museum {lat: 53.410125837519765, lng: -2.981372286542844}


places to stay lat lng

BASE serviced apartments duke street {lat: 53.400376992378675, lng: -2.9781495457043792}
hilton {lat: 53.40246111586554, lng: -2.989068945704278}
liverpool marriott {lat: 53.408077483082764, lng: -2.9820831303575934}
premier inn liverpool city centre L1 {lat: 53.403892478109945, lng: -2.9831572322140993}
quest liverpool {lat: 53.404976789410135, lng: -2.982064615011278}
radisson blu hotel liverpool {lat: 53.411468594937965, lng: -2.996364504516911}
staybridge suites {lat: 53.39786420543189, lng: -2.9893835591946236}
the resident liverpool {lat: 53.40280038973694, lng: -2.9806678726845903}
titanic hotel {lat: 53.42228718386428, lng: -2.998556588030304}


restaurants lat lng

bella italia {lat: 53.40542889583923, lng: -2.979583443847851}
bem brazil {lat: 53.40343049106223, lng: -2.9844827303577763}
big noodle bar {lat: 53.40158450797556, lng: -2.9761467610507935}
five guys {lat: 53.404294476478285, lng: -2.987313888030986}
las iguanas {lat: 53.404402587555, lng: -2.987102516867591}
nandos {lat: 53.40453687163751, lng: -2.986453372684512}
pho {lat: 53.40284938594777, lng: -2.977070215011363}
pizza hut {lat: 53.40401878302513, lng: -2.9863889996648156}
tgi fridays {lat: 53.40375657281823, lng: -2.986866482462038}
wildwood {lat: 53.40510718106745, lng: -2.9815583168675643}


shopping lat lng

adidas {lat: 53.40413729231273, lng: -2.9880178303577543}
apple {lat: 53.40358328192974, lng: -2.987189111119584}
disney {lat: 53.40410387943836, lng: -2.9880159597750606}
hmv {lat: 53.403872656793375, lng: -2.986969681900231}
hollister {lat: 53.403434267712484, lng: -2.9877282830248446}
jd {lat: 53.404801644039054, lng: -2.984747554373465}
john lewis {lat: 53.402878336618016, lng: -2.986666283164652}
lego {lat: 53.40398504412386, lng: -2.9876937464431954}
schuh {lat: 53.40466639782988, lng: -2.9857994621442407}
superdry {lat: 53.40422311116789, lng: -2.987913917148748}

*/}