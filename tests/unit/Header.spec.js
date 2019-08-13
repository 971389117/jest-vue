import {
  shallowMount
} from '@vue/test-utils'
import Header from '@/containers/Header'

describe('Header.vue', () => {
  let wrapper
  let inputWrapper
  beforeEach(() => {
    wrapper = shallowMount(Header)
    inputWrapper = wrapper.find('[data-test=input]')
  })
  it(' header 包含 input 框', () => {
    expect(inputWrapper.exists()).toBeTruthy()
  })
  it('数据双向绑定', () => {
    inputWrapper.setValue('zxx')
    const inputValue = wrapper.vm.$data.inputValue
    expect(inputValue).toBe('zxx')
  })

  it('按回车调用 add 事件,并清空输入框', () => {
    inputWrapper.setValue('zxx')
    inputWrapper.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeTruthy()
    expect(wrapper.vm.$data.inputValue).toBe('')
  })
  it('按回车时,无内容 无反应', () => {
    inputWrapper.setValue('')
    inputWrapper.trigger('keyup.enter')
    expect(wrapper.emitted().add).toBeFalsy()
  })
  it('Header样式发生改变时,做提示', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
