'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  let newRobot = {};

  for (const detail in robot) {
    if (newRobot.hasOwnProperty(robot[detail])) {
      newRobot = null;
      break;
    } else {
      newRobot[robot[detail]] = detail;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
