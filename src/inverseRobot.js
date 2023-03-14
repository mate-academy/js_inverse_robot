'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const clearSetting = {};

  for (const key in robot) {
    const rightKey = robot[key];
    const rightValue = key;

    if (clearSetting.hasOwnProperty(rightKey)) {
      return null;
    }

    clearSetting[rightKey] = `${rightValue}`;
  }

  return clearSetting;
}

module.exports = inverseRobot;
