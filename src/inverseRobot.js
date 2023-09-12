'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    if (Object.hasOwnProperty.call(robot, key)) {
      const value = robot[key];

      if (invertedRobot[value] !== undefined) {
        return null;
      }

      invertedRobot[value] = key;
    }
  }

  return invertedRobot;
}

module.exports = inverseRobot;
