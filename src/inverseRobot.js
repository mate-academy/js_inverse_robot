'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rearranged = {};
  const isUnique = Object.values(robot);

  if ((new Set(isUnique)).size !== isUnique.length) {
    return null;
  }

  for (const key in robot) {
    rearranged[robot[key]] = key;
  }

  return rearranged;
}
module.exports = inverseRobot;
