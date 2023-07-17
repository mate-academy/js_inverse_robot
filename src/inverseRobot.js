'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const valueTracker = [];

  for (const key in robot) {
    const value = robot[key];

    if (valueTracker.includes(value)) {
      return null;
    }

    newRobot[value] = key;
    valueTracker.push(value);
  }

  return newRobot;
}

module.exports = inverseRobot;
