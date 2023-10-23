'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotEntries = Object
    .entries(robot)
    .map(([key, value]) => [value, key]);
  const result = Object.fromEntries(robotEntries);

  if (Object.keys(result).length < Object.values(robot).length) {
    return null;
  }

  return result;
}

module.exports = inverseRobot;
