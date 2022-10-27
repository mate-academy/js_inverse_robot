/* eslint-disable max-len */
'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  let objects = JSON.stringify(robot);

  objects = Object.entries(robot);

  const objValues = Object.values(robot);

  function hasDuplicates(arr) {
    return arr.some(x => arr.indexOf(x) !== arr.lastIndexOf(x));
  }

  for (let i = 0; i < objValues.length - 1; i++) {
    for (let j = 0; j < objects.length - 1; j++) {
      if (objValues[i] === objects[j] || objects[i][1] === objects[i + 1][1]
        || objValues[i] === objValues[i + 1] || hasDuplicates(objValues)) {
        return null;
      } else {
        objects = Object.fromEntries(Object.entries(robot)
          .map(([key, val]) => [val, key]));

        return objects;
      }
    }
  }

  return robot;
};

module.exports = inverseRobot;
