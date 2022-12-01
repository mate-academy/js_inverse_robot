'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const copy = { ...robot };

  for (const key of Object.keys(copy)) {
    if (copy.hasOwnProperty(copy[key])) {
      return null;
    }
    copy[copy[key]] = key;
    delete copy[key];
  }

  return copy;
}

module.exports = inverseRobot;
