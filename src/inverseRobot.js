'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const propRobot = {};

  for (const key in robot) {
    if (propRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    propRobot[robot[key]] = key;
  }

  return propRobot;
}

module.exports = inverseRobot;
