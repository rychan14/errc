import html from 'choo/html'
import {css} from 'glamor'
import RSVP from 'RSVP'

const animIn = css.keyframes(
  { '0%':
    { opacity: '0.7'
    }
  , '100%':
    { opacity: '1'
    }
  }
)
const cover = css(
  { animation: `${animIn} 0.3s ease`
  , backgroundPosition: 'center'
  , backgroundRepeat: 'no-repeat'
  , backgroundSize: 'cover'
  , height: '95vh'
  , position: 'relative'
	,	textAlign: 'center'
  , width: '100%'
  }
)
const header = css(
  { backgroundColor: 'rgba( 0, 0, 0, 0.3 )'
	,	border: '1px solid white'
	,	borderRadius: '3px'
	, display: 'inline-block'
	,	color: 'white'
	,	margin: '20px 0 0 0'
	, maxWidth: '95%'
  , padding: '20px 200px'
  , textAlign: 'center'
  }
)
const date = css(
  { display: 'block'
  , fontSize: '70px'
  , fontWeight: '700'
  , margin: '10px 0'
  , whiteSpace: 'nowrap'
  }
)
const bigText = css(
  { fontSize: '40px'
  }
)
const text = css(
  { fontSize: '25px'
  }
)
const address = css(
  { fontSize: '2.3em'
  , fontWeight: '700'
  , margin: '10px 0'
  }
)
const hashtag = css(
  { fontSize: '1.4em'
  , margin: '20px 0 0 0'
  }
)
export default (state, prev, send) => {
  return html`
    <section class=${cover}>
      <div class=${header}>
        <p class=${bigText}>Come Celebrate With Us On</p>
        <p class=${date}>~June 17, 2017~</p>
        <p class=${text}>at</p>
        <address class=${address}>
          Aviation Vineyards<br />
          7436 Rainbow Heights Road<br />
          Temecula, CA 92028<br />
        </address>
        <p class=${hashtag}>Hashtag: <strong>#ACHANceAtRHOmance</strong></p>
				${RSVP(state, prev, send)}
      </div>
    </section>
  `
}
