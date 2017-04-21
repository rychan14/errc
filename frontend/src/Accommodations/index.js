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
const paragraph = css(
	{ marginBottom: '20px'
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
						<p class=${paragraph}>
							Check out these hotels nearby should you need accomodations:
						</p>
						<p class=${paragraph}>
							Quality Inn Fallbrook I-15<br>
							3135 Old Hwy 395, Fallbrook, CA 92028<br>
							~$123
						</p>
						<p class=${paragraph}>
							Ramada Temecula Old Town<br>
							28980 Old Town Front St, Temecula, CA 92590<br>
							~$192
						</p>
					</div>
				</div>
      </section>
    </div>
  `
}
