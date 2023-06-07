import { mount } from '@vue/test-utils'
import AButton from './AButton.vue'

describe('AButton.vue', () => {
  it('Should render', async () => {
    const wrapper = await mount(AButton as any, {
      props: {
        raised: true,
        outlined: true,
        rounded: true,
        flat: true,
        text: true,
        icon: true,
        loading: true,
        block: true,
        variant: true,
        size: true,
        disabled: false
      },
      slots: {
        default: 'I am btn'
      }
    })
    console.log('classed', wrapper.classes())

    expect(wrapper.find('button').exists())
    expect(wrapper.text()).toContain('I am btn')
    // expect(wrapper.classes()).includes('a-raised')
    // expect(wrapper.classes()).includes('a-outlined')
    // expect(wrapper.classes()).includes('a-rounded')
    // expect(wrapper.classes()).includes('a-flat')
    // expect(wrapper.classes()).includes('a-text')
    // expect(wrapper.classes()).includes('a-icon')
    // expect(wrapper.classes()).includes('a-loading')
    // expect(wrapper.classes()).includes('a-block')
    // expect(wrapper.classes()).includes('a-primary')
    expect(wrapper.attributes().disabled).toBeUndefined()
  })

  it('Should be interactive', async () => {
    const wrapper = mount(AButton as any, {
      props: {
        disabled: true
      }
    })

    expect(wrapper.attributes()).haveOwnProperty('disabled')

    await wrapper.setProps({
      variant: 'info',
      disabled: false
    })

    expect(wrapper.classes()).includes('a-info')

    expect(wrapper.attributes().disabled).toBeUndefined()
  })
})
