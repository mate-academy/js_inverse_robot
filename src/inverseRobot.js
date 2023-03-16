'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robotInverse = {};
  const checker = [];
  let i = 0;

  for (const [key, value] of Object.entries(robot)) {
    if (checker.includes(value)) {
      return null;
    }

    robotInverse[value] = key;
    checker[i] = value;

    i++;
  }

  return robotInverse;
}

module.exports = inverseRobot;
