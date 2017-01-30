import html from 'choo/html'
import {css} from 'glamor'

const navMenuIcon = css(
  { cursor: 'pointer'
  , fill: 'white'
  , height: '100%'
  , padding: '20px'
  , width: '100%'
  }
)

export default (state, prev, send) => {
  return (
    state.navOpen
      ? html`
        <svg class=${navMenuIcon}>
          <use xlink:href='#icon-cross' />
        </svg>
      `
      : html`
        <svg class=${navMenuIcon}>
          <use xlink:href='#icon-menu' />
        </svg>
      `
  )
}
