import {css} from 'glamor'
import bgImageSrc from 'assets/blurbg.jpg'
const fadeIn = css.keyframes(
	{ '0%': { opacity: '0.7' }
	, '100%': { opacity: '1' }
	}
)
export const main = css(
  { animation: `${fadeIn} 0.5s ease-out`
	, marginLeft: 'auto'
	, marginRight: 'auto'
	, marginTop: '68px'
	, '@media(max-width:667px)':
		{ marginTop: '44px'
		}
  }
)
export const cover = css(
	{ backgroundImage: `url(${bgImageSrc})`
	, backgroundPosition: '50% 60%'
	, backgroundSize: 'cover'
	,	height: '100vh'
	, overflow: 'scroll'
	, position: 'relative'
	}
)
export const overlay = css(
	{	backgroundImage: 'radial-gradient(ellipse, #FFF 30%, #000 130%)'
	, height: '100%'
	, left: '0'
	, opacity: '0.6'
	, position: 'absolute'
	, top: '0'
	, width: '100%'
	}
)
export const content = css(
	{ maxHeight: '100%'
	, overflow: 'scroll'
	,	padding: '50px'
	,	position: 'relative'
	, '@media(max-width: 667px)':
		{ padding: '20px 30px 30px 20px'
		}
	}
)
export const colorPrimary = '#C0C0C0'
// export const colorPrimary = '#191953'
export const colorSecondary = '#FFF'
// export const colorSecondary = '#FFAAAA'
export const colorTertiary = '#FFF'
export const colorDark = '#363636'

export const header = css(
	{ color: colorTertiary
	,	margin: '20px 0'
	,	textAlign: 'center'
	}
)
export const title = css(
	{	fontSize: '2.5em'
	, fontWeight: '700'
	, marginBottom: '15px'
	, '@media(max-width: 1024px)':
		{ fontSize: '2.2em'
		}
	, '@media(max-width: 1024px)':
		{ fontSize: '2em'
		}
	}
)
