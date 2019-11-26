
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if(fromN !== toN){
    return sum(fromN + 1, toN) + fromN;
  }
  return 0;
}

module.exports = sum;
