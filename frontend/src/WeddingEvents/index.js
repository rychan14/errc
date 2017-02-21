import html from 'choo/html'
import {css} from 'glamor'
import {
	content,
	cover,
	overlay
} from 'src'
import NavBar from 'src/NavBar'

export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: false})}
      <section class=${cover}>
				<div class=${overlay}></div>
				<div class=${content}>
				</div>
      </section>
    </div>
  `
}
		//	<script>
		//		function initMap() {
		//			let location = {lat: 33.421604, lng: -117.113606}
		//			let map = new google.maps.Map(document.getElementById('map'), {
		//				center: location,
		//				zoom: 10
		//			})
		//			let marker = new google.maps.Marker({
		//				position: location,
		//				map: map,
		//				title: 'Aviation Vineyards'
		//			})
		//		}
		//	</script>
		// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyALKqMk6YOCxhJC521v3Eeoie8BTqB1Ndg&callback=initMap" async defer></script>
