import {
  shallowMount
} from '@vue/test-utils'
import TodoList from '../../src/containers/TodoList'
import Header from '../../src/containers/Header'

describe('TodoList 测试', () => {
  it(' TodoList 包含 header', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.find('[data-test=header]').exists()).toBe(true)
  })
  it(' TodoList 包含 UndoList', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.find('[data-test=undolist]').exists()).toBe(true)
  })
  it(' TodoList 初始化时,undoList 应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.$data.undoList
    expect(undoList instanceof Array).toBe(true)
  })
  it(' TodoList 监听到 Header 的 add 事件时,会增加一个内容', () => {
    const wrapper = shallowMount(TodoList)
    const header = wrapper.find(Header)
    // wrapper.vm.addUndoItem('dell lee')
    header.vm.$emit('add', 'dell lee')
    const undoList = wrapper.vm.$data.undoList
    expect(undoList).toEqual(['dell lee'])
  })
})
