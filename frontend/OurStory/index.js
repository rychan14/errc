import html from 'choo/html'
import {css} from 'glamor'
import {main} from 'index.js'

import NavBar from 'NavBar'

export default (state, prev, send) => {
  return html`
    <div class=${main}>
      ${NavBar(state, prev, send)}
      <section>
        <p>
          It's been a four year journey for us.
        </p>
      </section>
    </div>
  `
}
