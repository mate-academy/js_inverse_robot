'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arr = Object.values(robot);
  const [...uniqValues] = new Set(arr);

  if (uniqValues.length !== arr.length) {
    return null;
  }

  const reverseObj = {};

  for (const key in robot) {
    reverseObj[robot[key]] = key;
  }

  return reverseObj;
}

module.exports = inverseRobot;
