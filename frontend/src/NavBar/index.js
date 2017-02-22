import html from 'choo/html'
import {css} from 'glamor'
import {
	colorDark,
	colorPrimary,
	colorSecondary,
	colorTertiary
} from 'src'
import RSVP from 'src/RSVP'

const openAnim = css.keyframes(
	{ '0%': { transform: 'translateY(-100%)' }
	, '100%': { transform: 'translateY(0)' }
	}
)
const navBar = css(
  { color: colorSecondary
  , left: '0'
  , padding: '10px 0'
  , position: 'fixed'
	, top: '0'
	,	width: '100%'
	, zIndex: '10'
  , '@media(max-width: 1024px)':
    { top: '0'
    }
  }
)
const menuIcon = css(
	{ cursor: 'pointer'
	,	display: 'block'
	,	fill: 'white'
	, height: '3em'
	, margin: '0 10px'
	, width: '3em'
	, '@media(max-width: 667px)':
		{	height: '1.5em'
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
		,	backgroundColor: colorPrimary
		,	flexFlow: 'column'
		, padding: '68px 0 10px 0'
		, position: 'relative'
		, top: '-68px'
		, transformOrigin: 'left'
		, zIndex: '-1'
		}
	, '@media(max-width: 667px)':
		{ padding: '34px 0 10px 0'
		, top: '-34px'
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
  { color: colorSecondary
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

const active = css(
	{ textDecoration: 'underline'
	}
)
const rsvpMobileContainer = css(
	{ display: 'inline-block'
	,	left: '50%'
	, marginTop: '10px'
	,	position: 'absolute'
	, top: '0'
	,	transform: 'translate(-50%, 0)'
	, '@media(max-width: 667px)':
		{ marginTop: '4px'
		}
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
  , { title: 'Registry'
    , link: '/registry'
    }
  , { title: 'Accommodations'
    , link: '/accommodations'
    }
  , { title: 'Bridal Party'
    , link: '/party'
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
				if (state.viewport <= 1024) {
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
										<a onclick=${toggle} class='${navLink} ${state.location.pathname === link ? active : ''}' href=${link}>${title}</a>
									</li>
								`
							})}
							${state.viewport >= 1024 ? (
								html`
									<li class=${navListItem}>
										${RSVP(state, prev, send)}
									</li>
								`
							) : null}
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
