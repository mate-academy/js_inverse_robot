'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseR = {};
  const keys = Object.values(robot);
  const values = Object.keys(robot);

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in inverseR) {
      return null;
    }

    inverseR[keys[i]] = values[i];
  }

  return inverseR;
}

module.exports = inverseRobot;
