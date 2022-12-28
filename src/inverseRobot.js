'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const uniqueValues = [];

  for (const key in robot) {
    if (uniqueValues.includes(robot[key])) {
      return null;
    }
    uniqueValues.push(robot[key]);
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
