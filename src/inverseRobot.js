'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.keys(robot);
  const values = Object.values(robot);

  const obj = {};

  for (let i = 0; i < keys.length; i++) {
    const robotKey = values[i];

    if (obj.hasOwnProperty(robotKey)) {
      return null;
    }

    obj[values[i]] = keys[i];
  }

  return obj;
}

module.exports = inverseRobot;
