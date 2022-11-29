'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const Obj = {};

  for (const key in robot) {
    if (Obj[robot[key]] === undefined) {
      Obj[robot[key]] = key;
    } else {
      return null;
    }
  }

  return Obj;
}

module.exports = inverseRobot;
