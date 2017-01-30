import 'index.html'
import 'styles.css'
import choo from 'choo'

import Home from 'Home'
import Events from 'Events'
import OurStory from 'OurStory'
import BridalParty from 'BridalParty'
import Registry from 'Registry'
import MIA from 'MIA'

const app = choo()

app.model(
  { state:
    { navOpen: false }
  , reducers:
    { toggleNav:
      (state) => ({ navOpen: !state.navOpen })
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
