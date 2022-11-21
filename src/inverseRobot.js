'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  const valuesRobot = (Object.values(robot));
  const keysNewRobot = (Object.keys(newRobot));

  if (valuesRobot.length === keysNewRobot.length) {
    return newRobot;
  }

  return null;
}

module.exports = inverseRobot;
