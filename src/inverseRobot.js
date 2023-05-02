'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  if (typeof robot !== 'object' || robot === null || Array.isArray(robot)) {
    throw new Error('Input must be an object');
  }

  const invertedRobot = {};

  for (const key in robot) {
    if (invertedRobot[robot[key]]) {
      return null;
    }

    invertedRobot[robot[key]] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
