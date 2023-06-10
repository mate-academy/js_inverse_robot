'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultObject = {};

  for (const [key, value] of Object.entries(robot)) {
    if (resultObject.hasOwnProperty(value)) {
      return null;
    }

    resultObject[value] = key;
  }

  return resultObject;
}

module.exports = inverseRobot;
