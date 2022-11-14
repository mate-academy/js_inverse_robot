'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotReverse = {};
  const rKeys = Object.keys(robot);
  const rValues = Object.values(robot);

  for (let i = 0; i < rKeys.length; i++) {
    if (robotReverse[rValues[i]] || robotReverse[rValues[rKeys[i]]]) {
      return null;
    } else {
      robotReverse[rValues[i]] = rKeys[i];
    }
  }

  return robotReverse;
}

module.exports = inverseRobot;
