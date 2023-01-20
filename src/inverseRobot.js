'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversKey = {};

  for (const key in robot) {
    const inverseKey = robot[key];
    const inverseValue = key;

    if (reversKey.hasOwnProperty(inverseKey)) {
      return null;
    }

    reversKey[inverseKey] = inverseValue;
  }

  return reversKey;
}

module.exports = inverseRobot;
