import html from 'choo/html'
import {css} from 'glamor'

const button = css(
  { border: '3px solid white'
  , borderRadius: '3px'
  , color: 'white'
  , cursor: 'pointer'
	, display: 'inline-block'
  , fontSize: '1.5em'
  , letterSpacing: '10px'
  , padding: '7px 45px 7px 50px'
	, textAlign: 'center'
  , textDecoration: 'none'
  , transition: 'background-color 100ms cubic-bezier(0.1, 0.7, 1.0, 0.1), color 100ms cubic-bezier(0.1, 0.7, 1.0, 0.1)'
  , ':hover':
    { backgroundColor: 'white'
		, border: '3px solid #FFAAAA'
    , color: '#FFAAAA'
    , transition: 'background-color 100ms cubic-bezier(0.1, 0.7, 1.0, 0.1), color 100ms cubic-bezier(0.1, 0.7, 1.0, 0.1)'
    }
	, '@media(max-width: 1024px)':
		{ padding: '7px 25px 7px 30px'
		}
	, '@media(max-width: 667px)':
		{ fontSize: '1em'
		,	padding: '5px 15px 5px 20px'
		}
	}
)

export default (state, prev, send) => {
  return html`
    <a href='https://goo.gl/forms/WiM7LoK9I75CQNS52' class=${button}><span>RSVP</span></a>
  `
}
