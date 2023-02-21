'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.values(robot);
  const values = Object.keys(robot);
  const resualt = {};

  for (let i = 0; i < keys.length; i++) {
    resualt[keys[i]] = values[i];
  }

  const resualtKeys = Object.keys(resualt);

  return resualtKeys.length === keys.length ? resualt : null;
}

module.exports = inverseRobot;
