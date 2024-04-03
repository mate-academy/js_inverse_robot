'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversed = {};
  const values = Object.values(robot);
  const uniqueValues = new Set(values).size;

  if (uniqueValues !== values.length) {
    return null;
  }

  for (const key in robot) {
    inversed[robot[key]] = key;
  }

  return inversed;
}

module.exports = inverseRobot;
