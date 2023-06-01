'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(oldRobot) {
  const newRobot = {};
  const oldRobotValues = [];

  for (const oldKey in oldRobot) {
    if (newRobot[oldRobot[oldKey]]) {
      return null;
    }
    newRobot[oldRobot[oldKey]] = oldKey;
    oldRobotValues.push(oldRobot[oldKey]);
  }

  return newRobot;
}

module.exports = inverseRobot;
