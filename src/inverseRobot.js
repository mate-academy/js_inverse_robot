'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const revers = {};

  for (const key in robot) {
    if (robot[key] in revers) {
      return null;
    }

    revers[robot[key]] = key;
  };

  return revers;
}
module.exports = inverseRobot;
