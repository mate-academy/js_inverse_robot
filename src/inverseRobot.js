'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reparedRobot = {};

  for (const oldKey in robot) {
    const newKey = robot[oldKey];

    // check for valid key:
    if ((reparedRobot.hasOwnProperty(newKey))
        || (newKey === null)
        || (newKey === undefined)
        || (newKey === '')) {
      return null;
    }

    reparedRobot[newKey] = oldKey;
  }

  return reparedRobot;
}

module.exports = inverseRobot;
