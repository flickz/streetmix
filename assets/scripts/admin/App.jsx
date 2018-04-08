import React from 'react'

import Form from './Form'
import Feedback from './Feedback'
import { STATUS } from './status'
import { validateDataFromServer } from './xhr'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      statusCode: STATUS.NO_FEEDBACK.code
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
  handleReset = () => {
    this.setState({
      statusCode: STATUS.NO_FEEDBACK.code
    })
  }
  render () {
    const statusCode = this.state.statusCode
    const showFeedback = () => {
      if (statusCode !== STATUS.NO_FEEDBACK.code) {
        return <Feedback statusCode={statusCode} />
      }
    }
    return (
      <div className="content-wrapper">
        <h1>Streetmix Admin</h1>
        {showFeedback()}
        <Form onReset={this.handleReset} onSubmit={this.handleFormSubmission} />
      </div>
    )
  }
}

export default App
