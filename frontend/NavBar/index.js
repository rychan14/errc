import html from 'choo/html'
import {css} from 'glamor'

import RSVP from 'RSVP'

const openAnim = css.keyframes(
	{ '0%': { transform: 'scaleY(0)' }
	, '100%': { transform: 'scaleY(1)' }
	}
)
const navBar = css(
  { backgroundColor: 'transparent'
  , color: '#FFF'
  , left: '0'
  , padding: '10px 0'
  , position: 'fixed'
	,	width: '100%'
	, zIndex: '10'
  , '@media(max-width: 1024px)':
    { top: '0'
    }
  }
)
const menuIcon = css(
	{ display: 'none'
	, '@media(max-width: 1024px)':
		{	display: 'block'
		,	fill: 'white'
		, height: '3em'
		, margin: '0 10px'
		, width: '3em'
		}
	, '@media(max-width: 667px)':
		{	display: 'block'
		,	fill: 'white'
		, height: '1.5em'
		, margin: '0 10px'
		, width: '1.5em'
		}
	}
)
const navList = css(
	{ display: 'flex'
	, height: '100%'
	, justifyContent: 'space-around'
	,	width: '100%'
	, '@media(max-width: 1024px)':
		{	animation: `${openAnim} 0.5s`
		,	backgroundColor: 'transparent'
		,	flexFlow: 'column'
		, padding: '0 0 10px 0'
		, transformOrigin: 'top'
		, zIndex: '-1'
		}
	}
)
const navListItem = css(
  { cursor: 'pointer'
  , display: 'inline-block'
  , textAlign: 'center'
	, '@media(max-width: 1024px)':
		{ paddingLeft: '10px'
		,	textAlign: 'left'
		}
  }
)
const navLink = css(
  { color: '#FFF'
  , cursor: 'pointer'
  , display: 'block'
  , fontSize: '1.5em'
  , padding: '10px 0'
  , textDecoration: 'none'
  , width: '100%'
  , '&:hover':
    { textDecoration: 'underline'
    }
	, '@media(max-width: 1024px)':
		{ fontSize: '1.3em'
		}
	, '@media(max-width: 667px)':
		{ fontSize: '1em'
		}
	}
)
const rsvpMobileHide = css(
	{ display: 'none'
	}
)
const rsvpMobileContainer = css(
	{ display: 'inline-block'
	,	left: '50%'
	, margin: '5px 0 0 0'
	,	position: 'absolute'
	, top: '0'
	,	transform: 'translate(-50%)'
	}
)
const list =
  [ { title: 'Home'
    , link: '/'
    }
  , { title: 'Wedding Events'
    , link: '/events'
    }
  , { title: 'Our Story'
    , link: '/story'
    }
  , { title: 'Bridal Party'
    , link: '/party'
    }
  , { title: 'Registry'
    , link: '/registry'
    }
  , { title: 'Accomodations'
    , link: '/accomodations'
    }
  ]

export default (state, prev, send) => {
	const toggle = () => send('toggleNav')
	const toggleVPCheck = () => send('viewportCheck', window.innerWidth)
	document.addEventListener('DOMContentLoaded', toggleVPCheck)
	window.addEventListener('resize', toggleVPCheck)
  return html`
    <nav class=${navBar}>
			${(() => {
				if (state.viewport < 1024) {
					if (state.navOpen) {
						return html`
							<svg class=${menuIcon} onclick=${toggle}>
								<use xlink:href="#icon-cross" />
							</svg>
						`
					} else {
						return html`
							<svg class=${menuIcon} onclick=${toggle}>
								<use xlink:href="#icon-menu" />
							</svg>
						`
					}
				}
			})()}
			${(() => {
				if (state.navOpen || state.viewport > 1024) {
					return html`
						<ul class=${navList}>
							${list.map(({title, link}) => {
								return html`
									<li class=${navListItem}>
										<a class=${navLink} href=${link}>${title}</a>
									</li>
								`
							})}
							<li class='${navListItem} ${rsvpMobileHide}'>
								${RSVP(state, prev, send)}
							</li>
						</ul>
					`
				}
			})()}
			${(() => {
				if (state.viewport < 1024) {
					return html`
						<div class=${rsvpMobileContainer}>
							${RSVP(state, prev, send)}
						</div>
					`
				}
			})()}
    </nav>
  `
}
