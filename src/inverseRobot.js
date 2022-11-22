'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};
  const robotKeys = Object.keys(robot);

  for (let i = 0; i < robotKeys.length; i++) {
    if (robot[robotKeys[i]] in result) {
      return null;
    }
    result[robot[robotKeys[i]]] = robotKeys[i];
  }

  return result;
}

module.exports = inverseRobot;
