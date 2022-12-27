'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (inversedRobot[value] === undefined) {
      inversedRobot[value] = key;
    } else {
      return null;
    }
  }

  return inversedRobot;
}

module.exports = inverseRobot;
