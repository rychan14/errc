import html from 'choo/html'
import {css} from 'glamor'
import NavBar from 'src/NavBar'
import Cover from './Cover'
import HeadImg from './HeadImg'

export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: false})}
			${HeadImg(state, prev, send)}
			${Cover(state, prev, send)}
    </div>
  `
}
