'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixedRobot = {};
  const robotKey = Object.values(robot);
  const robotValue = Object.keys(robot);

  if (new Set(robotKey).size !== robotKey.length) {
    return null;
  }

  for (let i = 0; i < robotKey.length; i++) {
    fixedRobot[robotKey[i]] = robotValue[i];
  }

  return fixedRobot;
}

module.exports = inverseRobot;
