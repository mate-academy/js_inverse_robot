'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const key in robot) {
    if (robot[key] in reverseRobot) {
      return null;
    }

    reverseRobot[robot[key]] = key;
  }

  return reverseRobot;
}

module.exports = inverseRobot;
