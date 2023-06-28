'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const newobj = {};

  for (const prop in robot) {
    if (newobj[robot[prop]] !== undefined) {
      return null;
    }
    newobj[robot[prop]] = prop;
  }

  return newobj;
}

module.exports = inverseRobot;
