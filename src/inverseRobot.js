/* eslint-disable no-console */
'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const newRobot = {};

  for (const [key, value] of Object.entries(robot).reverse()) {
    if (newRobot[value]) {
      return null;
    }
    newRobot[value] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
