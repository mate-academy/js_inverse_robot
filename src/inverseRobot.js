'use strict';

/*
 * @param {inverseRobotect} robot
 *
 * @return {inverseRobotect}
*/

function inverseRobot(robot) {
  const ret = {};

  for (const key in robot) {
    if (ret[robot[key]]) {
      return null;
    }
    ret[robot[key]] = key;
  }

  return ret;
}
module.exports = inverseRobot;
