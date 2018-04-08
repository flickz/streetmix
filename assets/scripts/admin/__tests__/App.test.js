/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import { STATUS } from '../status'

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.children().length).toEqual(2)
    expect(wrapper.state().statusCode).toEqual(STATUS.NO_FEEDBACK.code)
  })
})
