'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robotValues = Object.values(robot);
  const result = {};

  if (robotValues.some(x =>
    robotValues.indexOf(x) !== robotValues.lastIndexOf(x))) {
    return null;
  } else {
    Object.entries(robot).forEach(([key, value]) => {
      result[value] = key;
    });
  }

  return result;
}

module.exports = inverseRobot;
