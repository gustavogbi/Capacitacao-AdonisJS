'use strict'

const User = use('App/Models/User')

class UserController {
  async store({request}) {
    const data = request.all()

    const user = await User.create(data)

    return user
  }

  async show({request, response, params}) {
    const user = await User.find(params.id)
    return user.toJSON()
  }

  async index(){
    const users = await User.all();
    return users.toJSON()
  }
}

module.exports = UserController
