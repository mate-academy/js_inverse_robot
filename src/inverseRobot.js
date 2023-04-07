'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const objKeys = Object.keys(robot);
  const objValues = Object.values(robot);
  const trueRobot = {};

  for (let i = 0; i < objKeys.length; i++) {
    if (objValues.includes(objValues[i], i + 1)
    || objKeys.includes(objKeys[i], i + 1)) {
      return null;
    } else {
      trueRobot[objValues[i]] = objKeys[i];
    }
  }

  return trueRobot;
}

module.exports = inverseRobot;
