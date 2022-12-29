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
    const robotKey = robot[key];

    res[robotKey] = key;
  }

  return res;
}

module.exports = inverseRobot;
