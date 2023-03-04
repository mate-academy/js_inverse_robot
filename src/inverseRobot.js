'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const changedObject = {};

  for (const [key, value] of Object.entries(robot)) {
    if (Object.hasOwn(changedObject, value)) {
      return null;
    }
    changedObject[value] = key;
  }

  return changedObject;
}

module.exports = inverseRobot;
