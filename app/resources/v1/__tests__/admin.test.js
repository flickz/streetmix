/* eslint-env jest */
import request from 'supertest'
import express from 'express'
import admin from '../admin'

const user = {
  validInfo: {
    fullName: 'Oluwaseun Omoyajowo',
    email: 'omoyajowo2015@gmail.com',
    birthDate: '2012-12-12'
  },
  invalidInfo: {
    fullName: 'Oluwaseun Omoyajowo',
    email: 'oluwaseungmail.com',
    birthDate: '2012-12-12'
  }
}

function setupMockServer () {
  const app = express()

  app.use(express.json())
  app.post('/api/v1/admin', admin.post)

  return app
}

describe('post api/v1/admin', function () {
  const app = setupMockServer()

  it('should respond with 200 ok when user info is sent', function () {
    // Post to admin with user info
    return request(app)
      .post('/api/v1/admin/')
      .type('json')
      .send(JSON.stringify(user.validInfo))
      .then((response) => {
        expect(response.statusCode).toEqual(200)
      })
  })
  it('should respond with 400 Bad request when invalid user info is sent', function () {
    // Post to admin with invalid user info
    return request(app)
      .post('/api/v1/admin/')
      .type('json')
      .send(user.invalidInfo)
      .then((response) => {
        expect(response.statusCode).toEqual(400)
      })
  })
  it('should respond with 400 Bad request when no user info is sent', function () {
    // Post to admin with no user info
    return request(app)
      .post('/api/v1/admin/')
      .type('json')
      .send('')
      .then((response) => {
        expect(response.statusCode).toEqual(400)
      })
  })
})
