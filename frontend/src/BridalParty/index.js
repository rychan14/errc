import html from 'choo/html'
import {css} from 'glamor'
import {
	colorDark,
	colorPrimary,
	colorSecondary,
	colorTertiary,
	content,
	cover,
	header,
	overlay,
	title
} from 'src'
import NavBar from 'src/NavBar'
import Andrew from 'assets/Andrew.jpg'
import Annie from 'assets/Annie.jpg'
import Arthur from 'assets/Arthur.jpg'
import Baylee from 'assets/Baylee.jpg'
import Calvin from 'assets/Calvin.jpg'
import Cindy from 'assets/Cindy.jpg'
import Daniel from 'assets/Daniel.jpg'
import Ellen from 'assets/Ellen.jpg'
import Frank from 'assets/Frank.jpg'
import George from 'assets/George.jpg'
import Julia from 'assets/Julia.jpg'
import Marcus from 'assets/Marcus.jpg'
import Stephanie from 'assets/Stephanie.jpg'
import Tina from 'assets/Tina.jpg'

const gallery = css(
	{	marginBottom: '50px'
	, '@media(max-width: 667px)':
		{ marginBottom: '0'
		}
	}
)
const personContainer = css(
	{ display: 'flex'
	, flexFlow: 'row wrap'
	, justifyContent: 'center'
	}
)
const personContainerRight = css(
	{}
)
const personContainerLeft = css(
	{}
)
const imageContainer = css(
	{ height: '40vh'
	, maxWidth: '50%'
	,	overflow: 'hidden'
	,	position: 'relative'
	, width: '35vh'
	, '@media(max-width: 1024px)':
		{}
	, '@media(max-width: 667px)':
		{ backgroundColor: 'black'
		, height: '60vh'
		, maxWidth: 'none'
		,	width: '100%'
		}
	}
)
const image = css(
	{ maxWidth: '100%'
	, position: 'absolute'
	,	top: '50%'
	,	transform: 'translate(0, -50%)'
	, '@media(max-width: 667px)':
		{
		}
	}
)
const imageRight = css(
	{	left: '50%'
	, transform: 'translate(-50%, -50%)'
	}
)
const imageLeft = css(
	{	right: '50%'
	, transform: 'translate(50%, -50%)'
	, '@media(max-width: 667px)':
		{ order: '1'
		}
	}
)
const descriptionContainer = css(
	{	width: '50%'
	,	'@media(max-width: 667px)':
		{ width: '100%'
		}
	}
)
const descriptionContainerLeft = css(
	{ backgroundColor: colorPrimary
	,	color: colorSecondary
	,	padding: '80px 80px 80px 0'
	,	textAlign: 'right'
	, '@media(max-width: 1024px)':
		{ padding: '80px 50px'
		}
	, '@media(max-width: 667px)':
		{ backgroundColor: colorSecondary
		, color: colorDark
		,	padding: '20px 20px 20px 0'
		,	order: '2'
		}
	}
)
const descriptionContainerRight = css(
	{ backgroundColor: colorTertiary
	, color: colorSecondary
	,	padding: '80px 0 80px 80px'
	,	textAlign: 'left'
	, '@media(max-width: 1024px)':
		{ backgroundColor: colorTertiary
		,	padding: '80px 50px'
		}
	, '@media(max-width: 667px)':
		{ backgroundColor: colorSecondary
		, color: colorDark
		,	padding: '20px 0 20px 20px'
		}
	}
)
const personName = css(
	{ fontSize: '2em'
	, '@media(max-width: 1024px)':
		{ fontSize: '1.5em'
		}
	}
)
const personRole = css(
	{ fontSize: '1.5em'
	, '@media(max-width: 1024px)':
		{ fontSize: '1.2em'
		}
	}
)
const people =
	[ { src: Ellen
		, name: 'Ellen Rho'
		, role: 'Maid of Honor'
		}
	,	{ src: Andrew
		, name: 'Andrew Kwong'
		, role: 'Best Man'
		}
	,	{ src: Baylee
		, name: 'Baylee Bontems'
		, role: 'Bridesmaid'
		}
	, { src: Frank
		, name: 'Frank Chow'
		, role: 'Groomsman'
		}
	,	{ src: Julia
		, name: 'Julia Brown'
		, role: 'Bridesmaid'
		}
	, { src: Arthur
		, name: 'Arthur Lee'
		, role: 'Groomsman'
		}
	, { src: Annie
		, name: 'Annie Coffman'
		, role: 'Bridesmaid'
		}
	, { src: Calvin
		, name: 'Calvin Fong'
		, role: 'Groomsman'
		}
	, { src: Cindy
		, name: 'Cindy Ly'
		, role: 'Bridesmaid'
		}
	, { src: Daniel
		, name: 'Daniel Chan'
		, role: 'Groomsman'
		}
	,	{ src: Tina
		, name: 'Tina Szutu'
		, role: 'Bridesmaid'
		}
	,	{ src: Marcus
		, name: 'Marcus Lam'
		, role: 'Groomsman'
		}
	,	{ src: Stephanie
		, name: 'Stephanie Lee'
		, role: 'Bridesmaid'
		}
	,	{ src: George
		, name: 'George Dai'
		, role: 'Groomsman'
		}
	]

export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: false})}
			<article class=${cover}>
				<div class=${overlay}></div>
				<div class=${content}>
					<header class=${header}>
						<h1 class=${title}>The Bridal Party</h1>
					</header>
					<section class=${gallery}>
						${people.map(({src, name, role}, index) => (
							index % 2 === 0 ? (
								html`
									<div class=${personContainer} ${personContainerRight}'>
										<div class=${imageContainer}>
											<img class='${image} ${imageLeft}' src=${src} />
										</div>
										<div class='${descriptionContainer} ${descriptionContainerRight}'>
											<p class=${personName}>${name}</p>
											<p class=${personRole}>${role}</p>
										</div>
									</div>
								`
							) : (
								html`
									<div class='${personContainer} ${personContainerLeft}'>
										<div class='${descriptionContainer} ${descriptionContainerLeft}'>
											<p class=${personName}>${name}</p>
											<p class=${personRole}>${role}</p>
										</div>
										<div class=${imageContainer}>
											<img class='${image} ${imageRight}' src=${src} />
										</div>
									</div>
								`
							)
						))}
					</section>
				</div>
			</article>
    </div>
  `
}
