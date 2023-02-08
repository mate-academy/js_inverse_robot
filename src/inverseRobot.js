'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const entries = Object.entries(robot);

  for (const entry of entries) {
    if (newRobot[entry[1]]) {
      return null;
    } else {
      newRobot[entry[1]] = entry[0];
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
