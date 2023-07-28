'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertRobot = {};
  let prevValue = '';

  for (const value of Object.values(robot).sort()) {
    if (prevValue === value) {
      return null;
    }

    prevValue = value;
  }

  for (const key in robot) {
    invertRobot[robot[key]] = key;
  }

  return invertRobot;
}

module.exports = inverseRobot;
