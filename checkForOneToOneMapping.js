function checkForOneToOneMapping(left, right) {
  // base case - check for length match
  if (left.length !== right.length) return false;

  // check for 1-1 mapping
  let mapper = new Map();

  for (let i = 0; i < left.length; i++) {
    if(mapper.has(left[i]) && mapper.get(left[i])!= right[i]) {
      return false;
    }

    mapper.set(left[i], right[i]);
  }

  return true;
};

module.exports = checkForOneToOneMapping;