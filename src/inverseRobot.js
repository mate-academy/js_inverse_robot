'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invRobot = {};

  for (const key in robot) {
    invRobot[robot[key]] = key;
  }

  if (Object.keys(invRobot).length < Object.values(robot).length) {
    return null;
  }

  return invRobot;
}

module.exports = inverseRobot;
