// Pure Javascript to hide menu

function responsiveNav() {
	var list = document.getElementById("myTopnav");

	if (list.style.display == "none") {
		list.style.display = "block";
	} else {
		list.style.display = "none";
	}
}

// Jquery to move menu and menu icon to different position

function moveMenu() {
	if ($(window).width() >= 640) {
		$('.menu').insertAfter('.info');
		$('.topnav').insertAfter('.menu');
	} else {
		$('.menu').insertAfter('.logo_text');
		$('.topnav').insertAfter('.menu');
	}
}

moveMenu();
$(window).resize(moveMenu);

// Vegas slideshow

$(".slider").vegas({
	timer : false,
	slides : [{
		src : "http://exhibition.aleixsabate.com/files/2013/05/1.jpg"
	}, {
		src : "http://exhibition.aleixsabate.com/files/2013/05/2.jpg"
	}, {
		src : "http://exhibition.aleixsabate.com/files/2013/05/3.jpg"
	}]
});

$('.right_arrow').on('click', function() {
	$(".slider").vegas('next');
});

$('.left_arrow').on('click', function() {
	$(".slider").vegas('previous');
});

// Owl Carousel - Gallery

$(document).ready(function() {

	var owl = $("#gallery_slider");

	owl.owlCarousel({
		pagination : true,
		slideSpeed : 800,
		items : 3,
		itemsTablet : [1024, 2],
		itemsTabletSmall : [640, 1],
	});

	// Custom Navigation Events
	$(".gallery_next").click(function() {
		owl.trigger('owl.next');
	});
	$(".gallery_prev").click(function() {
		owl.trigger('owl.prev');
	});

});

// Owl Carousel - Sponsors

$(document).ready(function() {

	var owl = $("#sponsor_slider");

	owl.owlCarousel({
		pagination: false,
		slideSpeed : 800,
		items : 3,
		itemsTablet : [1024, 2],
		itemsTabletSmall : [640, 1],
	});
	
	// Custom Navigation Events
	$(".sponsor_next").click(function() {
		owl.trigger('owl.next');
	});
	$(".sponsor_prev").click(function() {
		owl.trigger('owl.prev');
	});

});

// Google Map API

var map;

function initMap() {

	// Create a new StyledMapType object, passing it an array of styles,
	// and the name to be displayed on the map type control.

	var styledMapType = new google.maps.StyledMapType([{
		"elementType" : "geometry",
		"stylers" : [{
			"color" : "#f5f5f5"
		}]
	}, {
		"elementType" : "labels.icon",
		"stylers" : [{
			"visibility" : "off"
		}]
	}, {
		"elementType" : "labels.text.fill",
		"stylers" : [{
			"color" : "#616161"
		}]
	}, {
		"elementType" : "labels.text.stroke",
		"stylers" : [{
			"color" : "#f5f5f5"
		}]
	}, {
		"featureType" : "administrative.land_parcel",
		"elementType" : "labels.text.fill",
		"stylers" : [{
			"color" : "#bdbdbd"
		}]
	}, {
		"featureType" : "poi",
		"elementType" : "geometry",
		"stylers" : [{
			"color" : "#eeeeee"
		}]
	}, {
		"featureType" : "poi",
		"elementType" : "labels.text.fill",
		"stylers" : [{
			"color" : "#757575"
		}]
	}, {
		"featureType" : "poi.park",
		"elementType" : "geometry",
		"stylers" : [{
			"color" : "#e5e5e5"
		}]
	}, {
		"featureType" : "poi.park",
		"elementType" : "labels.text.fill",
		"stylers" : [{
			"color" : "#9e9e9e"
		}]
	}, {
		"featureType" : "road",
		"elementType" : "geometry",
		"stylers" : [{
			"color" : "#ffffff"
		}]
	}, {
		"featureType" : "road.arterial",
		"elementType" : "labels.text.fill",
		"stylers" : [{
			"color" : "#757575"
		}]
	}, {
		"featureType" : "road.highway",
		"elementType" : "geometry",
		"stylers" : [{
			"color" : "#dadada"
		}]
	}, {
		"featureType" : "road.highway",
		"elementType" : "labels.text.fill",
		"stylers" : [{
			"color" : "#616161"
		}]
	}, {
		"featureType" : "road.local",
		"elementType" : "labels.text.fill",
		"stylers" : [{
			"color" : "#9e9e9e"
		}]
	}, {
		"featureType" : "transit.line",
		"elementType" : "geometry",
		"stylers" : [{
			"color" : "#e5e5e5"
		}]
	}, {
		"featureType" : "transit.station",
		"elementType" : "geometry",
		"stylers" : [{
			"color" : "#eeeeee"
		}]
	}, {
		"featureType" : "water",
		"elementType" : "geometry",
		"stylers" : [{
			"color" : "#c9c9c9"
		}]
	}, {
		"featureType" : "water",
		"elementType" : "labels.text.fill",
		"stylers" : [{
			"color" : "#9e9e9e"
		}]
	}], {
		name : 'Styled Map'
	});

	// Create a map object, and include the MapTypeId to add
	// to the map type control.
	map = new google.maps.Map(document.getElementById('map_container'), {
		center : {
			lat : 51.474284,
			lng : -0.035676
		},
		zoom : 16,
		mapTypeControlOptions : {
			mapTypeIds : ['roadmap', 'satellite']
		}
	});

	//Associate the styled map with the MapTypeId and set it to display.
	map.mapTypes.set('styled_map', styledMapType);
	map.setMapTypeId('styled_map');
}

