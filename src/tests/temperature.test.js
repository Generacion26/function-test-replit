const { temperature } = require("../functions/temperature")

test('temperature (20 celcius) should return (68 F)', () => {
  expect(temperature(20)).toBe(68)
})