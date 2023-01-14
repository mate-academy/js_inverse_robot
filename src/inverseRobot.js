'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    if (newRobot[robot[key]]) {
      return null;
    } // I don't understand how this part works, I found solution
    // in internet, but still can't explain how
    // *if* works without condition

    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
