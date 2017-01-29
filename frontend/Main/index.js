import html from 'choo/html'
import {css} from 'glamor'
import bgImg from 'assets/bg1.jpg'

import Header from './Header'
import RSVP from './RSVP'

const home = css(
  { alignItems: 'center'
  , backgroundAttachment: 'fixed'
  , backgroundImage: `url(${bgImg})`
  , backgroundPosition: '79%'
  , backgroundRepeat: 'no-repeat'
  , backgroundSize: 'cover'
  , display: 'flex'
  , flexFlow: 'column'
  , height: '100vh'
  , paddingTop: '40px'
  , position: 'relative'
  }
)

export default (state, prev, send) => {
  return html`
    <div class=${home}>
      ${Header(state, prev, send)}
      ${RSVP(state, prev, send)}
    </div>
  `
}
