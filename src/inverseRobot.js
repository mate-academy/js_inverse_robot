'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctRobot = {};

  const INITIAL_KEYS = Object.keys(robot);
  const INITIAL_VALUES = Object.values(robot);
  const INITIAL_CONTENT = INITIAL_KEYS.concat(INITIAL_VALUES);

  if (new Set(INITIAL_CONTENT).size !== INITIAL_CONTENT.length) {
    return null;
  }

  for (const key in robot) {
    const reversedKey = robot[key];

    correctRobot[reversedKey] = key;
  }

  return correctRobot;
}

module.exports = inverseRobot;
