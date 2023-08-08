const { average } = require("../functions/average")

//test 1 
test('average (5,10,15) should return 10 ', () => {
  expect(average(5, 10, 15)).toBe(10)
})

//test 2 
test('average (5,6,7) should return 6 ', () => {
  expect(average(5, 6, 7)).toBe(6)
})

//test 3 
test('average (100,200,300) should return 200 ', () => {
  expect(average(100, 200, 300)).toBe(200)
})