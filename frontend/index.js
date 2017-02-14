import 'index.html'
import 'styles.css'
import choo from 'choo'

import Home from 'Home'
import Events from 'Events'
import OurStory from 'OurStory'
import BridalParty from 'BridalParty'
import Registry from 'Registry'
import {css} from 'glamor'
import MIA from 'MIA'

const app = choo()

export const main = css(
  { backgroundColor: '#f6f6f6'
  }
)

app.model(
  { state:
    { navOpen: false
		,	viewport: 0
		}
  , reducers:
    { toggleNav: (state) => ({ navOpen: !state.navOpen })
		, viewportCheck: (state, viewportWidth) => ({ viewport: viewportWidth})
    }
  }
)

app.router(
  { default: '/404' }
  , [ [ '/', Home ]
    , [ '/events', Events ]
    , [ '/story', OurStory ]
    , [ '/party', BridalParty ]
    , [ '/registry', Registry ]
    , [ '/404', MIA ]
    ]
)

const tree = app.start()
document.body.appendChild(tree)
