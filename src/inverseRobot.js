'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};

  for (const prop in robot) {
    if (newRobot.hasOwnProperty(robot[prop])) {
      return null;
    } else {
      newRobot[robot[prop]] = prop;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
