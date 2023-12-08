'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let reversed = {};

  if (robot.hasOwnPropery(key)) {
    for (let key in robot) {
      const value = robot[key]
  
      if (Object.values(reversed).includes(value)) {
        return null;
      }
    }
  }
  reversed[value] = key;
}

module.exports = inverseRobot;
