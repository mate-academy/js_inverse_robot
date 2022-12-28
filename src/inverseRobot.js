'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const remakeData = {};

  for (const key in robot) {
    if (robot[key] in remakeData) {
      return null;
    }
  
    remakeData[robot[key]] = key;
  }
  
    return remakeData;
  }

  module.exports = inverseRobot;
