export const STATUS = {
  NO_FEEDBACK: {
    code: 100,
    message: ''
  },
  BAD_REQUEST_ERROR: {
    code: 400,
    message: 'Oops! Invalid email or date of birth'
  },
  SERVER_ERROR: {
    code: 500,
    message: 'Unable to access the server at the moment, try again!'
  },
  SUCCESS: {
    code: 200,
    message: 'Congratulations! Your email and date of birth are valid'
  }
}
