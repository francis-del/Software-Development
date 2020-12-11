
import Router from 'koa-router'

const router = new Router({ prefix: '/pledge' })

import Contacts from '../modules/contacts.js'
const dbName = 'website.db' 

async function checkAuth(ctx, next) {
	console.log('secure router middleware')
	console.log(ctx.hbs)
	if(ctx.hbs.authorised !== true) 
  return ctx.redirect('/login?msg=you need to log in&referrer=/secure')
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

router.get('/details/:id', async ctx => {
 const contacts = await new Contacts(dbName)
 try {
  console.log(`record: ${ctx.params.id}`)
  const record = await contacts.getByID(ctx.params.id)
  console.log(ctx.hbs)
  ctx.hbs.id = ctx.params.id
  await ctx.render('details', ctx.hbs)
 } catch(err) {
  console.log(err)
  await ctx.render('error', ctx.hbs)
 }
})

router.get('/add', async ctx => {
 await ctx.render('add', ctx.hbs)
})

router.post('/add', async ctx => {
 const contacts = await new Contacts(dbName)
 try {
  ctx.request.body.account = ctx.session.userid
 if(ctx.request.files.avatar.name) {
  ctx.request.body.filePath = ctx.request.files.avatar.path
  ctx.request.body.fileName = ctx.request.files.avatar.name
  ctx.request.body.fileType = ctx.request.files.avatar.type
 }
  await contacts.add(ctx.request.body)
  return ctx.redirect('/pledge?msg=new donor added')
 } catch(err) {
  console.log(err)
  await ctx.render('error', ctx.hbs)
 } finally {
  contacts.close()
 }
 })


export default router
