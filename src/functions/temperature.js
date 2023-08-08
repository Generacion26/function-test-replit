function temperature(celcius) {
  // (0 °C × 9/5) + 32 = 32 °F
  return (celcius * 9 / 5) + 32
}

module.exports = {
  temperature
}