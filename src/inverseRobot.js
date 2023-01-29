'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObject = {};

  for (const key in robot) {
    const inverseKey = robot[key];
    const inverseValue = key;

    if (inverseObject.hasOwnProperty(inverseKey)) {
      return null;
    }

    inverseObject[inverseKey] = inverseValue;
  }

  return inverseObject;
}

module.exports = inverseRobot;
