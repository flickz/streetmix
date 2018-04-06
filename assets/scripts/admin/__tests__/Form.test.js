/* eslint-env jest */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Form from '../Form'

const onSubmit = jest.fn()

const userInfo = {
  fullName: 'Oluwaseun omoyajowo',
  email: 'omoyajowo2015@gmail.com',
  birthDate: '1998-01-12'
}
// Set inputs change event
const fullNameInputEvent = {
  target: {name: 'fullName', value: userInfo.fullName}
}
const emailInputEvent = {
  target: {name: 'email', value: userInfo.email}
}
const birthDateInputEvent = {
  target: {name: 'birthDate', value: userInfo.birthDate}
}

describe('Form', () => {
  it('render form without crashing', () => {
    const wrapper = shallow(<Form onSubmit={onSubmit} />)
    expect(wrapper.find('form').children().length).toEqual(4)
    expect(wrapper.state().fullName).toEqual('')
    expect(wrapper.state().email).toEqual('')
    expect(wrapper.state().birthDate).toEqual('')
  })

  it('should submit form', () => {
    const form = mount(<Form onSubmit={onSubmit} />)
    form.find('[name="fullName"]').simulate('change', fullNameInputEvent)
    form.find('[name="email"]').simulate('change', emailInputEvent)
    form.find('[name="birthDate"]').simulate('change', birthDateInputEvent)
    form.find('form').simulate('submit', { preventDefault: jest.fn() })

    expect(form.state().fullName).toEqual(userInfo.fullName)
    expect(form.state().email).toEqual(userInfo.email)
    expect(form.state().birthDate).toEqual(userInfo.birthDate)
    expect(form.props().onSubmit).toBeCalled()
  })
})
