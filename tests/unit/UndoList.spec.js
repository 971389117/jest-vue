import {
  shallowMount
} from '@vue/test-utils'
import UndoList from '../../src/containers/UndoList'
import {
  findTestWrapper
} from './utils/testUtils'

describe('TodoList 测试', () => {
  it('UndoList 参数为[1,2,3], count 值应该为 3,且列表有内容,且存在删除按钮', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    const deleteButtons = findTestWrapper(wrapper, 'delete-button')
    expect(countElem.at(0).text()).toEqual('3')
    expect(listItems.length).toEqual(3)
    expect(deleteButtons.length).toEqual(3)
  })
  it(' UndoList 参数为[], count 值应该为 0,且列表无内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: []
      }
    })
    const countEle = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    expect(countEle.at(0).text()).toEqual('0')
    expect(listItems.length).toEqual(0)
  })
  it('UndoList 删除按钮被点击时, 向外触发删除事件 ', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [1, 2, 3]
      }
    })
    const deleteButton = findTestWrapper(wrapper, 'delete-button').at(1)
    deleteButton.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
    expect(wrapper.emitted().delete[0][0]).toBe(1)
  })
})
