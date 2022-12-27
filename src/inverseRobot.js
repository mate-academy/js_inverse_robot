'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rezultObj = {};

  for (const key in robot) {
    if (rezultObj[robot[key]]) {
      return null;
    }
    rezultObj[robot[key]] = key;
  }

  return rezultObj;
}

module.exports = inverseRobot;
