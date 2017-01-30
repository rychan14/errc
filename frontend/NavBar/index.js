import html from 'choo/html'
import {css} from 'glamor'

import RSVP from 'RSVP'

const navBar = css(
  { alignItems: 'center'
  , display: 'flex'
  , height: '8vh'
  , justifyContent: 'center'
  , position: 'relative'
  }
)
const heading = css(
  {
  }
)
export default (state, prev, send) => {
  return html`
    <div class=${navBar}>
      <h1>Erica is the Best!</h1>
      ${RSVP(state, prev, send)}
    </div>
  `
}
