'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const nevObj = {};
  const valuesRobot = Object.entries(robot);

  for (const [key, value] of valuesRobot) {
    if (nevObj && nevObj[value]) {
      return null;
    }
    nevObj[value] = key;
  }

  return nevObj;
}

module.exports = inverseRobot;
