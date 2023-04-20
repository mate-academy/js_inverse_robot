'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const keys = Object.keys(robot);

  for (const key of keys) {
    const value = robot[key];

    if (value in newRobot) {
      return null;
    }
    newRobot[value] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
