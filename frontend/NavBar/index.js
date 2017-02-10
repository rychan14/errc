import html from 'choo/html'
import {css} from 'glamor'

import RSVP from 'RSVP'

const navBar = css(
  { backgroundColor: '#202326'
  , borderRight: '1px solid #E6E6E6'
  , color: '#FFF'
  , height: '100vh'
  , left: '0'
  , padding: '20px 0'
  , position: 'fixed'
  , top: '0'
  , width: '350px'
  , zIndex: '10'
  , '@media(max-width: 1024px)':
    { height: 'auto'
    , position: 'relative'
    , width: '100%'
    }
  }
)
const title = css(
  { fontFamily: 'Tangerine'
  , fontSize: '4em'
  , fontWeight: 'bold'
  , marginBottom: '10px'
  , textAlign: 'center'
  }
)
const heart = css(
  { height: '25px'
  , width: '25px'
  }
)
const redHeart = css(
  { fill: '#FFAAAA'
  , left: '8px'
  , position: 'relative'
  , zIndex: '2'
  }
)
const whiteHeart = css(
  { fill: '#E6E6E6'
  , position: 'relative'
  , right: '8px'
  }
)
const navListItem = css(
  { cursor: 'pointer'
  , display: 'block'
  , textAlign: 'center'
  }
)
const navLink = css(
  { color: '#FFF'
  , cursor: 'pointer'
  , display: 'block'
  , fontSize: '1.3em'
  , margin: '20px 0'
  , textDecoration: 'none'
  , width: '100%'
  , '&:hover':
    { textDecoration: 'underline'
    }
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
  return html`
    <nav class=${navBar}>
      <div class=${title}>
        Erica
        <svg class='${redHeart} ${heart}'>
          <use xlink:href="#icon-heart"/>
        </svg>
        <svg class='${whiteHeart} ${heart}'>
          <use xlink:href="#icon-heart"/>
        </svg>
        Ryan
      </div>
      ${list.map(({title, link}) => {
        return html`
          <li class=${navListItem}>
            <a class=${navLink} href=${link}>${title}</a>
          </li>
        `
      })}
    </nav>
  `
}
