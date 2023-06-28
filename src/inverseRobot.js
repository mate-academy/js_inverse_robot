'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const changeProperties = {};

  for (const key in robot) {
    if (changeProperties.hasOwnProperty(key)
    || changeProperties.hasOwnProperty(robot[key])) {
      return null;
    }

    if (!changeProperties.hasOwnProperty(key)
    || changeProperties.hasOwnProperty(robot[key])) {
      changeProperties[robot[key]] = key;
    }
  }

  const correctOrder = Object.assign({}, changeProperties);

  return correctOrder;
}

module.exports = inverseRobot;
