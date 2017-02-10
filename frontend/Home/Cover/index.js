import html from 'choo/html'
import {css} from 'glamor'
import bgImgSrc from 'assets/opbg.jpg'

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
  , backgroundImage: `url(${bgImgSrc})`
  , backgroundPosition: '79% 100%'
  , backgroundRepeat: 'no-repeat'
  , backgroundSize: 'cover'
  , height: '95vh'
  , position: 'relative'
  , width: '100%'
  }
)
const header = css(
  { backgroundColor: 'rgba( 0,0,0, 0.4 )'
  , color: 'white'
  , height: '100%'
  , padding: '20px 0'
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
  { display: 'block'
  , fontSize: '1.4em'
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
      </div>
    </section>
  `
}
