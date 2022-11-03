'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invRob = {};

  for (const key in robot) {
    if (invRob.hasOwnProperty(robot[key])) {
      return null;
    }

    const newKey = robot[key];

    invRob[newKey] = key;
  }

  return invRob;
}

module.exports = inverseRobot;
