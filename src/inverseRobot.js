'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invRobot = {};

  for (const i in robot) {
    invRobot[robot[i]] = i;
  }

  if (Object.keys(invRobot).length < Object.values(robot).length) {
    return null;
  } else {
    return invRobot;
  }
}

module.exports = inverseRobot;
