/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import UsersController from '#controllers/users_controller'
import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
import QuotesController from '#controllers/quote_controller'


router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.post('/register',UsersController.prototype.register)
router.post('/login', UsersController.prototype.login)
router.patch('/user',UsersController.prototype.updateUser).use(middleware.auth())


router.get('/quote-of-the-day',QuotesController.prototype.quoteOfTheDay).use(middleware.auth())
router.get('/quotes/:id', QuotesController.prototype.getQuoteById).use(middleware.auth())

