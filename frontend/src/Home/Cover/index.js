import html from 'choo/html'
import {css} from 'glamor'
import {main, cover, overlay, colorDark} from 'src'
import bgImageSrc from 'assets/blurbg.jpg'

const description = css(
	{ color: colorDark
	,	fontSize: '2em'
	,	left: '50%'
	, position: 'absolute'
	, top: '50%'
	,	transform: 'translate(-50%, -50%)'
	, '@media(max-width: 667px)':
		{ fontSize: '1.3em'
		}
	}
)
const married = css(
	{ fontFamily: 'Great Vibes'
	, fontSize: '2.5em'
	, '@media(max-width: 667px)':
		{ fontSize: '1.7em'
		}
	}
)
const date = css(
	{	fontSize: '2.1em'
	, fontWeight: '700'
	, whiteSpace: 'nowrap'
	, '@media(max-width: 667px)':
		{ fontSize: '1.5em'
		}
	}
)
export default (state, prev, send) => {
  return html`
		<div class=${cover}>
			<div class=${overlay}></div>
				<div class=${description}>
					<p class=${married}>We're getting married!</p>
					<p>Hope you can celebrate with us on <date class=${date}>June 17, 2017</date></p>
				</div>
		</div>
  `
}
