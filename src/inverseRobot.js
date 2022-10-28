'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newobj = {};

  for (const key in robot) {
    if (newobj.hasOwnProperty(robot[key])) {
      return null;
    }
    newobj[robot[key]] = key;
  }

  return newobj;
}
module.exports = inverseRobot;
