'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const duplicateElem = {};

  for (const key in robot) {
    const robotKey = robot[key];

    if (duplicateElem.hasOwnProperty(robotKey)) {
      return null;
    }

    duplicateElem[robot[key]] = key;
  }

  return duplicateElem;

  // const keysFrom = Object.entries(robot);

  // for (let i = 0; i < keysFrom.length; i++) {
  //   keysFrom[i].reverse(keysFrom);
  // }

  // const newObject = Object.fromEntries(keysFrom);

  // return newObject;
}

module.exports = inverseRobot;
