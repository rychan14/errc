import html from 'choo/html'
import {css} from 'glamor'
import {main} from 'index.js'
import walking from 'assets/walking.jpg'
import NavBar from 'src/NavBar'

const underline = css(
	{	textDecoration: 'underline'
	}
)
const imageContainer = css(
	{ height: '800px'
	, margin: '0 auto'
	,	overflow: 'hidden'
	, position: 'relative'
	,	width: '80%'
	}
)
const image = css(
	{ left: '50%'
	,	position: 'absolute'
	, top: '50%'
	,	transform: 'translate(-50%, -50%)'
	}
)

export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: true})}
      <section class=${main}>
				<div class=${imageContainer}>
					<img class=${image} src=${walking} />
				</div>
				<div>
					<p>We met as freshman at UCSD at our Bible study group. We both don’t remember how we first met. Erica’s earliest memory of me was at a hangout at our Bible study leaders’ apartment and saw me playing the song “Wedding Dress” by Taeyang on the piano. She thought it was pretty cool. I remember eating, what I considered then, really spicy popcorn chicken at the Tapioca Express on campus with Erica and she brought cups of water for me while I tried to consume as many as I could without dying. As we began to hang out more I got more accustomed to spicy food and we became good friends soon after. The rest was history.</p>
				</div>
      </section>
    </div>
  `
}
