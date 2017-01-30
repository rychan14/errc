import html from 'choo/html'
import {css} from 'glamor'

import NavBar from 'NavBar'
import NavMenu from 'NavMenu'

const main = css(
  {
  }
)
export default (state, prev, send) => {
  return html`
    <div class=${main}>
      ${NavBar(state, prev, send)}
      <section>
        <img />
        <div>
          <p>
            It's been a four year journey for us.
          </p>
        </div>
      </section>
      ${NavMenu(state, prev, send)}
    </div>
  `
}
