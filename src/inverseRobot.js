'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotAfterRepair = {};
  const robotValues = Object.values(robot);
  const uniqueRobotValues = new Set(robotValues);

  if (uniqueRobotValues.size !== robotValues.length) {
    return null;
  }

  Object.entries(robot).forEach(([key, value]) => {
    robotAfterRepair[value] = key;
  });

  return robotAfterRepair;
}

module.exports = inverseRobot;
