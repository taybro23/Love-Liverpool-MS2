
// javascript for google maps, coding help from CI walkthrough, google maps docs, stack overflow and fellow student S Vickers // 

// placesmarkers arrays and infoWindows content //

let map;

const placesMarkers = [];

const stayMarkers = [
    {
        location: {
            lat: 53.400376992378675, 
            lng: -2.9781495457043792
        },
        content: '<a href="https://www.baseservicedapartments.co.uk/" target="_blank"><h5>BASE Serviced Apartments Duke Street</h5></a> <h6>136 Duke St, Liverpool, L1 5BB</h6> <p>Tel: 0151 702 9222</p>'
    },
    {
        location: {
            lat: 53.40645557071439,  
            lng: -2.9882876659545814
        },
        content: '<a href="http://www.harddaysnighthotel.com/" target="_blank"><h5>Hard Days Night Hotel</h5></a> <h6>Central Buildings, N John St, Liverpool, L2 6RR</h6> <p>Tel: 0151 236 1964</p>'
    },
    {
        location: {
            lat: 53.40246111586554, 
            lng: -2.989068945704278
        },
        content: '<a href="https://www.hilton.com/en/hotels/lplhihi-hilton-liverpool-city-centre/" target="_blank"><h5>Hilton Liverpool City Centre</h5></a> <h6>3 Thomas Steers Way, Liverpool, L1 8LW</h6> <p>Tel: 0151 708 4200</p>'
    },
    {
        location: {
            lat: 53.40174798063911, 
            lng: -2.9710356966759215
        },
        content: '<a href="https://www.hopestreethotel.co.uk/" target="_blank"><h5>Hope Street Hotel</h5></a> <h6>40 Hope St, Liverpool, L1 9DA</h6> <p>Tel: 0151 709 3000</p>'

    },
    {
        location: {
            lat: 53.40852776861474,  
            lng: -2.993437507530301
        },
        content: '<a href="https://www.ihg.com/hotelindigo/hotels/gb/en/liverpool/lplil/hoteldetail" target="_blank"><h5>Hotel Indigo Liverpool</h5></a> <h6>10 Chapel St, Liverpool, L3 9AG</h6> <p>Tel: 0151 559 0111</p>'
    },
    {
        location: {
            lat: 53.3960674774933,  
            lng: -2.990690925356584
        },
        content: '<a href="https://www.guestreservations.com/pullman-liverpool/booking?gclid=CjwKCAjw6fCCBhBNEiwAem5SO09yZqz71ACK_CJgnpMrHLosVU-nnpr46AxHJhAcHisMzdQp6xLI-BoCEncQAvD_BwE" target="_blank"><h5>Hotel Pullman Liverpool</h5></a> <h6>Kings Dock, Port of Liverpool, Liverpool, L3 4FP</h6> <p>Tel: 0151 945 1000</p>'
    },
    {
        location: {
            lat: 53.39890782385358, 
            lng: -2.989918449120226
        },
        content: '<a href="https://www.jurysinns.com/hotels/liverpool?utm_medium=cpc&gclid=CjwKCAjw6fCCBhBNEiwAem5SOzWuGSULNITc6RZ2cBAGCxiWfEXUNs54fXdTxrw6dkbO6NoM3hiJohoCdXoQAvD_BwE&gclsrc=aw.ds" target="_blank"><h5>Jurys Inn Liverpool</h5></a> <h6>31 Keel Wharf, Liverpool, L3 4FN</h6> <p>Tel: 0151 244 3777</p>'
    },
    {
        location: {
            lat: 53.40860451485431, 
            lng: -2.9973428041275647
        },
        content: '<a href="https://www.malmaison.com/locations/liverpool/" target="_blank"><h5>Malmaison Liverpool</h5></a> <h6>7 William Jessop Way, Liverpool, L3 1QZ</h6> <p>Tel: 0151 363 3640</p>'

    },
    {
        location: {
            lat: 53.408077483082764, 
            lng: -2.9820831303575934
        },
        content: '<a href="https://www.marriott.co.uk/hotels/travel/lpllp-liverpool-marriott-hotel-city-centre/" target="_blank"><h5>Liverpool Marriott Hotel City Centre</h5></a> <h6>One Queen Square, Liverpool, L1 1RH</h6> <p>Tel: 0151 476 8000</p>'
    },
    {
        location: {
            lat: 53.403892478109945, 
            lng: -2.9831572322140993
        },
        content: '<a href="https://www.premierinn.com/gb/en/hotels/england/merseyside/liverpool/liverpool-city-centre-liverpool-one.html" target="_blank"><h5>Premier Inn Liverpool City Centre (Liverpool One) Hotel</h5></a> <h6>48 Hanover St, Liverpool, L1 4AF</h6> <p>Tel: 0333 321 9282</p>'
    },
    {
        location: {
            lat: 53.404976789410135, 
            lng: -2.982064615011278
        },
        content: '<a href="https://www.questapartments.co.uk/properties/merseyside/liverpool/quest-liverpool-city-centre/hotel-deals?gclid=CjwKCAjw6fCCBhBNEiwAem5SOys4xheupaNGmcfxVOvWOQZJO0nF6R-Kpe7sJCg0KHiezzQPtjE86BoCu4AQAvD_BwE" target="_blank"><h5>Quest Liverpool City Centre</h5></a> <h6>72 Church St, Liverpool, L1 3AY</h6> <p>Tel: 0151 318 1809</p>'
    },
    {
        location: {
            lat: 53.411468594937965, 
            lng: -2.996364504516911
        },
        content: '<a href="https://www.radissonhotels.com/en-us/hotels/radisson-blu-liverpool" target="_blank"><h5>Radisson Blu Hotel Liverpool</h5></a> <h6>107 Old Hall St, Liverpool, L3 9BD</h6> <p>Tel: 0151 966 1500</p>'
    },
    {
        location: {
            lat: 53.39786420543189, 
            lng: -2.9893835591946236
        },
        content: '<a href="https://www.guestreservations.com/staybridge-suites-liverpool/booking?gclid=CjwKCAjw6fCCBhBNEiwAem5SO-ewUJRnUNnzDMVVuHr0vEWWS682qymiWu__32Im3Iby6ZA8yaY6MhoCYcMQAvD_BwE" target="_blank"><h5>Staybridge Suites Liverpool</h5></a> <h6>21 Keel Wharf, Liverpool, L3 4FN</h6> <p>Tel: 0151 703 9700</p>'
    },
    {
        location: {
            lat: 53.40280038973694, 
            lng: -2.9806678726845903
        },
        content: '<a href="https://www.residenthotels.com/the-resident-liverpool/" target="_blank"><h5>The Resident Liverpool</h5></a> <h6>29 Seel St, Liverpool, L1 4AU</h6> <p>Tel: 0151 705 2626</p>'
    },
    {
        location: {
            lat: 53.41065102729441,  
            lng: -2.9863993907791606
        },
        content: '<a href="https://richmondliverpool.com/" target="_blank"><h5>The Richmond Apart-Hotel</h5></a> <h6>24 Hatton Garden, Liverpool, L3 2AA</h6> <p>Tel: 0151 236 1220</p>'
    },
];
const restMarkers = [
    {
        location: {
            lat: 53.40616780118653, 
            lng: -2.979968985069827
        },
        content: '<a href="https://www.jdwetherspoon.com/pubs/all-pubs/england/merseyside/the-richard-john-blackler-liverpool" target="_blank"><h5>The Richard John Blackler - J D Wetherspoon</h5></a> <h6>Units 1 & 2, Charlotte Row, Great Charlotte St, Liverpool, L1 1HU</h6> <p>Tel: 0151 709 4802</p>'
    },
    {
        location: {
            lat: 53.40542889583923, 
            lng: -2.979583443847851
        },
        content: '<a href="https://www.bellaitalia.co.uk/italian-restaurant/liverpool/ranelagh-street" target="_blank"><h5>Bella Italia Liverpool</h5></a> <h6>39 Ranelagh St, Liverpool, L1 1JP</h6> <p>Tel: 0151 459 8133</p>'
    },
    {
        location: {
            lat: 53.40343049106223, 
            lng: -2.9844827303577763
        },
        content: '<a href="https://www.bellaitalia.co.uk/italian-restaurant/liverpool/ranelagh-street" target="_blank"><h5>Bem Brasil Liverpool</h5></a> <h6>47-49 Hanover St, Liverpool, L1 3DN</h6> <p>Tel: 0151 709 0044</p>'
    },
    {
        location: {
            lat: 53.40158450797556, 
            lng: -2.9761467610507935
        },
        content: '<a href="https://www.tripadvisor.co.uk/Restaurant_Review-g186337-d2540768-Reviews-Big_Bowl_Noodle_Bar-Liverpool_Merseyside_England.html" target="_blank"><h5>Big Bowl Noodle Bar</h5></a> <h6>12-14 Berry St, Liverpool, L1 4JF</h6> <p>Tel: 0151 707 1559</p>'
    },
    {
        location: {
            lat: 53.405707235810276,  
            lng: -2.9808400908790356
        },
        content: '<a href="https://www.costa.co.uk/" target="_blank"><h5>Costa Coffee</h5></a> <h6>Great Charlotte St, Liverpool, L1 1QR</h6> <p>Tel: 0151 708 8503</p>'
    },
    {
        location: {
            lat: 53.404294476478285, 
            lng: -2.987313888030986
        },
        content: '<a href="https://restaurants.fiveguys.co.uk/north-west/p3/p4-the-terrace-14-paradise-st" target="_blank"><h5>Five Guys Burger & Fries</h5></a> <h6>The Terrace, P3/P4, 14 Paradise St, Liverpool, L1 8JF</h6> <p>Tel: 0151 709 3479</p>'
    },
    {
        location: {
            lat: 53.404402587555, 
            lng: -2.987102516867591
        },
        content: '<a href="https://www.iguanas.co.uk/restaurants/liverpool" target="_blank"><h5>Las Iguanas - Liverpool</h5></a> <h6>One, 14 Paradise St, Liverpool, L1 8JF</h6> <p>Tel: 0151 459 8161</p>'
    },
    {
        location: {
            lat: 53.40543819384935,  
            lng: -2.9861029805378076
        },
        content: '<a href="https://www.mcdonalds.com/gb/en-gb/location/liverpool/liverpool-lord-st/8286-lord-street/8260178.html" target="_blank"><h5>McDonalds Liverpool Lord St</h5></a> <h6>82/86 Lord St, Liverpool, L2 1TL</h6> <p>Tel: 0151 709 1716</p>'
    },
    {
        location: {
            lat: 53.40453687163751, 
            lng: -2.986453372684512
        },
        content: '<a href="https://www.nandos.co.uk/restaurants/liverpool-one" target="_blank"><h5>Nandos Liverpool - ONE</h5></a> <h6>ONE, 14 Paradise St Unit P1r, Liverpool, L1 8JF</h6> <p>Tel: 0151 709 7780</p>'
    },
    {
        location: {
            lat: 53.40284938594777, 
            lng: -2.977070215011363
        },
        content: '<a href="https://www.phocafe.co.uk/locations/liverpool/" target="_blank"><h5>Pho</h5></a> <h6>79 Bold St, Liverpool, L1 4EZ</h6> <p>Tel: 0151 909 8450</p>'
    },
    {
        location: {
            lat: 53.40401878302513, 
            lng: -2.9863889996648156
        },
        content: '<a href="https://www.pizzahut.co.uk/restaurants/find-a-hut/liverpool/liverpool-paradise-st/" target="_blank"><h5>Pizza Hut Liverpool One</h5></a> <h6>Unit P3R Block, 13b Paradise St, Liverpool, L1 8JF</h6> <p>Tel: 0151 708 6600</p>'
    },
    {
        location: {
            lat: 53.40540212896286, 
            lng: -2.9788913639435872
        },
        content: '<a href="http://www.shirazpalace.co.uk/" target="_blank"><h5>Shiraz Palace</h5></a> <h6>45 Ranelagh St, Liverpool, L1 1JR</h6> <p>Tel: 0151 707 7700</p>'
    },
    {
        location: {
            lat: 53.40498822852394, 
            lng: -2.9797960863692863
        },
        content: '<a href="https://www.subway.com/en-gb/" target="_blank"><h5>Subway</h5></a> <h6>Unit 3 Central Shopping Centre Unit 3, Liverpool, L1 1QT</h6> <p>Tel: 0151 709 4514</p>'
    },
    {
        location: {
            lat: 53.40375657281823, 
            lng: -2.986866482462038
        },
        content: '<a href="https://www.tgifridays.co.uk/locations/liverpool-one/" target="_blank"><h5>TGI Fridays - Liverpool One</h5></a> <h6>14 Paradise St, Liverpool, L1 8JF</h6> <p>Tel: 0330 460 5510</p>'
    },
    {
        location: {
            lat: 53.40510718106745, 
            lng: -2.9815583168675643
        },
        content: '<a href="https://wildwoodrestaurants.co.uk/restaurant/liverpool/" target="_blank"><h5>Wildwood</h5></a> <h6>Unit 2a Clayton Square Shopping Centre, 2 Church St, Liverpool, L1 1QR</h6> <p>Tel: 0151 541 2900</p>'
    },
];
const shopMarkers = [
    {
        location: {
            lat: 53.40358328192974, 
            lng: -2.987189111119584
        },
        content: '<a href="https://www.apple.com/uk/retail/liverpool/" target="_blank"><h5>Apple</h5></a> <h6>One, Liverpool, L1 8BU</h6> <p>Tel: 0151 472 7200</p>'
    },
    {
        location: {
            lat: 53.405837867165246, 
            lng: -2.9804687940391297
        },
        content: '<a href="https://www.boots.com/stores/1150-liverpool-clayton-square-l1-1qr" target="_blank"><h5>Boots</h5></a> <h6>Great Charlotte St, Liverpool, L1 1QR</h6> <p>Tel: 0151 709 4711</p>'
    },
    {
        location: {
            lat: 53.40425713139653, 
            lng: -2.9844174029078885
        },
        content: '<a href="https://www.hugoboss.com/uk/boss-store-16-peters-arcade-liverpool/" target="_blank"><h5>BOSS</h5></a> <h6>One, Peters Arcade, 16, Liverpool, L1 3DE</h6> <p>Tel: 0151 702 0390</p>'
    },
    {
        location: {
            lat: 53.40410387943836, 
            lng: -2.9880159597750606
        },
        content: '<a href="https://stores.shopdisney.co.uk/liverpool/liverpool/790/" target="_blank"><h5>Disney Store</h5></a> <h6>Units 41 and 42, S John St, Liverpool, L1 8BJ</h6> <p>Tel: 0151 708 5053</p>'
    },
    {
        location: {
            lat: 53.40267420490263,  
            lng: -2.977650723214093
        },
        content: '<a href="https://forbiddenplanet.com/stores/liverpool-store/" target="_blank"><h5>Forbidden Planet</h5></a> <h6>92 Bold St, Liverpool, L1 4HY</h6> <p>Tel: 0151 707 1491</p>'
    },
    {
        location: {
            lat: 53.403872656793375, 
            lng: -2.986969681900231
        },
        content: '<a href="https://www.hmv.com/store-finder/hmv-liverpool-one" target="_blank"><h5>HMV</h5></a> <h6>One, Unit 71, 72, 19 S John St, Liverpool, L1 8BJ</h6> <p>Tel: 0843 221 0257</p>'
    },
    {
        location: {
            lat: 53.403434267712484, 
            lng: -2.9877282830248446
        },
        content: '<a href="https://www.hollisterco.com/shop/uk/clothing-stores/GB/Liverpool/GB/30177" target="_blank"><h5>Hollister Co.</h5></a> <h6>Unit 60, 62 S John St, Liverpool, L1 8BJ</h6> <p>Tel: 0151 707 8182</p>'
    },
    {
        location: {
            lat: 53.404801644039054, 
            lng: -2.984747554373465
        },
        content: '<a href="https://www.jdsports.co.uk/store-locator/liverpool-one/263/" target="_blank"><h5>JD Sports</h5></a> <h6>One, 4 Paradise St, Msu4B, Liverpool, L1 8JF</h6> <p>Tel: 0151 559 1351</p>'
    },
    {
        location: {
            lat: 53.402878336618016, 
            lng: -2.986666283164652
        },
        content: '<a href="https://www.johnlewis.com/our-shops/liverpool" target="_blank"><h5>John Lewis & Partners</h5></a> <h6>70 S John St, Liverpool, L1 8BJ</h6> <p>Tel: 0151 709 7070</p>'
    },
    {
        location: {
            lat: 53.40398504412386, 
            lng: -2.9876937464431954
        },
        content: '<a href="https://www.lego.com/en-gb/stores" target="_blank"><h5>The LEGO® Store Liverpool</h5></a> <h6>50 South John Street Liverpool One Shopping Centre, Liverpool, L1 8BJ</h6> <p>Tel: 0151 708 6017</p>'
    },
    {
        location: {
            lat: 53.40546171954653, 
            lng: -2.983608575014519
        },
        content: '<a href="https://www.marksandspencer.com/stores/liverpool-0437" target="_blank"><h5>Marks and Spencer</h5></a> <h6>35 Church St, Liverpool, L1 1DF</h6> <p>Tel: 0151 708 8383</p>'
    },
    {
        location: {
            lat: 53.40509535183767, 
            lng: -2.983157783790237
        },
        content: '<a href="https://stores.primark.com/united-kingdom/liverpool/48-56-church-street" target="_blank"><h5>Primark</h5></a> <h6>48 - 56 Church St, Liverpool, L1 3AY</h6> <p>Tel: 0151 709 4635</p>'
    },
    {
        location: {
            lat: 53.40466639782988, 
            lng: -2.9857994621442407
        },
        content: '<a href="https://www.schuh.co.uk/stores/liverpool-one/" target="_blank"><h5>Schuh</h5></a> <h6>Liverpool One Shopping Centre, 17/18 Paradise St, Liverpool, L1 3EU</h6> <p>Tel: 0151 909 4643</p>'
    },
    {
        location: {
            lat: 53.40422311116789, 
            lng: -2.987913917148748
        },
        content: '<a href="https://stores.superdry.com/gb/liverpool/msu2a" target="_blank"><h5>Superdry</h5></a> <h6>MSU2a, 5 S John St, Liverpool, L1 8BJ</h6> <p>Tel: 0151 707 7733</p>'
    },
    {
        location: {
            lat: 53.40601930551329,  
            lng: -2.979027239727315
        },
        content: '<a href="https://forbiddenplanet.co.uk/tag/worlds-apart-liverpool/" target="_blank"><h5>Worlds Apart</h5></a> <h6>Lime Court, 58-60 Lime St, Liverpool, L1 1JN</h6> <p>Tel: 0151 707 0839</p>'
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
    
// variable for infoWindows //

const infoWindow = new google.maps.InfoWindow();

// function for the markers to appear when a button is clicked // 

function addMarker(places) {
    let marker = new google.maps.Marker({
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
})};
