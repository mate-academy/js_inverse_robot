'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const key in robot) {
    const newProp = robot[key];

    if (!(newProp in reverseRobot)) {
      reverseRobot[newProp] = key;
    } else {
      return null;
    }
  }

  return reverseRobot;
}

module.exports = inverseRobot;
