import html from 'choo/html'
import {css} from 'glamor'
import {
	colorSecondary,
	content,
	cover,
	overlay
} from 'src'
import journey from 'assets/journey.jpg'
import NavBar from 'src/NavBar'

const ourStory = css(
	{ color: colorSecondary
	, marginTop: '20px'
	, padding: '0 10px'
	, '@media(max-width: 667px)':
	  { marginTop: '40px'
	  }
	}
)
const imageContainer = css(
	{ backgroundImage: `url(${journey})`
	, backgroundPosition: 'center 40%'
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
const storyContainer = css(
	{ fontSize: '1.2em'
	, '@media(max-width: 677px)':
		{ fontSize: '1em'
		}
	}
)
const storyParagraph = css(
	{ marginBottom: '20px'
	}
)
const strikethrough = css(
	{ textDecoration: 'line-through'
	}
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
						<div class=${storyContainer}>
							<p class=${storyParagraph}>We met through Bible study with Intervarsity our freshman year at UCSD six years ago. Erica’s earliest memory of me is me playing “Wedding Dress” by Taeyang on the piano at a friend’s apartment during a game night and wanting to get to know me. My earliest memory of Erica is her getting up multiple times to get water for me as we ate spicy popcorn chicken together at Tapioca Express on campus. Little did I know I wouldn’t even consider that chicken spicy two years down the road, as one might expect from having a Korean girlfriend. Little did we know we would end up dating, let alone get married!</p>
							<p class=${storyParagraph}>As we hung out more and more and became good friends, I came to really admire her thoughtful and caring personality and hospitable nature. She really listened to the things I had to say and brought a lot of healing into my life. Erica really enjoyed my cheesy humor, willingness to go on adventures with her, and deeper questions that brought about much self-discovery and openness that she had trouble with before. After a year of hanging out one-on-one as friends that <span class=${strikethrough}>might have</span> have caused some people to question whether we were really just “friends,” we went through a phase of awkward DTRs and more late night talks that eventually, long story short, culminated in us making it official the summer before our junior year. I fell in love with my best friend and she said yes to being my girlfriend! Yay!</p>
							<p class=${storyParagraph}>It’s been a long journey for us but we wouldn’t have it any other way. It’s been over four years since we’ve been together and we are ready to take the next step in our relationship. I proposed to her on January 7, 2017. It was a wonderfully prepared proposal. And of course, she saw right through it, handing me a handwritten letter she prepared the night before addressed "To: Ryan, my fiancé" right after I had asked her to marry me. I was completely taken aback, but should I have expected anything less from the woman who knows me so well that my apparently “goofy smile” in the weeks before gave it away? I guess not but the important thing is she said yes! So let the countdown begin.</p>
							<p class=${storyParagraph}>We can’t wait to say “I do,” for the day we won’t have to say goodbye to each other at the end of the day. We also can’t wait to celebrate with each and every one of you! You have helped shape us into who we are and we wouldn’t be here today if it weren’t for your support so we would love for you to be a part of our big day! So please be sure to click the link above to RSVP and hope to see you there!</p>
						</div>
					</div>
				</div>
      </section>
    </div>
  `
}
