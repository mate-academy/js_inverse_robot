'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObject = {};

  for (const key in robot) {
    const newKey = robot[key];

    newObject[newKey] = key;
  }

  // duplicate values in robot can only ever create one unique key in newObject
  if (Object.values(newObject).length !== Object.values(robot).length) {
    return null;
  }

  return newObject;
}

module.exports = inverseRobot;
