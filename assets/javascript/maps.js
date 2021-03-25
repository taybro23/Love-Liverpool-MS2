
// javascript for google maps, coding help from CI walkthrough, google maps docs, stack overflow and fellow student S Vickers // 

// placesmarkers arrays and infoWindows content //

var map;

var placesMarkers = [];

var stayMarkers = [
    {
        location: {
            lat: 53.400376992378675, 
            lng: -2.9781495457043792
        },
        content: '<a href="https://www.baseservicedapartments.co.uk/" target="_blank"><h5 class="underline">BASE Serviced Apartments Duke Street</h5></a> <h6>136 Duke St, Liverpool, L1 5BB</h6> <p>Tel: 0151 702 9222</p>'
    },
    {
        location: {
            lat: 53.40645557071439,  
            lng: -2.9882876659545814
        },
        content: '<a href="http://www.harddaysnighthotel.com/" target="_blank"><h5 class="underline">Hard Days Night Hotel</h5></a> <h6>Central Buildings, N John St, Liverpool, L2 6RR</h6> <p>Tel: 0151 236 1964</p>'
    },
    {
        location: {
            lat: 53.40246111586554, 
            lng: -2.989068945704278
        },
        content: '<a href="https://www.hilton.com/en/hotels/lplhihi-hilton-liverpool-city-centre/" target="_blank"><h5 class="underline">Hilton Liverpool City Centre</h5></a> <h6>3 Thomas Steers Way, Liverpool, L1 8LW</h6> <p>Tel: 0151 708 4200</p>'
    },
    {
        location: {
            lat: 53.40174798063911, 
            lng: -2.9710356966759215
        },
        content: '<a href="https://www.hopestreethotel.co.uk/" target="_blank"><h5 class="underline">Hope Street Hotel</h5></a> <h6>40 Hope St, Liverpool, L1 9DA</h6> <p>Tel: 0151 709 3000</p>'

    },
    {
        location: {
            lat: 53.40852776861474,  
            lng: -2.993437507530301
        },
        content: '<a href="https://www.hotelindigo.com/hotels/gb/en/liverpool/lplil/hoteldetail?fromRedirect=true&qSrt=sBR&qIta=99603195&icdv=99603195&glat=SEAR&qSlH=LPLIL&setPMCookies=true&qSHBrC=IN&qDest=10%20Chapel%20Street,%20Liverpool,%20GB&dp=true&gclid=CjwKCAjw6fCCBhBNEiwAem5SO3vrFwAfV58j6r58Ylu7_GwPeWPP2NkXyFX7DVngDZuGrMWowwL0ChoCR94QAvD_BwE&cid=58070&srb_u=1" target="_blank"><h5 class="underline">Hotel Indigo Liverpool</h5></a> <h6>10 Chapel St, Liverpool, L3 9AG</h6> <p>Tel: 0151 559 0111</p>'
    },
    {
        location: {
            lat: 53.3960674774933,  
            lng: -2.990690925356584
        },
        content: '<a href="https://www.guestreservations.com/pullman-liverpool/booking?gclid=CjwKCAjw6fCCBhBNEiwAem5SO09yZqz71ACK_CJgnpMrHLosVU-nnpr46AxHJhAcHisMzdQp6xLI-BoCEncQAvD_BwE" target="_blank"><h5 class="underline">Hotel Pullman Liverpool</h5></a> <h6>Kings Dock, Port of Liverpool, Liverpool, L3 4FP</h6> <p>Tel: 0151 945 1000</p>'
    },
    {
        location: {
            lat: 53.39890782385358, 
            lng: -2.989918449120226
        },
        content: '<a href="https://www.jurysinns.com/hotels/liverpool?utm_medium=cpc&gclid=CjwKCAjw6fCCBhBNEiwAem5SOzWuGSULNITc6RZ2cBAGCxiWfEXUNs54fXdTxrw6dkbO6NoM3hiJohoCdXoQAvD_BwE&gclsrc=aw.ds" target="_blank"><h5 class="underline">Jurys Inn Liverpool</h5></a> <h6>31 Keel Wharf, Liverpool, L3 4FN</h6> <p>Tel: 0151 244 3777</p>'
    },
    {
        location: {
            lat: 53.40860451485431, 
            lng: -2.9973428041275647
        },
        content: '<a href="https://www.malmaison.com/locations/liverpool/" target="_blank"><h5 class="underline">Malmaison Liverpool</h5></a> <h6>7 William Jessop Way, Liverpool, L3 1QZ</h6> <p>Tel: 0151 363 3640</p>'

    },
    {
        location: {
            lat: 53.408077483082764, 
            lng: -2.9820831303575934
        },
        content: '<a href="https://www.marriott.co.uk/hotels/travel/lpllp-liverpool-marriott-hotel-city-centre/" target="_blank"><h5 class="underline">Liverpool Marriott Hotel City Centre</h5></a> <h6>One Queen Square, Liverpool, L1 1RH</h6> <p>Tel: 0151 476 8000</p>'
    },
    {
        location: {
            lat: 53.403892478109945, 
            lng: -2.9831572322140993
        },
        content: '<a href="https://www.premierinn.com/gb/en/hotels/england/merseyside/liverpool/liverpool-city-centre-liverpool-one.html" target="_blank"><h5 class="underline">Premier Inn Liverpool City Centre (Liverpool One) Hotel</h5></a> <h6>48 Hanover St, Liverpool, L1 4AF</h6> <p>Tel: 0333 321 9282</p>'
    },
    {
        location: {
            lat: 53.404976789410135, 
            lng: -2.982064615011278
        },
        content: '<a href="https://www.questapartments.co.uk/properties/merseyside/liverpool/quest-liverpool-city-centre/hotel-deals?gclid=CjwKCAjw6fCCBhBNEiwAem5SOys4xheupaNGmcfxVOvWOQZJO0nF6R-Kpe7sJCg0KHiezzQPtjE86BoCu4AQAvD_BwE" target="_blank"><h5 class="underline">Quest Liverpool City Centre</h5></a> <h6>72 Church St, Liverpool L1 3AY</h6> <p>Tel: 0151 318 1809</p>'
    },
    {
        location: {
            lat: 53.411468594937965, 
            lng: -2.996364504516911
        },
        content: '<a href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-liverpool?facilitatorId=RHGSEM&cid=a:ps+b:ggl+c:emea+i:brand+e:rdb+d:ukirwe+r:brt+f:en-US+g:ho+h:LPLZH+v:cf&gclid=CjwKCAjw6fCCBhBNEiwAem5SOz7wYn3DaSmJ-tXVf0Zdwt5cOkbof_St1nv2mlVmiFxmLYmdbg8pwBoCI-AQAvD_BwE&gclsrc=aw.ds" target="_blank"><h5 class="underline">Radisson Blu Hotel Liverpool</h5></a> <h6>107 Old Hall St, Liverpool, L3 9BD</h6> <p>Tel: 0151 966 1500</p>'
    },
    {
        location: {
            lat: 53.39786420543189, 
            lng: -2.9893835591946236
        },
        content: '<a href="https://www.guestreservations.com/staybridge-suites-liverpool/booking?gclid=CjwKCAjw6fCCBhBNEiwAem5SO-ewUJRnUNnzDMVVuHr0vEWWS682qymiWu__32Im3Iby6ZA8yaY6MhoCYcMQAvD_BwE" target="_blank"><h5 class="underline">Staybridge Suites Liverpool</h5></a> <h6>21 Keel Wharf, Liverpool, L3 4FN</h6> <p>Tel: 0151 703 9700</p>'
    },
    {
        location: {
            lat: 53.40280038973694, 
            lng: -2.9806678726845903
        },
        content: '<a href="https://www.residenthotels.com/the-resident-liverpool/" target="_blank"><h5 class="underline">The Resident Liverpool</h5></a> <h6>29 Seel St, Liverpool, L1 4AU</h6> <p>Tel: 0151 705 2626</p>'
    },
    {
        location: {
            lat: 53.41065102729441,  
            lng: -2.9863993907791606
        },
        content: '<a href="https://richmondliverpool.com/" target="_blank"><h5 class="underline">The Richmond Apart-Hotel</h5></a> <h6>24 Hatton Garden, Liverpool, L3 2AA</h6> <p>Tel: 0151 236 1220</p>'
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
            lat: 53.40543819384935,  
            lng: -2.9861029805378076
        },
        content: "<p>mcdonald's lord street</p>"
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
        content: "<p>shiraz palace</p>"
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

// function to initiate map, centre and zoom set //

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { 
            lat: 53.40602916240997,  
            lng: -2.9865655303385044
        },
        zoom: 14,
    });

// changes map centre and zoom on mobile devices //

if (window.screen.width < 768) {
        map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: {
                lat: 53.405361849068626, 
                lng: -2.985339832113623
            },
        });
    };
    
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
};
