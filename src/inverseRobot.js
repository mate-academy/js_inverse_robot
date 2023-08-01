'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const valueOfRobot = Object.values(robot);
  const repairedRobot = {};

  for (let i = 0; i <= valueOfRobot.length; i++) {
    if (valueOfRobot.indexOf(valueOfRobot[i], i + 1) !== -1) {
      return null;
    }
  }

  for (const key in robot) {
    repairedRobot[robot[key]] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
