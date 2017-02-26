import html from 'choo/html'
import {css} from 'glamor'
import {
	colorTertiary,
	content,
	cover,
	header,
	overlay,
	title
} from 'src'
import CrateAndBarrel from 'assets/CrateAndBarrel.jpg'
import BedAndBath from 'assets/BedAndBath.jpg'
import Amazon from 'assets/Amazon.jpg'
import BestBuy from 'assets/BestBuy.jpg'
import NavBar from 'src/NavBar'

const registry = css(
	{ marginTop: '30px'
	, '@media(max-width: 667px)':
		{ marginTop: '50px'
		}
	}
)
const registryList = css(
	{ marginTop: '30px'
	, '@media(max-width: 667px)':
		{ marginTop: '0'
		}
	}
)
const description = css(
	{ fontSize: '1.3em'
	}
)
const container = css(
	{ backgroundColor: 'white'
	,	border: '1px solid black'
	, margin: '0 auto 20px'
	, maxWidth: '100%'
	, padding: '30px 10px'
	,	position: 'relative'
	, width: '300px'
	}
)
const bedBathContainer = css(
	{ padding: '20px 10px'
	}
)
const amazonContainer = css(
	{ padding: '10px 0 0 0'
	}
)
const bestBuyContainer = css(
	{ padding: '10px 0 0 0'
	}
)
const link = css(
	{ height: '100%'
	, width: '100%'
	}
)
const logo = css(
	{ maxWidth: '100%'
	, padding: '0 10px'
	, width: '500px'
	}
)
export default (state, prev, send) => {
  return html`
    <div>
      ${NavBar(state, prev, send, {isAlt: false})}
      <section class=${cover}>
				<div class=${overlay}></div>
				<div class=${content}>
					<div class=${registry}>
						<header class=${header}>
							<h1 class=${title}>Registry</h1>
							<p class=${description}>If you prefer to give in this way, here is a list of places where we are registered</p>
						</header>
						<div class=${registryList}>
							<div class=${container}>
								<a class=${link} href='http://www.crateandbarrel.com/gift-registry/erica-rho-and-ryan-chan/r5657421'>
									<img class=${logo} src=${CrateAndBarrel} />
								</a>
							</div>
							<div class='${container} ${bedBathContainer}'>
								<a class=${link} href='https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&inventoryCallEnabled=true&registryId=544281500&pwsurl='>
									<img class=${logo} src=${BedAndBath} />
								</a>
							</div>
							<div class='${container} ${amazonContainer}'>
								<a class=${link} href='https://www.amazon.com/wedding/erica-rho-ryan-chan-fallbrook-june-2017/registry/FWEVY4RV9IPX'>
									<img class=${logo} src=${Amazon} />
								</a>
							</div>
							<div class='${container} ${bestBuyContainer}'>
								<a class=${link} href='https://www-ssl.bestbuy.com/profile/list/searchviewlist?listType=weddingregistrylist&listId=57e98485-fa5e-11e6-bfbc-0050568f25b9#!/view/'>
									<img class=${logo} src=${BestBuy} />
								</a>
							</div>
						</div>
					</div>
				</div>
      </section>
    </div>
  `
}
