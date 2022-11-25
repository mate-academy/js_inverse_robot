'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const copyRobot = {};

  for (const property in robot) {
    const trueValue = property;
    const trueKey = robot[property];

    if (copyRobot.hasOwnProperty(trueKey)) {
      return null;
    } else {
      copyRobot[trueKey] = trueValue;
    }
  }

  return copyRobot;
}

module.exports = inverseRobot;
