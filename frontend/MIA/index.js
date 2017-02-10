import html from 'choo/html'
import {css} from 'glamor'
import {main} from 'index.js'

import NavBar from 'NavBar'

const mia = css(
  { margin: '20px'
  }
)

export default (state, prev, send) => {
  return html`
    <div class=${main}>
      ${NavBar(state, prev, send)}
      <section class=${mia}>
        <h1>Whoops! This Page doesn't exist</h1>
        <a href="/">Return to Home</a>
      </section>
    </div>
  `
}
