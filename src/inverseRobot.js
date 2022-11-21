'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  const robotKeys = Object.keys(robot);

  for (const key of robotKeys) {
    const value = robot[key];

    if (result[value] !== undefined) {
      return null;
    }

    result[value] = key;
  };

  return result;
}

module.exports = inverseRobot;
