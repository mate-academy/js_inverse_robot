'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const repairedProperties = [];
  const robotEntries = Object.entries(robot);

  for (let entry of robotEntries) {
    entry = entry.reverse().map((n) => `${n}`);

    const key = entry[0];

    if (repairedProperties.includes(key)) {
      return null;
    } else {
      repairedProperties.push(key);
    }
  }

  return Object.fromEntries(robotEntries);
}

module.exports = inverseRobot;
