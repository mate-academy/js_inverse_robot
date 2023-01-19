'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  let newKey = '';

  for (const key in robot) {
    newKey = robot[key];

    if (newRobot.hasOwnProperty(newKey)) {
      return null;
    }

    newRobot[newKey] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
