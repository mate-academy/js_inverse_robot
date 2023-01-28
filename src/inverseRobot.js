'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    if (Object.keys(newRobot).includes(robot[key])) {
      return null;
    }

    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
