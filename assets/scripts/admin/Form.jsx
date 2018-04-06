import React from 'react'
import PropTypes from 'prop-types'

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
    onSubmit: PropTypes.func
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
  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name="fullName" onChange={this.handleChange} placeholder="Full name" required />
          </div>
          <div>
            <input type="email" name="email" onChange={this.handleChange} placeholder="Email" required />
          </div>
          <div>
            <input type="date" name="birthDate" onChange={this.handleChange} required />
          </div>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Form
