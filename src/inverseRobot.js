'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};
  const usedValues = [];

  for (const key in robot) {
    if (usedValues.includes(robot[key])) {
      return null;
    }
    inversedRobot[robot[key]] = key;
    usedValues.push(robot[key]);
  }

  return inversedRobot;
}

module.exports = inverseRobot;
