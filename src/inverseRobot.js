'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const result = {};
  const arrayItems = [];

  for (const [key, value] of Object.entries(robot)) {
    if (arrayItems.includes(value)) {
      return null;
    }

    if (result[value]) {
      return null;
    }

    arrayItems.push(value);
    result[value] = key;
  }

  return result;
}

module.exports = inverseRobot;
