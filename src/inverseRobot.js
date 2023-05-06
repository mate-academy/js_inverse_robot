'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const copyRobot = {};

  for (const key in robot) {
    const vals = robot[key];

    if (copyRobot[vals] !== undefined) {
      return null;
    }
    copyRobot[vals] = key;
  }

  return copyRobot;
}

module.exports = inverseRobot;
