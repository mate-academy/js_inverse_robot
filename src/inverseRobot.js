'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invRobot = {};

  for (const key of Object.keys(robot)) {
    invRobot[robot[key]] = key;
  }

  if (Object.keys(robot).length !== Object.keys(invRobot).length) {
    return null;
  }

  return invRobot;
}

module.exports = inverseRobot;
