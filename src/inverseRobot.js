'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultInverse = {};

  for (const key in robot) {
    const property = robot[key];

    if (resultInverse.hasOwnProperty(property)) {
      return null;
    }

    resultInverse[property] = key;
  }

  return resultInverse;
}

module.exports = inverseRobot;
