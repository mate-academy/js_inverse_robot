'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const robotNew = {};
  const values = Object.values(robot);

  for (const key in robot) {
    const value = robot[key];

    if (values.indexOf(value) !== values.lastIndexOf(value)) {
      return null;
    }
    robotNew[value] = key;
  }

  return robotNew;
}

module.exports = inverseRobot;
