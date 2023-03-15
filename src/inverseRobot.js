'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

const inverseRobot = robot => {
  const result = {};

  for (const key in robot) {
    if (result.hasOwnProperty(robot[key])) {
      return null;
    }

    result[robot[key]] = key;
  }

  return result;
};

module.exports = inverseRobot;
