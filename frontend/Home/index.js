import html from 'choo/html'
import {css} from 'glamor'
import {main} from 'index.js'
import NavBar from 'NavBar'
import HeadImg from './HeadImg'

export default (state, prev, send) => {
  return html`
    <div class=${main}>
      ${NavBar(state, prev, send)}
			${HeadImg(state, prev, send)}
    </div>
  `
}
