'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const remakeData = {};

  for (const key in robot) {
    remakeData[robot[key]] = key;
  }

  if (Object.keys(remakeData).length < Object.values(robot).length) {
    return null;
  } else {
    return remakeData;
  }
}

module.exports = inverseRobot;
