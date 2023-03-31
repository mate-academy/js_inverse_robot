'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};
  const duplicates = [];

  for (const key in robot) {
    duplicates.push(robot[key]);

    for (let i = 0; i < duplicates.length - 1; i++) {
      if (duplicates[i] === robot[key]) {
        return null;
      }
    }
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
