'use strict'

const Post = use('App/Models/Post')
const User = use('App/Models/User')

class PostController {
  async store({request, response}) {
    const data = request.only(['title', 'content', 'user_id'])

    const post = await Post.create(data);

    response.send(post)
  }

  async myPosts({request, response, params}){
    const user = await User.find(params.user_id)
    const posts = user.posts().fetch()

    return posts
  }

  async delete({response, request, params}) {
    const post = await Post.find(params.id)

    await post.delete()
  }
}

module.exports = PostController
