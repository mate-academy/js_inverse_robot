'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);

  if (new Set(robotValues).size !== robotValues.length) {
    return null;
  }

  const inversedRobot = {};

  for (const key in robot) {
    inversedRobot[robot[key]] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
