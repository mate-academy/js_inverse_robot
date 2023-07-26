'use strict';

/**
 * @param {object} robot
 *
 * @return {object | null}
 */

function inverseRobot(robot) {
  const invertedRobotMap = new Map();
  const valuesArray = [];

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (valuesArray.includes(value)) {
        return null;
      }

      invertedRobotMap.set(value, key);
      valuesArray.push(value);
    }
  }

  const invertedRobot = Object.fromEntries(invertedRobotMap);

  return invertedRobot;
}

module.exports = inverseRobot;
