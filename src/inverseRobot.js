'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key of Object.keys(robot)) {
    if (newRobot[robot[key]]) {
      return null;
    } else {
      newRobot[robot[key]] = key;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
