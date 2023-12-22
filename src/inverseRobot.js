'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 *
*/

function inverseRobot(robot) {
  let result = {};

  for (const r in robot) {
    result[robot[r]] = r;
  }

  const resultKeys = Object.keys(result);
  const robotKeys = Object.values(robot);

  if (resultKeys.length !== robotKeys.length) {
    result = null;
  }

  return result;
}

module.exports = inverseRobot;
