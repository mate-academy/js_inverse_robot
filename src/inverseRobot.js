'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // check for same values:
  const robotsValues = Object.values(robot);

  for (let i = 0; i < robotsValues.length - 1; i++) {
    const robotValue = robotsValues[i];

    const copyIndex = robotsValues.indexOf(robotValue, i + 1);

    if (copyIndex > -1) {
      return null;
    }
  }

  // revert keys:
  const reparedRobot = {};
  const oldKeys = Object.keys(robot);

  for (const oldKey of oldKeys) {
    const newKey = robot[oldKey];

    // check for empty key:
    if ((newKey === null)
        || (newKey === undefined)
        || (newKey === '')) {
      return null;
    }

    reparedRobot[newKey] = oldKey;
  }

  return reparedRobot;
}

module.exports = inverseRobot;
