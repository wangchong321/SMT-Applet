const path = require('path')
const simulate = require('../../index')
function runTest(id) {
  const comp = simulate.render(id)
  const parent = document.createElement('parent-wrapper')
  comp.attach(parent)

  expect(window.getComputedStyle(comp.querySelector('.modal-text').dom).color)
    .toBe('red')
  // expect(simulate.match(comp.dom, '<wx-view class="main--modal-text">index.test.properties</wx-view>'))
  //   .toBe(true)

  // expect(comp.dom.tagName)
  //   .toBe('MAIN')
}

test('comp1', () => {
  jest.resetModules()
  // const id = simulate.load(path.resolve(__dirname, '../../../miniprogram/components/network-err-modal/network-err-modal'))
  const id = simulate.load(path.resolve(__dirname, './index'))
  runTest(id)
})
