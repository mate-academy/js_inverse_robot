'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const changedRobot = {};

  for (const key in robot) {
    changedRobot[robot[key]] = key;
  }

  if (Object.keys(changedRobot).length
    !== Object.values(robot).length) {
    return null;
  }

  return changedRobot;
}

module.exports = inverseRobot;
