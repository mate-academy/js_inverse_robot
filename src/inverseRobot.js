'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rightRobot = {};

  for (const key of Object.keys(robot)) {
    if (rightRobot[robot[key]]) {
      return null;
    } else {
      rightRobot[robot[key]] = key;
    }
  }

  return rightRobot;
}

module.exports = inverseRobot;
