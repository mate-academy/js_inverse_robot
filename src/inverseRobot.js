'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swapperobot = {};
  const values = {};

  for (const key in robot) {
    const value = robot[key];

    if (values[value] === undefined) {
      values[value] = key;
      swapperobot[value] = key;
    }

    if (values[value] !== key) {
      return null;
    }
  }

  return swapperobot;
}

module.exports = inverseRobot;
