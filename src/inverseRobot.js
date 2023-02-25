'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newrobot = {};

  for (const key in robot) {
    if (newrobot.hasOwnProperty(robot[key])) {
      return null;
    }
    newrobot[robot[key]] = key;
  }

  return newrobot;
}

module.exports = inverseRobot;
