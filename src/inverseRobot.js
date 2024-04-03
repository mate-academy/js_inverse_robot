'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  if (robot === null) {
    return null;
  }

  const newRobot = {};

  for (const key in robot) {
    const rightValue = key;
    const rightKey = robot[key];

    if (newRobot[rightKey] !== undefined) {
      return null;
    }

    newRobot[rightKey] = rightValue;
  }

  return newRobot;
}

module.exports = inverseRobot;
