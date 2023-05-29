'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const exchangedKeyValueObj = {};

  for (const key in robot) {
    if (exchangedKeyValueObj.hasOwnProperty(robot[key])) {
      return null;
    }

    exchangedKeyValueObj[robot[key]] = key;
  }

  return exchangedKeyValueObj;
}

module.exports = inverseRobot;
