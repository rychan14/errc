import html from 'choo/html'
import {css} from 'glamor'

const button = css(
  { backgroundColor: 'rgba( 50, 50, 50, 0.2)'
  , border: '1px solid white'
  , borderRadius: '2px'
  , color: 'white'
  , cursor: 'pointer'
  , letterSpacing: '10px'
  , fontSize: '18px'
  , padding: '10px 50px'
  , textDecoration: 'none'
  , transition: 'background-color 100ms cubic-bezier(0.1, 0.7, 1.0, 0.1)'
  , ':hover':
    { backgroundColor: 'rgba( 255, 255, 255, 0.2)'
    , transition: 'background-color 100ms cubic-bezier(0.1, 0.7, 1.0, 0.1)'
    }
  }
)

export default (state, prev, send) => {
  return html`
    <a href='https://goo.gl/forms/WiM7LoK9I75CQNS52' class=${button}>
      RSVP
    </a>
  `
}
export const a = () => {
  return html`
    <svg class="icon icon-heart">
      <use xlink:href="#icon-heart"/>
    </svg>
  `
}
