import 'index.html'
import 'styles.css'
import choo from 'choo'
import html from 'choo/html'
import {css} from 'glamor'

import Main from 'Main'
import OurStory from 'OurStory'
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
  , [ [ '/', Main ]
    , [ '/story', OurStory ]
    , [ '/404', MIA ]
    ]
)

const tree = app.start()
document.body.appendChild(tree)
