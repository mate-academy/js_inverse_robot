'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);

  for (let i = 0; i < robotValues.length; i++) {
    if (i !== robotValues.lastIndexOf(robotValues[i])) {
      return null;
    }
  }

  const fixedRobot = {};

  for (const key in robot) {
    fixedRobot[robot[key]] = key;
  }

  return fixedRobot;
}

module.exports = inverseRobot;
