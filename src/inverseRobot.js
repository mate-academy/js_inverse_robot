'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const disassembledRobot = Object.entries(robot);
  const inversedRobot = {};

  for (const [key, value] of disassembledRobot) {
    inversedRobot[value] = key;
  }

  const forCheckNull = Object.entries(inversedRobot);

  if (forCheckNull.length !== disassembledRobot.length) {
    return null;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
