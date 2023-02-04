'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotEntries = Object.entries(robot);
  const objectReversed = {};
  const objectValues = Object.values(robot);
  const hasDuplicates = new Set(objectValues).size !== objectValues.length;

  if (hasDuplicates) {
    return null;
  };

  for (let i = 0; i < robotEntries.length; i++) {
    const innerArray = robotEntries[i].reverse();

    const objectKey = innerArray[0];
    const objectValue = innerArray[1];

    objectReversed[objectKey] = objectValue;
  }

  return objectReversed;
}

module.exports = inverseRobot;
