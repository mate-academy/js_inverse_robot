'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inversedRobot = {};
  const valueList = [];

  for (const key in robot) {
    const value = robot[key];

    if (valueList.includes(value)) {
      return null;
    }

    valueList.push(value);

    inversedRobot[value] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
