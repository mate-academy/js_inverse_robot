'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  if (typeof robot !== 'object' || robot === null) {
    return null;
  }

  const invertedObject = {};

  for (const key in robot) {
    if (robot[key] in invertedObject) {
      return null;
    }

    invertedObject[robot[key]] = key;
  }

  return invertedObject;
}

module.exports = inverseRobot;
