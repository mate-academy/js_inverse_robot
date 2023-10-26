'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

/**
 * @param {Object} robot
 *
 * @returns {Object|null}
 */
function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (invertedRobot[value] !== undefined

       || Object.values(invertedRobot).includes(value)) {
      return null;
    }

    invertedRobot[value] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
