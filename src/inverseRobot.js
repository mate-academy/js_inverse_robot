'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rightRobot = {};

  for (const key in robot) {
    if (!rightRobot[robot[key]]) {
      rightRobot[robot[key]] = key;
    } else if (rightRobot) {
      return null;
    }
  }

  return rightRobot;
}

module.exports = inverseRobot;

// console.log(inverseRobot(rightRobot));
