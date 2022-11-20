'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const result = {};
  const obj = Object.entries(robot);

  for (let i = 0; i < obj.length; i++) {
    if (obj[i][1] in result) {
      return null;
    }
    result[obj[i][1]] = obj[i][0];
  }

  return result;
}

module.exports = inverseRobot;
