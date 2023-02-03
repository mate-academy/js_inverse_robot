'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);

  for (let i = 0; i < robotValues.length; i++) {
    for (let j = 0; j < robotValues.length; j++) {
      if (i !== j) {
        if (robotValues[i] === robotValues[j]) {
          return null;
        }
      }
    }
  }

  const robotEntries = Object.entries(robot);
  const objectReversed = {};

  for (let i = 0; i < robotEntries.length; i++) {
    const innerArray = robotEntries[i].reverse();

    const objectKey = innerArray[0];
    const objectValue = innerArray[1];

    objectReversed[objectKey] = objectValue;
  }

  return objectReversed;
}

module.exports = inverseRobot;
