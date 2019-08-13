import {
  shallowMount
} from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import Vue from 'vue'
describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const hello = document.createElement('div')
    hello.className = 'hello'
    document.body.append(hello)

    new Vue({
      render: h => h(HelloWorld, {
        props: {
          msg: 'dell lee'
        }
      })
    }).$mount('.hello')
    expect(document.querySelector('.hello').classList.length).toBe(1)
    // console.log(document.body.innerHTML)
  })

  it('render props.msg when passed', () => {
    const msg = 'zxx'
    const wrapper = shallowMount(HelloWorld, {
      propsData: {
        msg
      }
    })
    expect(wrapper.text()).toMatch(msg)
    console.log(wrapper.findAll('.mmm'), wrapper.findAll('h1').length)
    expect(wrapper.findAll('.mmm').length).toBe(1)
    wrapper.setProps({
      msg: 'hello'
    })
    expect(wrapper.props('msg')).toEqual('hello')
  })
})
