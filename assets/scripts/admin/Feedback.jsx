import React from 'react'
import PropTypes from 'prop-types'

import { STATUS } from './status'

class Feedback extends React.Component {
  static propTypes = {
    statusCode: PropTypes.number
  }

  render () {
    let message = ''
    let success
    switch (this.props.statusCode) {
      case STATUS.SUCCESS.code:
        message = STATUS.SUCCESS.message
        success = true
        break
      case STATUS.BAD_REQUEST_ERROR.code:
        message = STATUS.BAD_REQUEST_ERROR.message
        success = false
        break
      case STATUS.SERVER_ERROR.code:
        message = STATUS.SERVER_ERROR.message
        success = false
        break
      default:
        message = ''
    }
    let successClassNames = 'feedback-message success'
    let failureClassNames = 'feedback-message failure'
    return (
      <div className={success ? successClassNames : failureClassNames}>
        <span>{message}</span>
      </div>
    )
  }
}

export default Feedback
