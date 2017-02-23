import html from 'choo/html'
import {css} from 'glamor'
import {main, colorPrimary, colorSecondary, colorTertiary} from 'src'
import headImg from 'assets/opbg.jpg'

const headImgContainer = css(
	{	backgroundImage: `url(${headImg})`
	, backgroundPosition: '50% 60%'
	, backgroundSize: 'cover'
	,	height: '100vh'
	, overflow: 'hidden'
	,	position: 'relative'
	}
)
const gradient = css(
	{	backgroundImage: 'radial-gradient(ellipse, transparent 30%, #000 100%)'
	,	height: '100%'
	,	width: '100%'
	}
)
const countdownContainer = css(
	{ color: colorSecondary
	, fontSize: '3em'
	,	left: '50%'
	, padding: '20px'
	,	position: 'absolute'
	, textAlign: 'center'
	, top: '10%'
	, transform: 'translateX(-50%)'
	, width: '80%'
	, '@media(max-width: 667px)':
		{ fontSize: '1.8em'
		, width: '100%'
		}
	}
)
const countdown = css(
	{ whiteSpace: 'nowrap'
	}
)
const bounce = css.keyframes(
	{ '0%':
		{ opacity: '0'
		,	transform: 'translate(-50%, -20px)'
		}
	, '50%':
		{ opacity: '1'
		,	transform: 'translate(-50%, 0)'
		}
	}
)
const arrowIcon = css(
	{ animation: `${bounce} 2s infinite`
	,	bottom: '10px'
	,	fill: colorSecondary
	,	height: '50px'
	, left: '50%'
	, position: 'absolute'
	, transform: 'translate(-50%, 0)'
	, width: '50px'
	}
)
const count = (time) => {
	const hourConversion = 24
	const minuteConversion = 60
	const secondConversion = 60
	const millisecondConversion = 1000
	const daysConversion = hourConversion * minuteConversion * secondConversion * millisecondConversion
	const hoursConversion = minuteConversion * secondConversion * millisecondConversion
	const minutesConversion = secondConversion * millisecondConversion
	const secondsConversion = millisecondConversion
	let days = Math.floor( time / daysConversion )
	let hours = Math.floor( (time - days * daysConversion) / hoursConversion )
	let minutes = Math.floor( (time - (days * daysConversion) - (hours * hoursConversion)) / minutesConversion )
	let seconds = Math.floor( (time - (days * daysConversion) - (hours * hoursConversion) - (minutes * minutesConversion)) / ( secondsConversion ))
	const pad = (n) => (n < 10 ? '0' + n : n)
	if (minutes === 60) {
		hours++
		minutes = 0
	}
	if (hours === 24) {
		days++
		hours = 0
	}
	if (minutes === 60) {
		hours++
		minutes = 0
	}
	return `${days}d : ${pad(hours)}h : ${pad(minutes)}m : ${pad(seconds)}s`
}

export default (state, prev, send) => {
	const time = () => {
		let currTime = new Date().getTime()
		let weddingTime = new Date(2017, 5, 17)
		send('countdown', count(weddingTime - currTime))
	}
	time()
	setInterval(time, 1000)
	return html`
		<section class='${headImgContainer}'>
			<div class=${gradient}>
				<div class=${countdownContainer}>
					<div class=${countdown}>${state.countdown}</div>
					<div>until the big day!</div>
				</div>
				<svg class=${arrowIcon}>
					<use xlink:href="#icon-arrow" />
				</svg>
			</div>
		</section>
	`
}
