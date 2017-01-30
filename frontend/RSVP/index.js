import html from 'choo/html'
import {css} from 'glamor'

const button = css(
  { backgroundColor: 'rgba( 0, 0, 0, 0.6 )'
  , border: '1px solid rgba( 0, 0, 0, 0.6 )'
  , borderRadius: '3px'
  , color: 'white'
  , cursor: 'pointer'
  , letterSpacing: '10px'
  , fontSize: '2em'
  , padding: '10px 50px'
  , position: 'absolute'
  , right: '10px'
  , textDecoration: 'none'
  , top: '50%'
  , transition: 'background-color 100ms cubic-bezier(0.1, 0.7, 1.0, 0.1), color 100ms cubic-bezier(0.1, 0.7, 1.0, 0.1)'
  , transform: 'translateY(-50%)'
  , ':hover':
    { backgroundColor: 'white'
    , color: 'rgba( 0, 0, 0, 0.6 )'
    , transition: 'background-color 100ms cubic-bezier(0.1, 0.7, 1.0, 0.1), color 100ms cubic-bezier(0.1, 0.7, 1.0, 0.1)'
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
