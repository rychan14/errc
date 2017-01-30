import html from 'choo/html'
import {css} from 'glamor'
import bgImgSrc from 'assets/opbg.jpg'
import storyImgSrc from 'assets/walking.jpg'

import NavBar from 'NavBar'
import NavMenu from 'NavMenu'
import Header from './Header'
//
// export const nodeAnim = css.keyframes(
//   { '0%':
//     { transform: 'translateX(-5%)'
//     , opacity: '0.7'
//     }
//   , '100%':
//     { transform: 'translateX(0)'
//     , opacity: '1'
//     }
//   }
// )
const main = css(
  {
  }
)
const cover = css(
  { alignItems: 'center'
  // , backgroundAttachment: 'fixed'
  , backgroundImage: `url(${bgImgSrc})`
  , backgroundPosition: '79% 100%'
  , backgroundRepeat: 'no-repeat'
  , backgroundSize: 'cover'
  , display: 'flex'
  , flexFlow: 'column'
  , height: '92vh'
  , paddingTop: '40px'
  , position: 'relative'
  }
)
const story = css(
  { display: 'flex'
  , height: '40vh'
  , margin: '0 auto'
  , maxWidth: '80%'
  }
)
const storyImgWrapper = css(
  { backgroundImage: `url(${storyImgSrc})`
  , backgroundSize: 'cover'
  , overflow: 'hidden'
  , width: '50%'
  }
)
const storyBlurb = css(
  { padding: '10px 20px'
  , width: '50%'
  }
)
const storyBlurbBorder = css(
  { borderTop: '1px solid black'
  , height: '1px'
  , margin: '10px 0 10px 5px'
  , width: '20%'
  }
)
const storyBlurbDescription = css(
  {}
)

export default (state, prev, send) => {
  return html`
    <div class=${main}>
      ${NavBar(state, prev, send)}
      <section class=${cover}>
        ${Header(state, prev, send)}
      </section>
      ${NavMenu(state, prev, send)}
    </div>
  `
}
