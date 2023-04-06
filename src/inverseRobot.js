'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let robotClone = { ...robot };

  for (const key in robot) {
    const property = robot[key];

    if (robotClone[property]) {
      robotClone = null;
      break;
    }

    robotClone[property] = key;
    delete robotClone[key];
  }

  return robotClone;
}

module.exports = inverseRobot;
