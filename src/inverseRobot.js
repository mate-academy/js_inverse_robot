'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const reversedRobot = {};
  const robotValues = [];

  for (const part in robot) {
    if (robotValues.includes(robot[part])) {
      return null;
    }
    reversedRobot[robot[part]] = part;
    robotValues.push(robot[part]);
  }

  return reversedRobot;
}

module.exports = inverseRobot;
