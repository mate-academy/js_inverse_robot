'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keysCount = Object.keys(robot).length;

  for (const [key, value] of Object.entries(robot)) {
    robot[value] = key;
    delete robot[key];
  }

  const keysCountInverse = Object.keys(robot).length;

  if (keysCount !== keysCountInverse) {
    return null;
  }

  return robot;
}

module.exports = inverseRobot;
