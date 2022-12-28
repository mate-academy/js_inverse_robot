'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultRobot = {};
  let resultValue;

  for (const key in robot) {
    resultValue = robot[key];

    if (resultRobot.hasOwnProperty(resultValue)) {
      return null;
    }

    resultRobot[resultValue] = key;
  }

  return resultRobot;
}

module.exports = inverseRobot;
