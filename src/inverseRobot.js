'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const key in robot) {
    const robotName = robot[key];

    if (fixedRobot[robotName]) {
      return null;
    }

    fixedRobot[robotName] = key;
  }

  return fixedRobot;
}
module.exports = inverseRobot;
