
// google maps api, coding help from CI walkthrough, google maps docs and stack overflow // 

// places markers arrays and infoWindows content //

var map;

var placesMarkers = [];

var poiMarkers = [
    {
        location: {
            lat: 53.401454607754495, 
            lng: -2.992285546295964
        },
        content: "<h6>albert dock</h6><p>opening hours are as follows.</p>"
    },
    {
        location: {
            lat: 53.40035911630307, 
            lng: -2.9765951763200786
        },
        content: "<p>china town</p>"
    },
    {
        location: {
            lat: 53.438972317622344, 
            lng: -2.9663729457028825
        },
        content: "<p>everton</p>"
    },
    {
        location: {
            lat: 53.42090154399837, 
            lng: -2.9747809600030815
        },
        content: "<p>everton park</p>"
    },
    {
        location: {
            lat: 53.40175809903073, 
            lng: -2.9725124878807803
        },
        content: "<p>horizon e-sport club</p>"
    },
    {
        location: {
            lat: 53.43101126801764, 
            lng: -2.9608258015201057
        },
        content: "<p>liverpool fc</p>"
    },
    {
        location: {
            lat: 53.39762340637288, 
            lng: -2.9733766033777096
        },
        content: "<p>liverpool cathederal</p>"
    },
    {
        location: {
            lat: 53.41786966229871, 
            lng: -2.934075386632541
        },
        content: "<p>newsham park and garden</p>"
    },
    {
        location: {
            lat: 53.38735153677401, 
            lng: -2.956470093566677
        },
        content: "<p>princes park</p>"
    },
    {
        location: {
            lat: 53.43561857394004, 
            lng: -2.967768089168168
        },
        content: "<p>stanley park</p>"
    },
    {
        location: {
            lat: 53.40094859005869, 
            lng: -2.9942350880311057
        },
        content: "<p>tate</p>"
    },
    {
        location: {
            lat: 53.399543995759544, 
            lng: -2.9921323880311648
        },
        content: "<p>the beatles story</p>"
    },
    {
        location: {
            lat: 53.4217636806696, 
            lng: -3.0051110691207286
        },
        content: "<p>victoria tower</p>"
    },
    {
        location: {
            lat: 53.41020258076844, 
            lng: -2.979709316867351
        },
        content: "<p>walker art gallery</p>"
    },
    {
        location: {
            lat: 53.40625661213079, 
            lng: -2.9434061856068827
        },
        content: "<p>wavertree botanic gardens</p>"
    },
    {
        location: {
            lat: 53.410125837519765, 
            lng: -2.981372286542844
        },
        content: "<p>world history museum</p>"
    }
];
var stayMarkers = [
    {
        location: {
            lat: 53.400376992378675, 
            lng: -2.9781495457043792
        },
        content: "<p>BASE</p>"
    },
    {
        location: {
            lat: 53.40246111586554, 
            lng: -2.989068945704278
        },
        content: "<p>hilton</p>"
    },
    {
        location: {
            lat: 53.408077483082764, 
            lng: -2.9820831303575934
        },
        content: "<p>marriott</p>"
    },
    {
        location: {
            lat: 53.403892478109945, 
            lng: -2.9831572322140993
        },
        content: "<p>premier inn liverpool city centre</p>"
    },
    {
        location: {
            lat: 53.404976789410135, 
            lng: -2.982064615011278
        },
        content: "<p>quest</p>"
    },
    {
        location: {
            lat: 53.411468594937965, 
            lng: -2.996364504516911
        },
        content: "<p>raddisson blu</p>"
    },
    {
        location: {
            lat: 53.39786420543189, 
            lng: -2.9893835591946236
        },
        content: "<p>staybridge suites</p>"
    },
    {
        location: {
            lat: 53.40280038973694, 
            lng: -2.9806678726845903
        },
        content: "<p>the resident liverpool </p>"
    },
    {
        location: {
            lat: 53.42228718386428, 
            lng: -2.998556588030304
        },
        content: "<p>titanic hotel</p>"
    },
    {
        location: {
            lat: 53.40542889583923, 
            lng: -2.979583443847851
        },
        content: "<p>placeholder</p>"
    },
    {
        location: {
            lat: 53.40542889583923, 
            lng: -2.979583443847851
        },
        content: "<p>placeholder</p>"
    },
    {
        location: {
            lat: 53.40542889583923, 
            lng: -2.979583443847851
        },
        content: "<p>placeholder</p>"
    },
    {
        location: {
            lat: 53.40542889583923, 
            lng: -2.979583443847851
        },
        content: "<p>placeholder</p>"
    },
    {
        location: {
            lat: 53.40542889583923, 
            lng: -2.979583443847851
        },
        content: "<p>placeholder</p>"
    },
    {
        location: {
            lat: 53.40542889583923, 
            lng: -2.979583443847851
        },
        content: "<p>placeholder</p>"
    },
];
var restMarkers = [
    {
        location: {
            lat: 53.40616780118653, 
            lng: -2.979968985069827
        },
        content: "<p>afd wetherspoon</p>"
    },
    {
        location: {
            lat: 53.401140055295386,  
            lng: -2.9688428129528748
        },
        content: "<p>art school restaurant</p>"
    },
    {
        location: {
            lat: 53.40542889583923, 
            lng: -2.979583443847851
        },
        content: "<p>bella italia</p>"
    },
    {
        location: {
            lat: 53.40343049106223, 
            lng: -2.9844827303577763
        },
        content: "<p>bem brazil</p>"
    },
    {
        location: {
            lat: 53.40158450797556, 
            lng: -2.9761467610507935
        },
        content: "<p>big noodle bar</p>"
    },
    {
        location: {
            lat: 53.405707235810276,  
            lng: -2.9808400908790356
        },
        content: "<p>costa coffee</p>"
    },
    {
        location: {
            lat: 53.404294476478285, 
            lng: -2.987313888030986
        },
        content: "<p>five guys</p>"
    },
    {
        location: {
            lat: 53.404402587555, 
            lng: -2.987102516867591
        },
        content: "<p>las iguanas</p>"
    },
    {
        location: {
            lat: 53.40453687163751, 
            lng: -2.986453372684512
        },
        content: "<p>nandos</p>"
    },
    {
        location: {
            lat: 53.40284938594777, 
            lng: -2.977070215011363
        },
        content: "<p>pho</p>"
    },
    {
        location: {
            lat: 53.40401878302513, 
            lng: -2.9863889996648156
        },
        content: "<p>pizza hut</p>"
    },
    {
        location: {
            lat: 53.40540212896286, 
            lng: -2.9788913639435872
        },
        content: "<p>shiraz place</p>"
    },
    {
        location: {
            lat: 53.40498822852394, 
            lng: -2.9797960863692863
        },
        content: "<p>subway</p>"
    },
    {
        location: {
            lat: 53.40375657281823, 
            lng: -2.986866482462038
        },
        content: "<p>tgi fridays</p>"
    },
    {
        location: {
            lat: 53.40510718106745, 
            lng: -2.9815583168675643
        },
        content: "<p>wildwood</p>"
    },
];
var shopMarkers = [
    {
        location: {
            lat: 53.40358328192974, 
            lng: -2.987189111119584
        },
        content: "<p>apple</p>"
    },
    {
        location: {
            lat: 53.405837867165246, 
            lng: -2.9804687940391297
        },
        content: "<p>boots</p>"
    },
    {
        location: {
            lat: 53.40425713139653, 
            lng: -2.9844174029078885
        },
        content: "<p>boss</p>"
    },
    {
        location: {
            lat: 53.40410387943836, 
            lng: -2.9880159597750606
        },
        content: "<p>disney</p>"
    },
    {
        location: {
            lat: 53.40267420490263,  
            lng: -2.977650723214093
        },
        content: "<p>forbidden planet</p>"
    },
    {
        location: {
            lat: 53.403872656793375, 
            lng: -2.986969681900231
        },
        content: "<p>hmv</p>"
    },
    {
        location: {
            lat: 53.403434267712484, 
            lng: -2.9877282830248446
        },
        content: "<p>hollister</p>"
    },
    {
        location: {
            lat: 53.404801644039054, 
            lng: -2.984747554373465
        },
        content: "<p>jd</p>"
    },
    {
        location: {
            lat: 53.402878336618016, 
            lng: -2.986666283164652
        },
        content: "<p>john lewis</p>"
    },
    {
        location: {
            lat: 53.40398504412386, 
            lng: -2.9876937464431954
        },
        content: "<p>lego</p>"
    },
    {
        location: {
            lat: 53.40546171954653, 
            lng: -2.983608575014519
        },
        content: "<p>marks & spencers</p>"
    },
    {
        location: {
            lat: 53.40509535183767, 
            lng: -2.983157783790237
        },
        content: "<p>primark</p>"
    },
    {
        location: {
            lat: 53.40466639782988, 
            lng: -2.9857994621442407
        },
        content: "<p>schuh</p>"
    },
    {
        location: {
            lat: 53.40422311116789, 
            lng: -2.987913917148748
        },
        content: "<p>superdry</p>"
    },
    {
        location: {
            lat: 53.40601930551329,  
            lng: -2.979027239727315
        },
        content: "<p>worlds apart</p>"
    },
];

// function to initiate map //

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { 
            lat: 53.41957871447323,  
            lng: -2.974949498360967
        },
        zoom: 13,
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
        infoWindow.close();
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

    $("#staybtn").on("click", function () {
        clearMarkers();
        showMarkers(stayMarkers);
        })

    $("#restbtn").on("click", function () {
        clearMarkers();
        showMarkers(restMarkers);        
        })

    $("#shopbtn").on("click", function () {
        clearMarkers();
        showMarkers(shopMarkers);
        })
    });
}


    // 53.40317660828174, -2.9882410101174144