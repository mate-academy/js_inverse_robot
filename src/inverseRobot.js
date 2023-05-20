'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const result = {};

  const keysRobot = Object.values(robot);
  const valuesRobot = Object.keys(robot);

  for (let i = 0; i < keysRobot.length; i++) {
    if (keysRobot[i] in result) {
      return null;
    }

    result[keysRobot[i]] = valuesRobot[i];
  }

  return result;
}

module.exports = inverseRobot;
