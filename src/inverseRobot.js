'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixRobot = {};
  let sizeRobot = 0;

  for (const key in robot) {
    fixRobot[robot[key]] = key;
    sizeRobot++;
  }

  let sizeFixRobot = 0;

  for (const key in fixRobot) {
    if (fixRobot.hasOwnProperty(key)) {
      sizeFixRobot++;
    }
  }

  return (sizeRobot !== sizeFixRobot) ? null : fixRobot;
}

module.exports = inverseRobot;
