import React from 'react'

import Form from './Form'
import Feedback from './Feedback'
import { STATUS_CODES } from './statusCodes'

import { validateDataFromServer } from './xhr'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      statusCode: STATUS_CODES.NO_FEEDBACK
    }
  }
  showFeedback = (response) => {
    this.setState({
      statusCode: response.status
    })
  }
  handleFormSubmission = (data) => {
    validateDataFromServer(data)
      .then(this.showFeedback)
  }
  render () {
    const statusCode = this.state.statusCode
    return (
      <div>
        <h1>Streetmix Admin</h1>
        <Feedback statusCode={statusCode} />
        <Form onSubmit={this.handleFormSubmission} />
      </div>
    )
  }
}

export default App
