import html from 'choo/html'
import {css} from 'glamor'
import {
	content,
	cover,
	overlay
} from 'src'
import NavBar from 'src/NavBar'

const accomodations = css(
	{ left: '50%'
	,	position: 'absolute'
	, top: '50%'
	, transform: 'translate(-50%, -50%)'
	}
)
export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: true})}
      <section class=${cover}>
				<div class=${overlay}></div>
				<div class=${content}>
					<div class=${accomodations}>
						<p>
							Check back later for hotel recommendations =D
						</p>
					</div>
				</div>
      </section>
    </div>
  `
}
