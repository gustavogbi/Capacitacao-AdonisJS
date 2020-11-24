'use strict'

class User {
  get rules () {
    return {
      username: 'required|string',
      email: 'required|string|email',
      password: 'required|string|min:5|max:20'
    }
  }

  async fails(errorMessages) {
    return this.ctx.response.status(400).send(errorMessages);
  }
}

module.exports = User
