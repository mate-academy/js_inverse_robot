'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  if (Object.keys(newRobot).length < Object.keys(robot).length) {
    return null;
  }

  return newRobot;
}

module.exports = inverseRobot;
