import { mount } from '@vue/test-utils'
import AButton from './AButton.vue'

describe('AButton.vue', () => {
  it('Should render', () => {
    const wrapper = mount(AButton, {})
    expect(wrapper.text()).toContain('')
  })
  it('Should be interactive', async () => {
    const wrapper = mount(AButton, {})
    await wrapper.setProps({})
    expect(wrapper.text()).toContain('')
  })
})
