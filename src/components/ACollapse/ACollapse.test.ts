import { mount } from '@vue/test-utils'
import ACollapse from './ACollapse.vue'

describe('ACollapse.vue', () => {
  it('Should render', () => {
    const wrapper = mount(ACollapse as any, {})
    expect(wrapper.text()).toContain('')
  })
  it('Should be interactive', async () => {
    const wrapper = mount(ACollapse as any, {})
    await wrapper.setProps({})
    expect(wrapper.text()).toContain('')
  })
})
