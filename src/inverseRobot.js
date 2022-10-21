'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keyList = Object.values(robot);

  if (new Set(keyList).size !== keyList.length) {
    return null;
  }

  const swapRobot = {};

  Object.keys(robot).forEach(key => {
    swapRobot[robot[key]] = key;
  });

  return swapRobot;
}

module.exports = inverseRobot;
