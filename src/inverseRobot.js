'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reparedRobot = {};
  const oldKeys = Object.keys(robot);

  for (const oldKey of oldKeys) {
    const newKey = robot[oldKey];

    // check for valid key:
    if ((reparedRobot.hasOwnProperty(newKey)
        || (newKey === null)
        || (newKey === undefined)
        || (newKey === ''))) {
      return null;
    }

    reparedRobot[newKey] = oldKey;
  }

  return reparedRobot;
}

module.exports = inverseRobot;
