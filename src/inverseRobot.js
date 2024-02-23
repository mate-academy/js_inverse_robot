'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const myObj = {};

  for (const key in robot) {
    if (myObj.hasOwnProperty(robot[key])) {
      return null;
    }

    myObj[robot[key]] = key;
  }

  return myObj;
}

module.exports = inverseRobot;
