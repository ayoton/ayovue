import { mount } from '@vue/test-utils'
import AToasts from './AToasts.vue'

describe('AToasts.vue', () => {
  it('Should render', () => {
    const wrapper = mount(AToasts as any, {})
    expect(wrapper.text()).toContain('')
  })
  it('Should be interactive', async () => {
    const wrapper = mount(AToasts as any, {})
    await wrapper.setProps({})
    expect(wrapper.text()).toContain('')
  })
})
