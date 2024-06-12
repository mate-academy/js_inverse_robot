'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const objKeys = Object.keys(robot);
  const objValues = Object.values(robot);

  const newObj = {};

  for (let i = 0; i < objKeys.length; i++) {
    if (newObj.hasOwnProperty(objValues[i])) {
      return null;
    }

    newObj[objValues[i]] = objKeys[i];
  }

  return newObj;
}

module.exports = inverseRobot;
