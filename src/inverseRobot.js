'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const nevRobot = {};
  const values = [];

  for (const key in robot) {
    if (values.includes(robot[key])) {
      return null;
    }
    values.push(robot[key]);
    nevRobot[robot[key]] = key;
  }

  return nevRobot;
}

module.exports = inverseRobot;
