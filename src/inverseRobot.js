'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  // const allValues = [];

  for (const key in robot) {
    const value = robot[key];

    if (!newRobot[value]) {
      newRobot[value] = key;
    } else {
      return null;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
