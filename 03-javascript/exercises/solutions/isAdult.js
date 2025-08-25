function isAdult(age) {
  if (age < 0 || isNaN(age)) {
    return false
  }
  if (age >= 20) {
    return true
  } else {
    return false
  }
};

module.exports = isAdult;