import Koa from 'koa'
import send from 'koa-send'
import Router from 'koa-router'
import compress from 'koa-compress'

const app = new Koa()
const router = new Router()
const port = process.env.PORT || 9000

router.get('/(.*)', async (ctx, next) => {
  await send(ctx, 'index.html', {root: 'dist/public/'})
  await next()
})

router.get('/', async (ctx, next) => {
  await send(ctx, 'index.html', {root: 'dist/public/'})
  await next()
})

app
  .use(compress({
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  }))
  .use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms, Status: ${ctx.response.status}`)
  })
  .use(router.routes())
  .use(async (ctx, next) => {
    await send(ctx, ctx.path, {root: 'dist/public/'})
    await next()
  })

app.listen(port, () => {
	console.log(`listening on ${port}`)
})
