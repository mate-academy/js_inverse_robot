'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseRob = {};
  const values = Object.values(robot);

  if (values.length === 0) {
    return inverseRob;
  }

  for (const key in robot) {
    if (inverseRob[robot[key]]) {
      return null;
    } else {
      inverseRob[robot[key]] = key;
    }
  }

  return inverseRob;
}
module.exports = inverseRobot;
