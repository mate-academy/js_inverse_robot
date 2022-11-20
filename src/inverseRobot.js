'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const key in robot) {
    const names = robot[key];
    const values = key;

    if (reverseRobot[names]) {
      return null;
    }

    reverseRobot[names] = values;
  }

  return reverseRobot;
}

inverseRobot();

module.exports = inverseRobot;
