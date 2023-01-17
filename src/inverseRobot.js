'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const allValues = [];

  for (const key in robot) {
    const value = robot[key];

    if (allValues.includes(value)) {
      return null;
    } else {
      newRobot[value] = key;
      allValues.push(value);
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
