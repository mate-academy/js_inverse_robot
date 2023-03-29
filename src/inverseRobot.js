'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  if (Object.keys(robot).length === 0) {
    return {};
  }

  const arrayItems = [];

  const reversedEntries = Object.entries(robot).map((entry) => {
    const [key, value] = entry;

    if (arrayItems.includes(value)) {
      return null;
    }

    arrayItems.push(value);

    return [value, key];
  });

  if (reversedEntries.includes(null)) {
    return null;
  }

  return Object.fromEntries(reversedEntries);
}

module.exports = inverseRobot;
