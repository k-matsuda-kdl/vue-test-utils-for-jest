import { mount } from '@vue/test-utils'
import HelloWorld from '../src/components/HelloWorld.vue'

// The component to test
const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}

test('displays message', () => {
  const wrapper = mount(MessageComponent, {
    props: {
      msg: 'Hello world'
    }
  })

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})
test('renders a message', () => {
  const wrapper = mount(HelloWorld, {
    props: {
      msg: 'Hello world'
    }
  })
  expect(wrapper.text()).toMatch('Hello world')
})