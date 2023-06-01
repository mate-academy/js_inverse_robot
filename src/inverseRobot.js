'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(oldRobot) {
  const newRobot = {};
  let newRobotValue = '';
  let newRobotKey = '';
  const oldRobotValues = [];

  for (const oldKey in oldRobot) {
    for (const oldValue of oldRobotValues) {
      if (oldValue === oldRobot[oldKey]) {
        return null;
      }
    }
    newRobotValue = oldKey;
    newRobotKey = oldRobot[oldKey];
    newRobot[newRobotKey] = newRobotValue;
    oldRobotValues.push(oldRobot[oldKey]);
  }

  return newRobot;
}

module.exports = inverseRobot;
