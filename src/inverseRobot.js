'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRob = {};

  for (const key in robot) {
    const name = robot[key];
    const value = key;

    if (newRob[name]) {
      return null;
    }

    newRob[name] = value;
  }

  return newRob;
}

module.exports = inverseRobot;
