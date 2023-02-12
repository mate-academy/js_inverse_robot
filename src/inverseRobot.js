'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const realKeys = Object.values(robot);
  const realValues = Object.keys(robot);
  const rightRobot = {};

  for (let i = 0; i <= realKeys.length; i++) {
    if (rightRobot[realKeys[i]]) {
      return null;
    }
    rightRobot[realKeys[i]] = realValues[i];
  }

  return rightRobot;
}

module.exports = inverseRobot;
