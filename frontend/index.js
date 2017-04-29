import 'index.html'
import 'styles.css'
import 'assets/favicon-final.ico'
import choo from 'choo'

import Home from 'src/Home'
import WeddingEvents from 'src/WeddingEvents'
import OurStory from 'src/OurStory'
import Registry from 'src/Registry'
import BridalParty from 'src/BridalParty'
import Accommodations from 'src/Accommodations'
import MIA from 'src/MIA'

const app = choo()

app.model(
  { state:
    { navOpen: false
		,	viewport: 0
		, countdown: null
		}
  , reducers:
    { toggleNav: (state) => ({ navOpen: !state.navOpen })
		, viewportCheck: (state, viewportWidth) => ({ viewport: viewportWidth })
		, countdown: (state, countdown) => ({ countdown: countdown })
    }
  }
)

app.router(
  { default: '/404' }
  , [ [ '/', Home ]
    , [ '/events', WeddingEvents]
    , [ '/story', OurStory ]
    , [ '/registry', Registry ]
    , [ '/party', BridalParty ]
    , [ '/accommodations', Accommodations ]
    , [ '/404', MIA ]
    ]
)

const tree = app.start()
document.body.appendChild(tree)
