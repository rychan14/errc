import html from 'choo/html'
import {css} from 'glamor'

export default (state, prev, send) => {
  return html`
    <div>
      <h1>Whoops! This Page doesn't exist</h1>
      <a href="/">Return to Home</a>
    </div>
  `
}
