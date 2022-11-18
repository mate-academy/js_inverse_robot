'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rearranged = {};
  const robotValues = Object.values(robot);

  const isValueUnique = new Set(robotValues).size === robotValues.length;

  if (!isValueUnique) {
    return null;
  }

  for (const key in robot) {
    rearranged[robot[key]] = key;
  }

  return rearranged;
}

module.exports = inverseRobot;
