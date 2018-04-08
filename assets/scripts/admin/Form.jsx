import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      birthDate: ''
    }
  }
  static propTypes = {
    onSubmit: PropTypes.func,
    onReset: PropTypes.func
  }
  handleChange = (event) => {
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state)
  }
  // TODO: Write test
  handleClick = (event) => {
    event.preventDefault()
    this.resetForm()
  }
  resetForm () {
    this.props.onReset()
    this.setState({
      fullName: '',
      email: '',
      birthDate: ''
    })
  }
  render () {
    const { email, fullName, birthDate } = this.state
    // We set the maximum date to the current date since we
    // don't know about child birth after today
    const maxDate = moment().format('YYYY-MM-DD')
    return (
      <div>
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" value={fullName} className="form-control" name="fullName" onChange={this.handleChange} placeholder="Full name" required />
          </div>
          <div className="form-group">
            <input type="email" value={email} className="form-control" name="email" onChange={this.handleChange} placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="date" value={birthDate} max={maxDate} className="form-control" name="birthDate" onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <input className="btn btn-submit" type="submit" value="Submit" />
            <input className="btn btn-reset" type="button" onClick={this.handleClick} value="Reset" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form
