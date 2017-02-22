import html from 'choo/html'
import {css} from 'glamor'
import {
	colorDark,
	colorPrimary,
	colorSecondary,
	colorTertiary,
	content,
	cover,
	overlay
} from 'src'
import NavBar from 'src/NavBar'

const events = css(
	{ color: colorSecondary
	, left: '50%'
	, position: 'relative'
	, textAlign: 'center'
	, top: '40%'
	, transform: 'translate(-50%, -50%)'
	, '@media(max-width: 1024px)':
		{ top: '50%'
		}
	}
)
const address = css(
	{	color: colorSecondary
	, fontStyle: 'normal'
	, margin: '10px 0'
	, '& span':
		{ display: 'block'
		}
	}
)
const addressName = css(
	{ fontSize: '2.5em'
	, '@media(max-width: 667px)':
		{ fontSize:  '1.8em'
		}
	}
)
const addressStreet = css(
	{ fontSize: '2.5em'
	, '@media(max-width: 667px)':
		{ fontSize:  '1.8em'
		}
	}
)
const addressCity = css(
	{ fontSize: '2.5em'
	, '@media(max-width: 667px)':
		{ fontSize:  '1.8em'
		}
	}
)
const mapsLink = css(
	{ fontSize: '2em'
	, '@media(max-width: 667px)':
		{ fontSize:  '1.5em'
		}
	}
)
const border = css(
	{ borderBottom: `1px solid ${colorSecondary}`
	,	height: '1px'
	, margin: '20px auto'
	, width: '150px'
	}
)
const date = css(
	{ display: 'block'
	, fontSize: '3em'
	, '@media(max-width: 667px)':
		{ fontSize:  '2em'
		}
	}
)
const eventBlock = css(
	{ fontSize: '1.5em'
	}
)
const event = css(
	{}
)
export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: false})}
      <section class=${cover}>
				<div class=${overlay}></div>
				<div class=${content}>
					<div class=${events}>
						<date class=${date}>June 17, 2017</date>
						<address class=${address}>
							<span class=${addressName}>Aviation Vineyards</span>
							<span class=${addressStreet}>7436 Rainbow Heights Road</span>
							<span class=${addressCity}>Temecula, CA 92028</span>
							<a class=${mapsLink} href="https://www.google.com/maps/place/7436+Rainbow+Heights+Rd,+Fallbrook,+CA+92028/@33.4216689,-117.1162958,17z/data=!3m1!4b1!4m5!3m4!1s0x80db81107aed759b:0xa0382894f9d292f0!8m2!3d33.4216689!4d-117.1141071">(Google Map)</a>
						</address>
						<div class=${border}></div>
						<div class=${eventBlock}>
							<p class=${event}>5:00 P.M - Ceremony & Reception</p>
						</div>
					</div>
				</div>
      </section>
    </div>
  `
}
