'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const trueRobot = {};

  for (const key in robot) {
    if (!trueRobot.hasOwnProperty(robot[key])) {
      trueRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return trueRobot;
}

module.exports = inverseRobot;
