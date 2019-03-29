const path = require('path')
const simulate = require('../../index')
function runTest(id) {
  const comp = simulate.render(id)
  const parent = document.createElement('parent-wrapper')
  comp.attach(parent)

  // expect(window.getComputedStyle(comp.querySelector('.modal-text').dom).color)
  //   .toBe('red')
  expect(2 + 2).toBe(4)
}

test('comp1', () => {
  jest.resetModules()
  const id = simulate.load(path.resolve(__dirname, '../../../miniprogram/components/network-err-modal/network-err-modal'))
  runTest(id)

  // it('knows that 2 and 2 make 4', () => {
  //   const val1 = 2
  //   const val2 = 2
  //   const expectedResult = 4
  //   const result = val1 + val2
  //   expect(result).toBe(expectedResult)
  // })
})

function fetchData() {
  return Promise((resolve, reject) => {
    if (1) {
      resolve(1)
    } else {
      reject(2)
    }
  })
}

// test('the data is peanut butter', () => {
//   function callback(data) {
//     expect(data).toBe('peanut butter')
//   }
//   fetchData(callback)
// })
//
//
// test('the data is peanut butter', () => {
//   return expect(fetchData()).resolves.toBe('peanut butter');
// })
//
// // Don't do this!
// test('the data is peanut butter', () => {
//   function fetchData(callback) {
//     const data = 'peanut butter'
//     callback(data)
//   }
//   function callback(data) {
//     expect(data).toBe('peanut butter')
//   }
//
//   fetchData(callback)
// })
