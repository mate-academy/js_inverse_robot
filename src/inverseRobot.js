'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const checkArr = Object.values(robot);
  const res = {};

  if (checkArr.length !== new Set(checkArr).size) {
    return null;
  }

  for (const key in robot) {
    res[robot[key]] = key;
  }

  return res;
}

module.exports = inverseRobot;
