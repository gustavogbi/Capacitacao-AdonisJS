'use strict'

const Comment = use('App/Models/Comment')
const Post = use('App/Models/Post')
const User = use('App/Models/User')

class CommentController {
  async store({request, response}) {
    const data = request.all()

    const comment = await Comment.create(data);

    response.send(comment)
  }

  async postComments({request, response, params}){
    const post = await Post.find(params.post_id)
    const comments = post.comments().fetch()
    return comments
  }

  async myComments({request, response, params}) {
    const user = await User.find(params.user_id)
    const comments = user.comments().fetch()
    return comments
  }

  async delete({response, request, params}) {
    const post = await Post.find(params.id)

    await post.delete()
  }

  async update({request, response, params}) {
    const data = request.all()
    const comment = await Comment.find(params.id)
    comment.merge(data)
    await comment.save()
  }
}

module.exports = CommentController
