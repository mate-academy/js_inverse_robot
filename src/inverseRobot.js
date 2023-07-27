'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertRobot = {};
  let prewPseudoVallue = '';

  for (const pseudoVallue of Object.values(robot).sort()) {
    if (prewPseudoVallue === pseudoVallue) {
      return null;
    }

    prewPseudoVallue = pseudoVallue;
  }

  for (const key in robot) {
    invertRobot[robot[key]] = key;
  }

  return invertRobot;
}

module.exports = inverseRobot;
