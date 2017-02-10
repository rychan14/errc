import html from 'choo/html'
import {css} from 'glamor'
import {main} from 'index.js'
import NavBar from 'NavBar'
import Cover from './Cover'

export default (state, prev, send) => {
  return html`
    <div class=${main}>
      ${NavBar(state, prev, send)}
      ${Cover(state, prev, send)}
    </div>
  `
}
