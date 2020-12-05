

import Router from 'koa-router'

const router = new Router({ prefix: '/pledge' })

import Contacts from '../modules/contacts.js'
const dbName = 'website.db'

async function checkAuth(ctx, next) {
	console.log('secure router middleware')
	console.log(ctx.hbs)
	if(ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure')
	await next()
}

router.use(checkAuth)

router.get('/', async ctx => {
 const contacts = await new Contacts(dbName)
	try {
  const records = await contacts.all()
  console.log(records)
  ctx.hbs.records = records
		await ctx.render('pledge', ctx.hbs)
	} catch(err) {
		ctx.hbs.error = err.message
		await ctx.render('error', ctx.hbs)
	}
})

router.get('/add', async ctx => {
 await ctx.render('add', ctx.hbs)
})
router.post('/add', async ctx => {
  console.log('adding a user')
  return ctx.redirect('/pledge?msg=new user added')
})

export default router
