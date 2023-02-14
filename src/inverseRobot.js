'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const changedRobot = {};

  for (const key in robot) {
    const newValue = robot[key];

    if (!changedRobot.hasOwnProperty(newValue)) {
      changedRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return changedRobot;
}

module.exports = inverseRobot;
