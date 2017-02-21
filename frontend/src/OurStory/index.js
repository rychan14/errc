import html from 'choo/html'
import {css} from 'glamor'
import {
	colorSecondary,
	content,
	cover,
	overlay
} from 'src'
import walking from 'assets/walking.jpg'
import NavBar from 'src/NavBar'

const ourStory = css(
	{	color: colorSecondary
	,	marginTop: '20px'
	, padding: '0 10px'
	, '@media(max-width: 667px)':
		{ marginTop: '40px'
		}
	}
)
const imageContainer = css(
	{ backgroundImage: `url(${walking})`
	, backgroundPosition: '0% center'
	, backgroundRepeat: 'no-repeat'
	, backgroundSize: 'cover'
	,	height: '50vh'
	, margin: '20px auto'
	,	overflow: 'hidden'
	, position: 'relative'
	, '@media(max-width: 667px)':
		{ height: '30vh'
		}
	}
)
const image = css(
	{}
)

export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: true})}
      <section class=${cover}>
				<div class=${overlay}></div>
				<div class=${content}>
					<div class=${ourStory}>
						<div class=${imageContainer}></div>
						<div>
							<p>We met as freshman at UCSD at our Bible study group. We both don’t remember how we first met. Erica’s earliest memory of me was at a hangout at our Bible study leaders’ apartment and saw me playing the song “Wedding Dress” by Taeyang on the piano. She thought it was pretty cool. I remember eating, what I considered then, really spicy popcorn chicken at the Tapioca Express on campus with Erica and she brought cups of water for me while I tried to consume as many as I could without dying. As we began to hang out more I got more accustomed to spicy food and we became good friends soon after. The rest was history.</p>
						</div>
					</div>
				</div>
      </section>
    </div>
  `
}
