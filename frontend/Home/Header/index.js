import html from 'choo/html'
import {css} from 'glamor'

const header = css(
  { alignItems: 'center'
  , backgroundColor: 'rgba( 0,0,0, 0.4 )'
  , border: '2px solid white'
  , borderRadius: '2px'
  , color: 'white'
  , display: 'flex'
  , flexFlow: 'column'
  , justifyContent: 'center'
  , minHeight: '30vh'
  , overflow: 'hidden'
  , padding: '20px'
  , textAlign: 'center'
  , marginBottom: '40px'
  , maxWidth: '95%'
  , minWidth: '60%'
  }
)
const title = css(
  { alignItems: 'center'
  , display: 'flex'
  , fontFamily: 'Tangerine'
  , fontSize: '8em'
  , fontWeight: 'bold'
  , marginBottom: '10px'
  , textAlign: 'center'
  , whiteSpace: 'nowrap'
  }
)

const hashtag = css(
  { display: 'block'
  , fontSize: '1.4em'
  , marginBottom: '10px'
  , maxWidth: '100%'
  , overflow: 'hidden'
  , textOverflow: 'ellipsis'
  }
)
const date = css(
  { display: 'block'
  , fontSize: '4em'
  , fontWeight: '700'
  , maxWidth: '100%'
  , whiteSpace: 'nowrap'
  }
)
const heart = css(
  { height: '40px'
  , width: '40px'
  }
)
const redHeart = css(
  { fill: '#FFAAAA'
  , position: 'relative'
  , left: '6px'
  }
)
const whiteHeart = css(
  { fill: 'white' }
)
const text = css(
  { fontSize: '25px'
  }
)
const address = css(
  { fontSize: '2.3em'
  }
)

export default (state, prev, send) => {
  return html`
    <div class=${header}>
      <h1 class=${title}>
        Erica
        <svg class='${redHeart} ${heart}'>
          <use xlink:href="#icon-heart"/>
        </svg>
        <svg class='${whiteHeart} ${heart}'>
          <use xlink:href="#icon-heart"/>
        </svg>
        Ryan
      </h1>
      <p class=${hashtag}>#ACHANceAtRHOmance</p>
      <p class=${date}>~June 17, 2017~</p>
      <p class=${text}>at</p>
      <address class=${address}>
        Aviation Vineyards<br />
        7436 Rainbow Heights Road<br />
        Temecula, CA 92028<br />
      </address>
    </div>
  `
}
