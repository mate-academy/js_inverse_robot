'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const pairs = Object.entries(robot);

  for (const pair of pairs) {
    const key = pair[0];
    const val = pair[1];

    newRobot[val] = key;
  }

  const keysRobotLength = Object.keys(robot).length;
  const keysNewRobotLength = Object.keys(newRobot).length;

  if (keysRobotLength !== keysNewRobotLength) {
    return null;
  }

  return newRobot;
}

module.exports = inverseRobot;
