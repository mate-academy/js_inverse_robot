'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultRobot = {};

  for (const key in robot) {
    for (const keyResultRobot in resultRobot) {
      if (robot[key] === keyResultRobot) {
        return null;
      }
    }

    resultRobot[robot[key]] = key;
  }

  return resultRobot;
}

module.exports = inverseRobot;
