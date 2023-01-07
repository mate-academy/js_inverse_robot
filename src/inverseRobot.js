'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};

  for (const prop of Object.entries(robot)) {
    if (newRobot.hasOwnProperty(prop[1])) {
      return null;
    }
    newRobot[prop[1]] = prop[0];
  }

  return newRobot;
}

module.exports = inverseRobot;
