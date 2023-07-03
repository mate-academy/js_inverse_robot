'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversRobot = {};
  const ckeck = [];

  for (let i = Object.keys(robot).length - 1; i >= 0; i--) {
    if (ckeck.includes(Object.values(robot)[i])) {
      return null;
    };

    ckeck.push(Object.values(robot)[i]);

    inversRobot[Object.values(robot)[i]] = Object.keys(robot)[i];
  }

  return inversRobot;
};

module.exports = inverseRobot;
