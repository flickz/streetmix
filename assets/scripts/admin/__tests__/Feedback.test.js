/* eslint-env jest */
import React from 'react'
import { shallow } from 'enzyme'
import Feedback from '../Feedback'

describe('Feedback', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Feedback statusCode={400} />)
    expect(wrapper.children().length).toEqual(1)
  })
})
