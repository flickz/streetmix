/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import App from '../App'
import { STATUS_CODES } from '../statusCodes'

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.children().length).toEqual(3)
    expect(wrapper.state().statusCode).toEqual(STATUS_CODES.NO_FEEDBACK)
  })
})
