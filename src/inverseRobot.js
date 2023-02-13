'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInversed = {};

  for (const part in robot) {
    if (robotInversed.hasOwnProperty(robot[part])) {
      return null;
    }

    robotInversed[robot[part]] = part;
  }

  return robotInversed;
}

module.exports = inverseRobot;
