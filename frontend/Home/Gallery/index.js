import html from 'choo/html'
import {css} from 'glamor'

const gallery = css(
  { padding: '60px 30px'
  }
)
const title = css(
  { fontSize: '30px'
  , margin: '0 0 20px 0'
  }
)
const grid = css(
  { display: 'flex'
  , flexFlow: 'row wrap'
  }
)
const gridItem = css(
  { border: '1px solid black'
  , flex: '0 1 25%'
  , height: '50px'
  }
)

const images = [
  { source: '' },
  { source: '' },
  { source: '' },
  { source: '' },
  { source: '' },
  { source: '' },
  { source: '' },
  { source: '' }
]

export default (state, prev, send) => {
  return html`
    <section class=${gallery}>
      <h1 class=${title}>Gallery</h1>
      <div class=${grid}>
        ${images.map(({source}) => {
          return html`
            <div class=${gridItem}></div>
          `
        })}
      </div>
    </section>
  `
}
