'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const values = [];

  for (const key in robot) {
    if (values.includes(robot[key])) {
      return null;
    } else {
      newRobot[robot[key]] = key;
      values.push(robot[key]);
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
