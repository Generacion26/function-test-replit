function average(a, b, c) {
  return (a + b + c) / 3
}

// average(5,10,15) -> test 1--> 10 ✅
// average(5,6,7) -> test 2--> 6 ✅
// average(100,200,300) -> test 3--> 200 ✅

module.exports = {
  average
}