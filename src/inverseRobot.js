'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);

  for (const value of robotValues) {
    if (robotValues.indexOf(value) !== robotValues.lastIndexOf(value)) {
      return null;
    }
  }

  const robotArray = Object.entries(robot).reverse();
  const result = {};

  for (const i of robotArray) {
    result[i[1]] = i[0];
  }

  return result;
}

module.exports = inverseRobot;
