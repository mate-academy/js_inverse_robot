'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const revers = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (revers.hasOwnProperty(robotKey)) {
      return null;
    }
    revers[robotKey] = key;
  };

  return revers;
}

module.exports = inverseRobot;
