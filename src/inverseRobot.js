'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const clearSetting = {};

  for (const key in robot) {
    if (clearSetting[robot[key]] !== undefined) {
      return null;
    }

    clearSetting[robot[key]] = `${key}`;
  }

  return clearSetting;
}

module.exports = inverseRobot;
