'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const arr = {};
  const ke = Object.keys(robot);
  const valu = Object.values(robot);
  const id = valu[0];

  for (let i = 0; i < valu.length; i++) {
    if (id === valu[i + 1]) {
      return null;
    }
    arr[valu[i]] = ke[i];
  }

  return arr;
}

module.exports = inverseRobot;
