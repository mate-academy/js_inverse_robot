'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = { };
  const keys = Object.keys(robot);

  for (let i = 0; i < keys.length; i++) {
    for (let k = i + 1; k < keys.length; k++) {
      if (robot[keys[i]] === robot[keys[k]]) {
        return null;
      }
    }
    newRobot[robot[keys[i]]] = keys[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
