'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const exchangedKeyValueObj = {};

  for (const [key, value] of Object.entries(robot)) {
    if (exchangedKeyValueObj.hasOwnProperty(value)) {
      return null;
    }

    exchangedKeyValueObj[value] = key;
  }

  return exchangedKeyValueObj;
}

module.exports = inverseRobot;
