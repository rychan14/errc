import html from 'choo/html'
import {css} from 'glamor'

import NavBar from 'NavBar'
import NavMenu from 'NavMenu'

export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send)}
      <section>
      </section>
      ${NavMenu(state, prev, send)}
    </div>
  `
}
