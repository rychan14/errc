import html from 'choo/html'
import {css} from 'glamor'

import NavBar from 'NavBar'
import NavMenu from 'NavMenu'

const mia = css(
  { margin: '20px'
  }
)
export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send)}
      <section class=${mia}>
        <h1>Whoops! This Page doesn't exist</h1>
        <a href="/">Return to Home</a>
      </section>
      ${NavMenu(state, prev, send)}
    </div>
  `
}
