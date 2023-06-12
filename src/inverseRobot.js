'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};

  for (const key in robot) {
    if (Object.hasOwnProperty.call(fixedRobot, robot[key])) {
      return null;
    }

    fixedRobot[robot[key]] = key;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
