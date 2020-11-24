'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.post('/user', 'UserController.store').validator('User')
Route.get('/user/:id', 'UserController.show')
Route.get('/users', 'UserController.index')

Route.post('/post', 'PostController.store')
Route.get('/myPosts/:user_id', 'PostController.myPosts')
Route.delete('/post/:id', 'PostController.delete')

Route.post('/comment', 'CommentController.store')
Route.get('/postComments/:post_id', 'CommentController.postComments')
Route.get('/myComments/:user_id', 'CommentController.myComments')
Route.put('/comment/:id', 'CommentController.update')
