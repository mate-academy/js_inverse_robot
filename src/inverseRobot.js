'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const unique = Array.from(new Set(robotValues));
  const invertedRobotEntries = [];

  if (unique.length < robotValues.length) {
    return null;
  } else {
    for (const key in robot) {
      const newKey = robot[key];

      invertedRobotEntries.push([newKey, key]);
    }

    return Object.fromEntries(invertedRobotEntries.reverse());
  }
}

module.exports = inverseRobot;
