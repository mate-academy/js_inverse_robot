'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const [key, value] of Object.entries(robot)) {
    const hasValueDuplication = newRobot[value] !== undefined;

    if (hasValueDuplication) {
      return null;
    }

    newRobot[value] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
