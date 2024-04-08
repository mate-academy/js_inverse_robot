'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const invertedRobot = {};
  const keys = [];

  for (const key in robot) {
    const value = robot[key];

    // Check if the key is repeated
    if (keys.includes(value)) {
      return null;
    }
    keys.push(value);
    invertedRobot[value] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
