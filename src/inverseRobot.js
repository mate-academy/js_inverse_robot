'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const entries = Object.entries(robot).map(([key, value]) => [value, key]);
  const allElements = entries.flatMap(arr => [...arr]);
  const filteredArray = [...new Set(allElements)];

  if (filteredArray.length === allElements.length) {
    return Object.fromEntries(entries);
  }

  return null;
}

module.exports = inverseRobot;
