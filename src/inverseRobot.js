'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const changeProperties = {};

  for (const key in robot) {
    if (changeProperties.hasOwnProperty(robot[key])) {
      return null;
    }

    changeProperties[robot[key]] = key;
  }

  return changeProperties;
}

module.exports = inverseRobot;
