'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotNormal = {};

  for (const key of Object.keys(robot)) {
    if (Object.hasOwn(robotNormal, robot[key])) {
      return null;
    } else {
      robotNormal[robot[key]] = key;
    }
  }

  return robotNormal;
}

module.exports = inverseRobot;
