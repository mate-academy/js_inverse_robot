'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robotToFix = robot;
  const fixedRobot = {};

  for (const part in robotToFix) {
    if (fixedRobot.hasOwnProperty(robotToFix[part])) {
      return null;
    }
    fixedRobot[robotToFix[part]] = part;
  }

  return (fixedRobot);
}

module.exports = inverseRobot;
