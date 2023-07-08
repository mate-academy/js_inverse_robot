'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const objValues = Object.values(robot);
  const reverseRobot = {};

  if (objValues.length !== (new Set(objValues)).size) {
    return null;
  };

  for (const key in robot) {
    reverseRobot[robot[key]] = '' + key;
  }

  return reverseRobot;
}

module.exports = inverseRobot;
