'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObj = {};
    for(var key in robot) {
      inverseObj[robot[key]] = key;
    }

    if (Object.keys(inverseObj).length < Object.values(robot).length) {

     return null;
    }

    return inverseObj;
}

module.exports = inverseRobot;
