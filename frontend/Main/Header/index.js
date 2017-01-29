import html from 'choo/html'
import {css} from 'glamor'

const header = css(
  { alignItems: 'center'
  , backgroundColor: 'rgba( 0,0,0, 0.2 )'
  , border: '2px solid white'
  , borderRadius: '2px'
  , color: 'white'
  , display: 'flex'
  , flexFlow: 'column'
  , padding: '20px'
  , textAlign: 'center'
  , marginBottom: '40px'
  , maxWidth: '80%'
  }
)
const title = css(
  { alignItems: 'center'
  , display: 'flex'
  , fontFamily: 'Tangerine'
  , fontSize: '90px'
  , fontWeight: 'bold'
  , marginBottom: '10px'
  , textAlign: 'center'
  }
)
const subtitle = css(
  { display: 'block'
  , fontSize: '35px'
  }
)
const date = css(
  { fontSize: '40px'
  , fontWeight: '700'
  , whiteSpace: 'nowrap'
  }
)
const heart = css(
  { height: '25px'
  , width: '25px'
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

export default () => {
  return html`
    <header class=${header}>
      <a href="/story">click</a>
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
      <p>#ACHANceAtRHOmance</p>
      <p class=${subtitle}>Come Celebrate With Us On <span class=${date}>June 17, 2017</span></p>
    </header>
  `
}
