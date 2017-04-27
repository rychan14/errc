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
const list = css(
	{ marginLeft: '20px'	
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
						Check out these nearby hotels and resorts should you need accomodations:
					</p>
					<ul class=${list}>
						<li class=${paragraph}>
							Quality Inn Fallbrook I-15<br>
							3135 Old Hwy 395, Fallbrook, CA 92028<br>
						</li>
						<li class=${paragraph}>
							Ramada Temecula Old Town<br>
							28980 Old Town Front St, Temecula, CA 92590<br>
						</li>
						<li class=${paragraph}>
							Pala Casino Resort And Spa<br>
							11154 CA-76, Pala, CA 92059<br>
						</li>
						<li class=${paragraph}>
							Pechanga Resort and Casino<br>
							45000 Pechanga Pkwy, Temecula, CA 92592<br>
						</li>
					</ul>
				</div>
			</div>
      </section>
    </div>
  `
}
