'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultObj = {};
  const robotKeys = Object.keys(robot);

  for (let i = 0; i < robotKeys.length; i++) {
    if (Object.keys(resultObj).includes(robot[robotKeys[i]])) {
      return null;
    }
    resultObj[robot[robotKeys[i]]] = robotKeys[i];
  }

  return resultObj;
}

module.exports = inverseRobot;
