import html from 'choo/html'
import {css} from 'glamor'
import {
	colorSecondary,
	content,
	cover,
	overlay
} from 'src'
import NavBar from 'src/NavBar'

const accommodations = css(
	{ color: colorSecondary
	, fontSize: '2em'
	,	left: '50%'
	,	position: 'absolute'
	, top: '50%'
	, transform: 'translate(-50%, -50%)'
	, '@media(max-width:667px)':
		{ fontSize: '1.2em'
		}
	}
)

export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: true})}
      <section class=${cover}>
				<div class=${overlay}></div>
				<div class=${content}>
					<div class=${accommodations}>
						<p>Please check back later as we are looking into getting rides to and from San Diego airport (SAN) and discounted rates for your accommodations</p>
					</div>
				</div>
      </section>
    </div>
  `
}
