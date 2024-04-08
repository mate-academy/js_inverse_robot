'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (invertedRobot[value] !== undefined) {
      return null;
    }

    invertedRobot[value] = String(key);
  }

  return invertedRobot;
}

module.exports = inverseRobot;
