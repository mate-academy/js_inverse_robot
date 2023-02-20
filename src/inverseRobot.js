'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const tobor = {};

  Object.keys(robot).forEach(key => {
    const sourceKey = robot[key];

    if (!tobor[sourceKey]) {
      tobor[sourceKey] = key;
    }
  });

  return Object.keys(robot).length === Object.keys(tobor).length ? tobor : null;
}

module.exports = inverseRobot;
