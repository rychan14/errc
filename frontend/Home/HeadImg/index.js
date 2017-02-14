import html from 'choo/html'
import {css} from 'glamor'
import headImg from 'assets/opbg2.jpg'

const headImgContainer = css(
	{	backgroundImage: `url(${headImg})`
	, backgroundPosition: '50% 60%'
	, backgroundSize: 'cover'
	,	height: '100vh'
	, overflow: 'hidden'
	,	position: 'relative'
	}
)

export default (state, prev, send) => {
	return html`
		<section class=${headImgContainer}>
		</section>
	`
}
