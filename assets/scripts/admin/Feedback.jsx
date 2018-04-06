import React from 'react'
import PropTypes from 'prop-types'

import { STATUS_CODES } from './statusCodes'

class Feedback extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number
  }

  render () {
    let message = ''
    switch (this.props.statusCode) {
      case STATUS_CODES.BAD_REQUEST_ERROR:
        message = 'Please ensure email and date of birth are valid'
        break
      case STATUS_CODES.SERVER_ERROR:
        message = 'Unable to connect to server, try again'
        break
      case STATUS_CODES.SUCCESS:
        message = 'Email and Birth date are valid'
        break
      default:
        message = ''
    }

    return (
      <div>
        <p>{message}</p>
      </div>
    )
  }
}

export default Feedback
