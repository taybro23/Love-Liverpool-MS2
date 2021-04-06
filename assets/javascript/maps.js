
// javascript for google maps, coding help from CI walkthrough, google maps docs, stack overflow and fellow student S Vickers // 

let map;

const placesMarkers = [];

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
