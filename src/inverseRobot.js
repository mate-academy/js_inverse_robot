'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const [value, key] of Object.entries(robot)) {
    if (key in newRobot) {
      return null;
    } else {
      newRobot[key] = value;
    }
  }

  return newRobot;
};

module.exports = inverseRobot;
