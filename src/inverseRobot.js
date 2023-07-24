'use strict';

/**
 * @param {object} robot
 *
 * @return {object | null}
 */

function inverseRobot(robot) {
  const invertedRobotMap = new Map();
  const valuesSet = new Set();

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (valuesSet.has(value)) {
        return null;
      }

      invertedRobotMap.set(value, key);
      valuesSet.add(value);
    }
  }

  const invertedRobot = Object.fromEntries(invertedRobotMap.entries());

  return invertedRobot;
}

module.exports = inverseRobot;
