import {
  shallowMount
} from '@vue/test-utils'
import TodoList from '../../src/containers/TodoList'
import UndoList from '../../src/containers/UndoList'

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
  // 注意:这个其实是属于集成测试了
  // it(' TodoList 监听到 Header 的 add 事件时,会增加一个内容', () => {
  //   const wrapper = shallowMount(TodoList)
  //   const header = wrapper.find(Header)
  //   // wrapper.vm.addUndoItem('dell lee')
  //   header.vm.$emit('add', 'dell lee')
  //   const undoList = wrapper.vm.$data.undoList
  //   expect(undoList).toEqual(['dell lee'])
  // })
  it('TodeList 中 addUndoItem 被执行后,内容会加一项', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [{
        status: 'div',
        value: 1
      }, {
        status: 'div',
        value: 2
      }, {
        status: 'div',
        value: 3
      }]
    })
    wrapper.vm.addUndoItem(4)
    expect(wrapper.vm.$data.undoList).toEqual([{
      status: 'div',
      value: 1
    }, {
      status: 'div',
      value: 2
    }, {
      status: 'div',
      value: 3
    }, {
      status: 'div',
      value: 4
    }])
  })
  it('TodoList 调用 UndoList,应该传递 list 参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.find(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })
  it(' TodoList 中 handleDeleteItem 方法被调用时,UndoList 列表内容会减少一个', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [{
        status: 'div',
        value: 1
      }, {
        status: 'div',
        value: 2
      }, {
        status: 'div',
        value: 3
      }]
    })
    wrapper.vm.handleItemDelete(1)
    expect(wrapper.vm.$data.undoList).toEqual([{
      status: 'div',
      value: 1
    }, {
      status: 'div',
      value: 3
    }])
  })
  it(' changeStatus方法执行时,UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [{
        status: 'div',
        value: 1
      }, {
        status: 'div',
        value: 2
      }, {
        status: 'div',
        value: 3
      }]
    })
    wrapper.vm.changeStatus(1)
    expect(wrapper.vm.$data.undoList).toEqual([{
      status: 'div',
      value: 1
    }, {
      status: 'input',
      value: 2
    }, {
      status: 'div',
      value: 3
    }])
  })

  it(' resetStatus 方法执行时,UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [{
        status: 'div',
        value: 1
      }, {
        status: 'input',
        value: 2
      }, {
        status: 'div',
        value: 3
      }]
    })
    wrapper.vm.resetStatus()
    expect(wrapper.vm.$data.undoList).toEqual([{
      status: 'div',
      value: 1
    }, {
      status: 'div',
      value: 2
    }, {
      status: 'div',
      value: 3
    }])
  })

  it(' changeItemValue 方法执行时,UndoList 内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [{
        status: 'div',
        value: 1
      }, {
        status: 'input',
        value: 2
      }, {
        status: 'div',
        value: 3
      }]
    })
    wrapper.vm.changeItemValue({
      index: 1,
      value: '444'
    })
    expect(wrapper.vm.$data.undoList).toEqual([{
      status: 'div',
      value: 1
    }, {
      status: 'input',
      value: '444'
    }, {
      status: 'div',
      value: 3
    }])
  })
})
