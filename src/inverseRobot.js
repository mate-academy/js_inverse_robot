'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};
  const robotValues = Object.values(robot);

  for (const char of robotValues) {
    if (robotValues.indexOf(char) !== robotValues.lastIndexOf(char)) {
      return null;
    }
  }

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
