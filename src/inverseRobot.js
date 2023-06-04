'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const serviceableRobot = {};

  const allKeys = Object.values(robot);

  for (let i = 0; i < allKeys.length; i++) {
    for (let j = i + 1; j < allKeys.length; j++) {
      if (allKeys[i] === allKeys[j]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    const newKey = robot[key];

    serviceableRobot[newKey] = key;
  }

  return serviceableRobot;
}

module.exports = inverseRobot;
