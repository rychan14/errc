import html from 'choo/html'
import {css} from 'glamor'
import {main} from 'index.js'
import NavBar from 'NavBar'
import Andrew from 'assets/Andrew.jpg'
import Arthur from 'assets/Arthur.jpg'
import Baylee from 'assets/Baylee.jpg'
import Calvin from 'assets/Calvin.jpg'
import Frank from 'assets/Frank.jpg'
import George from 'assets/George.jpg'
import Julia from 'assets/Julia.jpg'
import Marcus from 'assets/Marcus.jpg'
import Tina from 'assets/Tina.jpg'

const header = css(
	{ padding: '20px 0'
	}
)
const title = css(
	{	fontSize: '2.2em'
	, fontWeight: '700'
	,	textAlign: 'center'
	, '@media(max-width: 1024px)':
		{ fontSize: '2em'
		}
	, '@media(max-width: 1024px)':
		{ fontSize: '1.7em'
		}
	}
)
const gallery = css(
	{}
)
const grid = css(
	{ display: 'flex'
	, flexFlow: 'row wrap'
	}
)
const panel = css(
	{ height: 'calc(25vh - 17px)'
	, width: 'calc(100%/7)'
	}
)
const imageContainer = css(
	{ display: 'inline-block'
	, height: '100%'
	,	overflow: 'hidden'
	,	position: 'relative'
	, width: '100%'
	}
)
const image = css(
	{ left: '50%'
	, maxHeight: '100%'
	, maxWidth: '100%'
	,	position: 'absolute'
	, top: '50%'
	, transform: 'translate(-50%, -50%)'
	}
)
const personContainer = css(
	{ padding: '20px'
	}
)
const personName = css(
	{ fontSize: '1.5em'
	, marginBottom: '10px'
	, '@media(max-width: 1024px)':
		{ fontSize: '1.2em'
		}
	}
)
const personRole = css(
	{ fontSize: '1.2em'
	, '@media(max-width: 1024px)':
		{ fontSize: '0.9em'
		}
	}
)
const people =
	[ { src: Andrew
		, name: 'Andrew Kwong'
		, role: 'Best Man'
		}
	,	{ src: Baylee
		, name: 'Baylee Bontems'
		, role: 'Bridesmaid'
		}
	,	{ src: Marcus
		, name: 'Marcus Lam'
		, role: 'Groomsman'
		}
	,	{ src: Julia
		, name: 'Julia Brown'
		, role: 'Bridesmaid'
		}
	,	{ src: George
		, name: 'George Dai'
		, role: 'Groomsman'
		}
	,	{ src: Tina
		, name: 'Tina Szutu'
		, role: 'Bridesmaid'
		}
	,	{ src: Tina
		, name: 'Tina Szutu'
		, role: 'Bridesmaid'
		}
	,	{ src: Tina
		, name: 'Tina Szutu'
		, role: 'Bridesmaid'
		}
	,	{ src: Tina
		, name: 'Tina Szutu'
		, role: 'Bridesmaid'
		}
	,	{ src: Tina
		, name: 'Tina Szutu'
		, role: 'Bridesmaid'
		}
	,	{ src: Tina
		, name: 'Tina Szutu'
		, role: 'Bridesmaid'
		}
	, { src: Frank
		, name: 'Frank Chow'
		, role: 'Groomsman'
		}
	, { src: Calvin
		, name: 'Calvin Fong'
		, role: 'Groomsman'
		}
	, { src: Arthur
		, name: 'Arthur Lee'
		, role: 'Groomsman'
		}
	]

export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: true})}
			<article class=${main}>
				<section class=${gallery}>
					<div class=${grid}>
						${people.map(({src, name, role}, index) => (
							[	html`
									<div class=${panel}>
										<div class=${imageContainer}>
											<img class=${image} src=${src} />
										</div>
									</div>
								`
							, html`
									<div class=${panel}>
										<div class=${personContainer}>
											<p class=${personName}>${name}</p>
											<p class=${personRole}>${role}</p>
										</div>
									</div>
								`
							]
						))}
					</div>
				</section>
			</article>
    </div>
  `
}
