'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rezult = {};

  for (const key in robot) {
    if (robot[key] in rezult) {
      return null;
    }
    rezult[robot[key]] = key;
  }

  return rezult;
}

module.exports = inverseRobot;
