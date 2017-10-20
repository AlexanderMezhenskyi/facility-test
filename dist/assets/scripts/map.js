function initMap() {
	let coordinates = {lat: 50.4520043, lng: 30.7400215};
	let mapContainer = document.querySelector('#map');
	let map = new google.maps.Map(mapContainer, {
		center: coordinates,
		zoom: 10,
		disableDefaultUI: false,
		scrollwheel: false
	});

	google.maps.event.addDomListener(window, "resize", function () {
		let center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	})
}