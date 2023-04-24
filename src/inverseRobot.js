'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const newKeys = Object.keys(robot).reverse();
  const newValues = Object.values(robot).reverse();

  for (let i = 0; i < newKeys.length; i++) {
    if (newRobot[newValues[i]]) {
      return null;
    }
    newRobot[newValues[i]] = newKeys[i];
  }

  return newRobot;
}
module.exports = inverseRobot;
