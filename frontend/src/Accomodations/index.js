import html from 'choo/html'
import {css} from 'glamor'
import {main} from 'index.js'
import NavBar from 'src/NavBar'

export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: true})}
      <section class=${main}>
        <p></p>
      </section>
    </div>
  `
}
