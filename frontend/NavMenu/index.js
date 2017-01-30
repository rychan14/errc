import html from 'choo/html'
import {css} from 'glamor'

import Icon from './Icon'

const open = css.keyframes(
  { '0%':
    { transform: 'translateX(-100%)' }
  , '70%':
    { transform: 'translateX(-20%)' }
  , '100%':
    { transform: 'translateX(0)' }
  }
)
const navMenu = css(
  { backgroundColor: 'rgba( 255, 255, 255, 0.9 )'
  , height: '100vh'
  , position: 'fixed'
  , top: '0'
  , transform: 'translateX(-100%)'
  , transition: 'transform 0.7s'
  , width: '250px'
  , zIndex: '10'
  }
)
const navMenuOpen = css(
  { animation: `${open} 0.7s`
  , transform: 'translateX(0)'
  }
)
const navMenuIconWrapper = css(
  { alignItems: 'center'
  , backgroundColor: 'rgba( 0, 0, 0, 0.6 )'
  , cursor: 'pointer'
  , display: 'flex'
  , justifyContent: 'center'
  , left: '100%'
  , position: 'absolute'
  , height: '8vh'
  , top: '0'
  , width: '100px'
  }
)
const navTitle = css(
  { alignItems: 'center'
  , backgroundColor: 'rgba( 0, 0, 0, 0.6 )'
  , color: 'rgba( 0, 0, 0, 0.7 )'
  , display: 'flex'
  , height: '8vh'
  }
)
const navList = css(
  { position: 'relative'
  }
)
const navListItem = css(
  { cursor: 'pointer'
  , display: 'block'
  }
)
const navLink = css(
  { alignItems: 'center'
  , color: 'rgba( 0, 0, 0, 0.7 )'
  , cursor: 'pointer'
  , display: 'flex'
  , fontSize: '1.8em'
  , height: '8vh'
  , marginLeft: '10px'
  , textDecoration: 'none'
  , width: '100%'
  }
)
const list =
  [ { title: 'Home'
    , link: '/'
    }
  , { title: 'Wedding Events'
    , link: '/events'
    }
  , { title: 'Our Story'
    , link: '/story'
    }
  , { title: 'Bridal Party'
    , link: '/party'
    }
  , { title: 'Registry'
    , link: '/registry'
    }
  ]
export default (state, prev, send) => {
  const toggle = () => send('toggleNav')
  return html`
    <nav class='${navMenu} ${state.navOpen ? navMenuOpen : null}'>
      <div class=${navMenuIconWrapper} onclick=${toggle}>
        ${Icon(state, prev, send)}
      </div>
      <div class=${navTitle}>
      </div>
      <ul class=${navList}>
        ${list.map(({title, link}) => {
          return html`
            <li class=${navListItem} onclick=${toggle}>
              <a class=${navLink} href=${link}>${title}</a>
            </li>
          `
        })}
      </ul>
    </nav>
  `
}
