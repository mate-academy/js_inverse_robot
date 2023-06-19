'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robotValues = Object.values(robot);

  for (let i = 0; i < robotValues.length; i++) {
    const curr = robotValues[i];
    const remaining = robotValues.slice(i + 1);

    if (remaining.includes(curr)) {
      return null;
    }
  }

  return Object.fromEntries(Object.entries(robot).map(a => a.reverse()));
}

module.exports = inverseRobot;
