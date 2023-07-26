'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObj = {};
  const valueKeys = [];

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (valueKeys.includes(value)) {
        return null;
      }

      inverseObj[value] = key;
      valueKeys.push(value);
    }
  }

  return inverseObj;
}

module.exports = inverseRobot;
