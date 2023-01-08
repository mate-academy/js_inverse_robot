'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverseArr = {};

  for (const key in robot) {
    inverseArr[robot[key]] = key;
  }

  function getObjectLength(obj) {
    return (Object.keys(obj)).length;
  }

  if (getObjectLength(robot) !== getObjectLength(inverseArr)) {
    return null;
  }

  return inverseArr;
}

module.exports = inverseRobot;
