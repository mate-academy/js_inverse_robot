'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const newobj = {};

  for (const prop in robot) {
    const corectKey = robot[prop];

    if (newobj.hasOwnProperty(corectKey)) {
      return null;
    }
    newobj[corectKey] = prop;
  }

  return newobj;
}

module.exports = inverseRobot;
