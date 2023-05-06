'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resObj = {};
  const keyForObj = Object.values(robot);
  const valueForObj = Object.keys(robot);

  for (let i = 0; i < keyForObj.length; i++) {
    if (Object.prototype.hasOwnProperty.call(resObj, keyForObj[i])) {
      return null;
    }

    resObj[keyForObj[i]] = valueForObj[i];
  }

  return resObj;
}

module.exports = inverseRobot;
