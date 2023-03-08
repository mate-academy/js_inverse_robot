'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotRepair = {};

  // перебирає усі перелічувані властивості об'єкта
  for (const key in robot) {
    if (robot[key] in robotRepair) {
      return null;
    }
    robotRepair[robot[key]] = key;
  }

  return robotRepair;
}

module.exports = inverseRobot;
