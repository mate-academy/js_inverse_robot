'use strict';

/**
 * @param {object} robot
 *
 * @return {object | null}
 */
function inverseRobot(robot) {
  const invertedRobot = {};
  const invertedValues = [];

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      const value = robot[key];

      if (invertedValues.indexOf(value) !== -1) {
        return null;
      }

      invertedRobot[value] = key;
      invertedValues.push(value);
    }
  }

  return invertedRobot;
}

module.exports = inverseRobot;
