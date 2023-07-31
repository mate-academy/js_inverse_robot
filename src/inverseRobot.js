'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrayOfValues = Object.values(robot);
  const uniqueValues = new Set(arrayOfValues);

  if (arrayOfValues.length !== uniqueValues.size) {
    return null;
  }

  const arrayOfKeys = Object.keys(robot);
  const inverseObj = {};

  arrayOfKeys.forEach((key) => {
    const newKey = robot[key];

    inverseObj[newKey] = key;
  });

  return inverseObj;
}

module.exports = inverseRobot;
