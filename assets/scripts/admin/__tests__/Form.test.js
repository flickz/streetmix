/* eslint-env jest */
import React from 'react'
import { shallow, mount } from 'enzyme'
import Form from '../Form'

const onSubmit = jest.fn()
const onReset = jest.fn()

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
    const wrapper = shallow(<Form onReset={onReset} onSubmit={onSubmit} />)
    expect(wrapper.find('form').children().length).toEqual(4)
    expect(wrapper.state().fullName).toEqual('')
    expect(wrapper.state().email).toEqual('')
    expect(wrapper.state().birthDate).toEqual('')
  })
  it('should submit form', () => {
    const wrapper = mount(<Form onReset={onReset} onSubmit={onSubmit} />)
    wrapper.find('[name="fullName"]').simulate('change', fullNameInputEvent)
    wrapper.find('[name="email"]').simulate('change', emailInputEvent)
    wrapper.find('[name="birthDate"]').simulate('change', birthDateInputEvent)
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() })

    expect(wrapper.state().fullName).toEqual(userInfo.fullName)
    expect(wrapper.state().email).toEqual(userInfo.email)
    expect(wrapper.state().birthDate).toEqual(userInfo.birthDate)
    expect(wrapper.props().onSubmit).toBeCalled()
  })
  it('should reset form', () => {
    const wrapper = mount(<Form onReset={onReset} onSubmit={onSubmit} />)
    wrapper.find('[name="fullName"]').simulate('change', fullNameInputEvent)
    wrapper.find('[name="email"]').simulate('change', emailInputEvent)
    wrapper.find('[name="birthDate"]').simulate('change', birthDateInputEvent)
    wrapper.find('[type="button"]').simulate('click')

    expect(wrapper.state().fullName).toEqual('')
    expect(wrapper.state().email).toEqual('')
    expect(wrapper.state().birthDate).toEqual('')
    expect(wrapper.props().onReset).toBeCalled()
  })
})
